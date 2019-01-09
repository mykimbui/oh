# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.create(name: "Swim Good", background: "#469AE0")
Project.create(name: "Ping Pong Club", background: "red")
Project.create(name: "Ain't There", background: "blue")
Project.create(name: "Text Messages", background: "green")
Project.create(name: "Internet Archive", background: "yellow")
Project.create(name: "Coming Soon", background: "#469AE0")
Project.create(name: "Drawing Tool", background: "#469AE0")
Project.create(name: "Logos", background: "#469AE0")
Project.create(name: "Posters", background: "#469AE0")
Project.create(name: "Experiments", background: "#469AE0")

Picture.create(url: "https://via.placeholder.com/900x600", project_id: 1)
Picture.create(url: "https://via.placeholder.com/900x600", project_id: 2)
Picture.create(url: "https://via.placeholder.com/900x600", project_id: 3)
Picture.create(url: "https://via.placeholder.com/900x600", project_id: 4)
