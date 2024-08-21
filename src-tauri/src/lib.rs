#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .setup(|app| {
            #[cfg(desktop)]
            {
                app.handle().plugin(
                    tauri_plugin_global_shortcut::Builder::new().build(),
                )?;
            }
            Ok(())
        })
        .device_event_filter(tauri::DeviceEventFilter::Never)
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
