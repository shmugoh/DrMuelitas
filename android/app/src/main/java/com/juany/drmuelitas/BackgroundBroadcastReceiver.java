package com.juany.drmuelitas;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public class BackgroundBroadcastReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        // Open your React Native app when the broadcast is received
        Intent openAppIntent = new Intent(context, MainActivity.class);
        openAppIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(openAppIntent);
    }
}