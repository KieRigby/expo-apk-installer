package expo.modules.apkinstaller

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Build
import android.util.Log
import androidx.core.content.FileProvider
import java.io.File


class ExpoApkInstallerModule () : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoApkInstaller")

    Function("install") { uri: String -> 
      try {
            val apkUri: Uri = Uri.parse(uri)
            val context: Context = appContext.reactContext!!
            val intent = Intent(Intent.ACTION_VIEW)
            intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK

            val apkFileUri: Uri = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
                val file = File(apkUri.path!!)
                FileProvider.getUriForFile(context, context.applicationContext.packageName + ".provider", file)
            } else {
                apkUri
            }

            Log.d("ApkInstaller", "APK URI: $apkUri")
            Log.d("ApkInstaller", "APK File URI: $apkFileUri")

            intent.setDataAndType(apkFileUri, "application/vnd.android.package-archive")
            context.startActivity(intent)
            Log.d("ApkInstaller", "APK installation intent started")
        } catch (e: Exception) {
            Log.e("ApkInstaller", "Failed to install APK", e)
        }
    }
  }
}

