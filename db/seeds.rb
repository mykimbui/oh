# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.create(name: "Swim Good", background: "#cc6b66", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")
Project.create(name: "Ping Pong Club", background: "#224a88", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")
Project.create(name: "Ain't There", background: "#e4a6b5", description:"A website journal containing all the travels I have done in the past years with pictures.")
Project.create(name: "Text Messages", background: "#a27faf", description:"Website for Texty, a service that gives the businesses the ability to send text messages in bulk to their clients. Marketing website coded and designed by me. Business interface design by me.")
Project.create(name: "Internet Archive", background: "#71a793", description:"An archive of all the websites we find on the internet. This project is made in a need of organising our references. Project made in collaboration with Faris Kassim.")
Project.create(name: "Coming Soon", background: "#c4b2ba", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")
Project.create(name: "Drawing Tool", background: "#e7b1a2", description:"Self-initiated project. A traditional drawing tool with a twist. You draw 3D shapes in the space.")
Project.create(name: "Logos", background: "#ca472d", description:"Variety of personal and professional icons and logotypes.")
Project.create(name: "Posters", background: "#815d5f", description:"Variety of posters realised in..")
Project.create(name: "Experiments", background: "#f7f7f7", description:"Experiments is a personal project that gives me the freedom to learn new programs, languages or a new technology by creating anything I want with it. Since starting this, I have been teaching myself Cinema 4D, shaders, generative design and three.js.")

Picture.create(url: "https://picsum.photos/900/600/?image=0", project_id: 1)
Picture.create(url: "https://picsum.photos/900/600/?image=1", project_id: 1)
Picture.create(url: "https://picsum.photos/900/600/?image=3", project_id: 1)
Picture.create(url: "https://picsum.photos/900/600/?image=4", project_id: 1)
Picture.create(url: "https://picsum.photos/900/600/?image=5", project_id: 1)
Picture.create(url: "https://picsum.photos/900/600/?image=6", project_id: 2)
Picture.create(url: "https://picsum.photos/900/600/?image=7", project_id: 2)
Picture.create(url: "https://picsum.photos/900/600/?image=8", project_id: 2)
Picture.create(url: "https://picsum.photos/900/600/?image=9", project_id: 2)
Picture.create(url: "https://picsum.photos/900/600/?image=10", project_id: 2)
Picture.create(url: "https://picsum.photos/900/600/?image=110", project_id: 2)
Picture.create(url: "https://picsum.photos/900/600/?image=30", project_id: 3)
Picture.create(url: "https://picsum.photos/900/600/?image=60", project_id: 3)
Picture.create(url: "https://picsum.photos/900/600/?image=70", project_id: 3)
Picture.create(url: "https://picsum.photos/900/600/?image=80", project_id: 3)
Picture.create(url: "https://picsum.photos/900/600/?image=40", project_id: 4)
Picture.create(url: "https://picsum.photos/900/600/?image=30", project_id: 4)
Picture.create(url: "https://picsum.photos/900/600/?image=0", project_id: 4)
Picture.create(url: "https://picsum.photos/900/600/?image=0", project_id: 4)
Picture.create(url: "https://picsum.photos/900/600/?image=0", project_id: 4)
Picture.create(url: "https://picsum.photos/900/600/?image=0", project_id: 4)
Picture.create(url: "https://picsum.photos/900/600/?image=0", project_id: 4)
Picture.create(url: "https://picsum.photos/900/600/?image=0", project_id: 5)
Picture.create(url: "https://picsum.photos/900/600/?image=0", project_id: 6)
Picture.create(url: "https://picsum.photos/900/600/?image=0", project_id: 7)
Picture.create(url: "https://picsum.photos/900/600/?image=0", project_id: 8)
Picture.create(url: "https://picsum.photos/900/600/?image=0", project_id: 9)
Picture.create(url: "https://picsum.photos/900/600/?image=0", project_id: 10)
