name := """Chess_WebApp"""

version := "1.0-SNAPSHOT"

scalaVersion := "3.3.1"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

libraryDependencies += guice
libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "6.0.0-RC2" % Test
libraryDependencies += "com.typesafe.play" %% "play-json" % "2.10.0"
