//
//  comboom_sucht_BLOGApp.swift
//  Shared
//
//  Created by mcpeaps_HD on 03.07.22.
//

import SwiftUI

@main
struct comboom_sucht_BLOGApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
