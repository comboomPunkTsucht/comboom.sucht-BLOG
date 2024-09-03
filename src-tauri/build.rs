use std::fs;

fn main() {
    // Lese Cargo.toml zur Build-Zeit
    let content = fs::read_to_string("Cargo.toml").expect("Failed to read Cargo.toml");

    // Extrahiere die Versionsnummer
    let version_line = content
        .lines()
        .find(|line| line.starts_with("version = "))
        .expect("Version not found");

    let version = version_line.split('=')
        .nth(1)
        .expect("No version found")
        .trim()
        .trim_matches('"');

        // Extrahiere die Versionsnummer
    let description_line = content
        .lines()
        .find(|line| line.starts_with("description = "))
        .expect("Description not found");

    let description = description_line.split('=')
        .nth(1)
        .expect("No Description found")
        .trim()
        .trim_matches('"');

    println!("cargo:rerun-if-changed=Cargo.toml");
    println!("cargo:version={}", version);
    tauri_build::build()
}
