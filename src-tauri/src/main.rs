use clap::{Command, Arg};
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    let version = env!("CARGO_PKG_VERSION");
    let description = env!("CARGO_PKG_DESCRIPTION");
    let command = Command::new("comboom.sucht")
        .version(version)
        .author("comboom.sucht")
        .about(description)
        .get_matches();
    comboom_punkt_sucht_app_lib::run()
}
