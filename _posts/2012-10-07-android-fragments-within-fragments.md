---
layout: post
heading: 'Android: Fragments within Fragments'
categories: dev
---

I've been playing with Android app development this weekend, as a bit of fun. It's been a while since I did it so I jumped in with all the new stuff to see what was what.

Fragments is something I largely ignored last time, as it was available for Honeycomb and I only had 2.x devices. Now I've got the phone and tablet running 4.1.1 I thought it was time to have a go. Additionally, the app I'm building has some quite complex UI so fragments was basically a requirement reading the docs.

I was building out the settings stuff first (the app needs credentials to work so I kinda had to start there), which was relatively easy. I wanted to create a setup flow, whereby when you start the app it checks if you have credentials that are valid and if not walks through the setup procedure. I was using fragments to do this, each setup page being a different fragment rendered within the whole window in the main activity.

Upon realising that I had already built a PreferenceFragment for the config settings a user had to setup at the beginning (they were easy to logically group this way) I thought I would just include that in one of the setup flow fragments and my config options would be all set up themselves. This worked rather nicely, until I got a rather nasty exception when I ran through the flow for a second time:

    10-07 13:28:02.663: E/AndroidRuntime(1809): FATAL EXCEPTION: main
    10-07 13:28:02.663: E/AndroidRuntime(1809): java.lang.RuntimeException: Unable to destroy activity {com.example.app/com.example.app.Base}: java.lang.IllegalStateException: Can not perform this action after onSaveInstanceState
    10-07 13:28:02.663: E/AndroidRuntime(1809): at android.app.ActivityThread.performDestroyActivity(ActivityThread.java:3273)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at android.app.ActivityThread.handleDestroyActivity(ActivityThread.java:3291)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at android.app.ActivityThread.access$1200(ActivityThread.java:130)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at android.app.ActivityThread$H.handleMessage(ActivityThread.java:1248)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at android.os.Handler.dispatchMessage(Handler.java:99)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at android.os.Looper.loop(Looper.java:137)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at android.app.ActivityThread.main(ActivityThread.java:4745)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at java.lang.reflect.Method.invokeNative(Native Method)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at java.lang.reflect.Method.invoke(Method.java:511)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:786)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:553)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at dalvik.system.NativeStart.main(Native Method)
    10-07 13:28:02.663: E/AndroidRuntime(1809): Caused by: java.lang.IllegalStateException: Can not perform this action after onSaveInstanceState
    10-07 13:28:02.663: E/AndroidRuntime(1809): at android.app.FragmentManagerImpl.checkStateLoss(FragmentManager.java:1280)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at android.app.FragmentManagerImpl.enqueueAction(FragmentManager.java:1291)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at android.app.BackStackRecord.commitInternal(BackStackRecord.java:548)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at android.app.BackStackRecord.commit(BackStackRecord.java:532)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at com.kodhus.tropics.setup.SetupCredsFragment.onDestroy(SetupCredsFragment.java:24)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at android.app.FragmentManagerImpl.moveToState(FragmentManager.java:983)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at android.app.FragmentManagerImpl.moveToState(FragmentManager.java:1035)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at android.app.FragmentManagerImpl.moveToState(FragmentManager.java:1017)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at android.app.FragmentManagerImpl.dispatchDestroy(FragmentManager.java:1826)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at android.app.Activity.performDestroy(Activity.java:5171)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at android.app.Instrumentation.callActivityOnDestroy(Instrumentation.java:1109)
    10-07 13:28:02.663: E/AndroidRuntime(1809): at android.app.ActivityThread.performDestroyActivity(ActivityThread.java:3260)
    10-07 13:28:02.663: E/AndroidRuntime(1809): ... 11 more

I had a Google and was surprised to find endless Stack Overflow posts saying "Fragments in fragments can't be done". Well I may be new to this version of Android development but that seemed a little foolish and also acted like a red flag to a bull. So I had a hunt around and it turns out it *is *possible to do fragments within fragments, but you just have to clean up after yourself - activities only clean up the top level fragments in them when they are closed or transitioned etc.

Thus I had a half hour of playing around trying to find the right settings, and this is the code I came up with. It goes in the onDestroy method of the middle fragment, i.e. the one that is within the activity and has another fragment within it. Note that you need to know the ID of the inner fragment for this to work.

    @Override
    public void onDestroy() {
    Fragment fragment = getFragmentManager().findFragmentById(R.id.innerfragment);
    if (fragment.isResumed()) {
        getFragmentManager().beginTransaction().remove(fragment).commit();
    }
    super.onDestroy();
    }

Some explanation: first load up the inner fragment by its ID, in this case R.id.innerfragment. Make sure this is right or you will kill the wrong thing! Next, check if it is resumed. If you don't do this check, you will try and kill a previously killed fragment, which will barf out even worse than the problem we're trying to solve, and a little more unpredictably at that. Finally if you have a fragment that is not removed, use the fragment manager to construct a transaction to remove it. At the end you continue the stack's destroy method call.

Turned out to be rather a few lines of code in the end to accomplish something pretty awesome, which should be possible anyway.
