import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimeLineElement from '@/components/timeline-element';
import SkillCard from '@/components/skill-card';
import Link from 'next/link';

export default function Home() {
    return (
      <main className="flex flex-nowrap min-h-screen flex-col items-center justify-between p-4">
            <h1 className='text-4xl font-bold gap-8'>Fabian Aps</h1>

            <div className="mb-10 text-justify">
    Ich bin ein IT-Assistent in Ausbildung.
    <br/>
    <div className="flex flex-col items-start">
                    <div className="flex flex-row items-center">
                        <Link href="mailto:fabian.aps@comboompunksucht.app" legacyBehavior passHref><p className="cursor-pointer">E-Mail: fabian.aps@comboompunksucht.app</p></Link></div>
                    <div className="flex flex-row items-center">
                        <Link href="tel:+4917645172171" legacyBehavior passHref><p className="cursor-pointer">Telefonnummer: +4917645172171</p></Link>
                    </div>
                
                </div>
    <br/>
    <Link href="https://maps.apple.com/?address=Ludwig-Renn-Stra%C3%9Fe%2033,%2012679%20Berlin,%20Deutschland&ll=52.551673,13.558337" legacyBehavior><p>Adresse: Ludwig-Renn-Straße 33, 12679 Berlin, Deutschland</p></Link>
    <br/>
    Geburtsdatum: 06.06.2003          
  </div>

            <h2 className='text-3xl font-bold gap-8'>Ausbildung</h2>

            <Timeline position="right" className="justify-center">
              <TimeLineElement
                TimeLineTitle='Oberstufenzentrum Informations- & Medizientechnik (OSZ IMT)'
                TimeLineBadges={["Berlin", "Ausbildung", "Fachabitur", "IT", "3 Jahre"]}
                TimeLineImage="https://www.oszimt.de/favicon.ico"
                TimeLineImageAlt='Oberstufenzentrum Informations- & Medizientechnik (OSZ IMT) Logo'
                TimeLineImageFallback='OSZimt'
                startdate='2021'
                enddate='2024'
              >
                <a>Ausbildung zum IT-Assistenten</a>
              </TimeLineElement>
              <TimeLineElement
                TimeLineTitle='Carl-von-Linné-Schule'
                TimeLineBadges={["Berlin", "MSA(OG)"]}
                TimeLineImage="https://linne.schule/images/Logos/linne_logo.png"
                TimeLineImageAlt='Carl-von-Linné-Schule Logo'
                TimeLineImageFallback='CvL'
                startdate='2010'
                enddate='2021'
              >
                <a>Algemeine Schule Grundschule + Sekundarstufe I</a>
              </TimeLineElement>
            </Timeline>

            <h2 className='text-3xl font-bold gap-8'>Erfahrung</h2>

            <Timeline position="right" className="justify-center">
              <TimeLineElement
                TimeLineTitle='KfW Bankengruppe'
                TimeLineBadges={["Berlin", "IT", "Betriebspraktikum", "9 Wochen"]}
                TimeLineImage="/pictures/kfw_logo.png"
                TimeLineImageAlt='KfW Logo'
                TimeLineImageFallback='KfW'
                startdate='27.11.2023'
                enddate='02.02.2024'
              >
                <a>Betribspraktikum als IT-Assistent im Rahmen der Ausbildung am OSZ IMT</a>
                <br />
                <a>Automatisierungen mit Ansible + Dokumentation für Ansible in Confluence der KfW</a>
              </TimeLineElement>
              <TimeLineElement
                TimeLineTitle='Akademie der Künste (ADK)'
                TimeLineBadges={["Berlin", "Musik", "Schülerpraktikum", "3 Wochen"]}
                TimeLineImage="https://www.adk.de/favicon.ico"
                TimeLineImageAlt='ADK Logo'
                TimeLineImageFallback='ADK'
                startdate='02.2020'
                enddate='02.2020'
              >
                <a>Syntezizerentwiklung</a>
              </TimeLineElement>
              <TimeLineElement
                TimeLineTitle='Tosa Security & Service GmbH & Co KG'
                TimeLineBadges={["Trebin", "Security","Service", "Schülerpraktikum", "3 Tage"]}
                TimeLineImage="https://tosa-security.de/tosa-favicon.png"
                TimeLineImageAlt='Tosa Security & Service GmbH & Co KG Logo'
                TimeLineImageFallback='TSS'
                startdate='01.2019'
                enddate='01.2019'
              >
                <a>Bürotätigkeiten</a>
              </TimeLineElement>
              <TimeLineElement
                TimeLineTitle='Pfennigpfeiffer'
                TimeLineBadges={["Berlin", "Einzelhandel", "Schülerpraktikum", "1 Tag"]}
                TimeLineImage="https://www.pfennigpfeiffer.de/media/f0/ee/50/1678457663/favicon-32x32.png"
                TimeLineImageAlt='Pfennigpfeiffer Logo'
                TimeLineImageFallback='P'
                startdate='06.2018'
                enddate='06.2018'
              >
                <a>Regale einräumen</a>
              </TimeLineElement>
            </Timeline>

            <h2 className='text-3xl font-bold gap-8'>Fähigkeiten</h2>

            <div className='my-Project-grid justify-center gap-8'>
              <SkillCard
                SkillTitle='Java'
                SkillBadges={["Development", "3 Jahre"]}
                SkillImage='/pictures/java.png'
                SkillImageAlt='Java Logo'
                SkillImageFallback='JDK'
                Skilllevel={80} />
              <SkillCard
                SkillTitle='Swift (SwiftUI)'
                SkillBadges={["Development","Frontend", "Apple", "2 Jahre"]}
                SkillImage='/pictures/swift.png'
                SkillImageAlt='Swift Logo'
                SkillImageFallback='SUI'
                Skilllevel={60} />
              <SkillCard
                SkillTitle='Cisco IOS'
                SkillBadges={["Konfiguration", "1 Jahre"]}
                SkillImage='/pictures/cisco.png'
                SkillImageAlt='Cisco Logo'
                SkillImageFallback='IOS'
                Skilllevel={50} />
              <SkillCard
                SkillTitle='Microsoft 365'
                SkillBadges={["Office", "365","Microsoft", "5 Jahre"]}
                SkillImage='/pictures/ms365.png'
                SkillImageAlt='Microsoft 365 Logo'
                SkillImageFallback='MS365'
                Skilllevel={70} />
              <SkillCard
                SkillTitle='Visual Studio Code'
                SkillBadges={["Development","Microsoft", "4 Jahre"]}
                SkillImage='/pictures/vscode.png'
                SkillImageAlt='Visual Studio Code Logo'
                SkillImageFallback='VScode'
                Skilllevel={60} />
              <SkillCard
                SkillTitle='Apple Logic Pro'
                SkillBadges={["Musik", "2 Jahre"]}
                SkillImage='/pictures/logicpro.png'
                SkillImageAlt='Apple Logic Pro Logo'
                SkillImageFallback='ALP'
                Skilllevel={60} />
              <SkillCard
                SkillTitle='Apple Xcode 14+                '
                SkillBadges={["Development","Apple", "2 Jahre"]}
                SkillImage='/pictures/xcode.png'
                SkillImageAlt='Apple Xcode Logo'
                SkillImageFallback='XCODE'
                Skilllevel={70} />
              <SkillCard
                SkillTitle='Apple macOS'
                SkillBadges={["Betriebsystem","Apple", "2 Jahre"]}
                SkillImage='/pictures/macos.png'
                SkillImageAlt='macOS Logo'
                SkillImageFallback='macOS'
                Skilllevel={90} />
              <SkillCard
                SkillTitle='Apple iOS'
                SkillBadges={["Betriebsystem","Apple", "3 Jahre"]}
                SkillImage='/pictures/ios.png'
                SkillImageAlt='iOS Logo'
                SkillImageFallback='iOS'
                Skilllevel={80} />
              <SkillCard
                SkillTitle='Apple iPadOS'
                SkillBadges={["Betriebsystem","Apple", "3 Jahre"]}
                SkillImage='/pictures/ios.png'
                SkillImageAlt='iOS Logo'
                SkillImageFallback='iOS'
                Skilllevel={80} />
              <SkillCard
                SkillTitle='Apple vissionOS'
                SkillBadges={["Betriebsystem","Apple", "1 Jahre"]}
                SkillImage='/pictures/ios.png'
                SkillImageAlt='iOS Logo'
                SkillImageFallback='iOS'
                Skilllevel={80} />
              <SkillCard
                SkillTitle='Linux'
                SkillBadges={["Betriebsystem", "5 Jahre"]}
                SkillImage='/pictures/linux.png'
                SkillImageAlt='Linux Logo'
                SkillImageFallback='L'
                Skilllevel={60} />
              <SkillCard
                SkillTitle='Windows'
                SkillBadges={["Betriebsystem","Microsoft", "3 Jahre"]}
                SkillImage='/pictures/windows.png'
                SkillImageAlt='Windows Logo'
                SkillImageFallback='WIN'
                Skilllevel={60} />
              <SkillCard
                SkillTitle='Microsoft Teams'
                SkillBadges={["Office", "Microsoft", "4 Jahre"]}
                SkillImage='/pictures/teams.png'
                SkillImageAlt='Microsoft Teams Logo'
                SkillImageFallback='Teams'
                Skilllevel={60} />
              <SkillCard
                SkillTitle='Eclipse'
                SkillBadges={["Development", "2 Jahre"]}
                SkillImage='/pictures/eclipse.png'
                SkillImageAlt='Eclipse Logo'
                SkillImageFallback='JDK'
                Skilllevel={60} />
              <SkillCard
                SkillTitle='MySQL'
                SkillBadges={["Development", "1 Jahre"]}
                SkillImage='/pictures/mysql.png'
                SkillImageAlt='MySQL Logo'
                SkillImageFallback='SQL'
                Skilllevel={80} />
              <SkillCard
                SkillTitle='MySQL Comunity Server'
                SkillBadges={["Development", "1 Jahre"]}
                SkillImage='/pictures/mysql.png'
                SkillImageAlt='MySQL Logo'
                SkillImageFallback='SQL'
                Skilllevel={60} />
              <SkillCard
                SkillTitle='MySQLWorckbench'
                SkillBadges={["Development", "1 Jahre"]}
                SkillImage='/pictures/mysql.png'
                SkillImageAlt='MySQL Logo'
                SkillImageFallback='SQL'
                Skilllevel={60} />
              <SkillCard
                SkillTitle='Ansible'
                SkillBadges={["Automation", "2 Monate"]}
                SkillImage='/pictures/ansible.png'
                SkillImageAlt='Ansible Logo'
                SkillImageFallback='A'
                Skilllevel={60} />
            </div>
      </main>
    );
  }