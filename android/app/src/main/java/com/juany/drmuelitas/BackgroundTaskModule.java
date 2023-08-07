package com.juany.drmuelitas;

import android.content.Intent;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class BackgroundTaskModule extends ReactContextBaseJavaModule {
    private static final String MODULE_NAME = "BackgroundTaskModule";
    private static final String ACTION_OPEN_APP = "com.example.OPEN_APP_ACTION";

    public BackgroundTaskModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @ReactMethod
    public void triggerOpenApp() {
        Intent intent = new Intent(ACTION_OPEN_APP);
        getReactApplicationContext().sendBroadcast(intent);
    }
}