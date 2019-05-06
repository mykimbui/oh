# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.create(name: "Text Messages", background: "#cc6b66", description: "Website for Texty, a service that gives the businesses the ability to send text messages in bulk to their clients.")
Project.create(name: "Electra", background: "#224a88", description:"Organic typeface based on the work of Charles Dwiggins. Download here.")
Project.create(name: "Holy Gothic", background: "#224a88", description:"Gothic typeface. Coming soon.")
Project.create(name: "Ain't There", background: "#e4a6b5", website: "https://nothere.herokuapp.com/",description:"A website journal containing all the travels I have done in the past years with pictures.")
Project.create(name: "Internet Archive", background: "#71a793", description:"An archive of all the websites we find on the internet. This project is made in a need of organising our references. Project made in collaboration with Faris Kassim.")
Project.create(name: "Coming Soon", background: "#c4b2ba", website: "https://cloth.netlify.com/", description:"A countdown to a new project. Flag is interactive with mouse click and move.")
# Project.create(name: "Drawing Tool", background: "#e7b1a2", website:"https://drawslowly.netlify.com/", description:"Self-initiated project. A traditional drawing tool with a twist. You draw 3D shapes in the space.")
Project.create(name: "Logos", background: "#ca472d", description:"Variety of personal and professional icons and logotypes.")
Project.create(name: "Experiments", background: "#f7f7f7", website:"https://facefilter.netlify.com/", description:"Experiments is a personal project that gives me the freedom to learn new programs, languages or a new technology by creating anything I want with it. Since starting this, I have been teaching myself Cinema 4D, shaders, generative design and three.js.")
Project.create(name: "Fruit Stickers Collective", background: "#f7f7f7", website: "https://fruitstickerscollective.netlify.com/", description:"I like to collect fruit stickers, so I made a website. If you have any cool sticker, please send it to me :)")


Picture.create(url: "00-ohmy-text0.gif", project_id: 1)
Picture.create(url: "00-ohmy-text1.gif", project_id: 1)
Picture.create(url: "00-ohmy-text2.gif", project_id: 1)
Picture.create(url: "00-ohmy-text3.gif", project_id: 1)
Picture.create(url: "00-ohmy-text4.gif", project_id: 1)
Picture.create(url: "00-ohmy-text5.gif", project_id: 1)
Picture.create(url: "00-ohmy-text6.png", project_id: 1)
Picture.create(url: "00-ohmy-text7.png", project_id: 1)
Picture.create(url: "00-ohmy-text8.png", project_id: 1)
Picture.create(url: "00-ohmy-text9.png", project_id: 1)
Picture.create(url: "00-ohmy-text10.png", project_id: 1)
Picture.create(url: "00-ohmy-text11.png", project_id: 1)
Picture.create(url: "00-ohmy-text12.png", project_id: 1)

Picture.create(url: "01-ohmy-electra0.png", project_id: 2)
Picture.create(url: "01-ohmy-electra1.png", project_id: 2)
Picture.create(url: "01-ohmy-electra2.png", project_id: 2)

Picture.create(url: "02-ohmy-holy0.png", project_id: 3)
Picture.create(url: "02-ohmy-holy1.png", project_id: 3)

Picture.create(url: "04-ohmy-ainthere1.gif", project_id: 4)
Picture.create(url: "04-ohmy-ainthere0.gif", project_id: 4)

Picture.create(url: "05-ohmy-webarchive0.png", project_id: 5)
Picture.create(url: "05-ohmy-webarchive1.png", project_id: 5)
Picture.create(url: "05-ohmy-webarchive2.png", project_id: 5)
Picture.create(url: "05-ohmy-webarchive3.png", project_id: 5)
Picture.create(url: "05-ohmy-webarchive4.png", project_id: 5)

Picture.create(url: "06-ohmy-coming0.gif", project_id: 6)
Picture.create(url: "06-ohmy-coming0.png", project_id: 6)
Picture.create(url: "06-ohmy-coming1.png", project_id: 6)
Picture.create(url: "06-ohmy-coming2.png", project_id: 6)
Picture.create(url: "06-ohmy-coming3.png", project_id: 6)

Picture.create(url: "08-ohmy-logo0.png", project_id: 7)
Picture.create(url: "08-ohmy-logo1.png", project_id: 7)
Picture.create(url: "08-ohmy-logo2.gif", project_id: 7)


Picture.create(url: "09-ohmy-experiment0.gif", project_id: 8)
Picture.create(url: "09-ohmy-experiment1.gif", project_id: 8)
Picture.create(url: "09-ohmy-experiment2.gif", project_id: 8)
Picture.create(url: "09-ohmy-experiment3.gif", project_id: 8)
Picture.create(url: "09-ohmy-experiment4.gif", project_id: 8)
Picture.create(url: "09-ohmy-experiment5.gif", project_id: 8)

Picture.create(url: "10-ohmy-fruit0.gif", project_id: 9)
Picture.create(url: "10-ohmy-fruit1.gif", project_id: 9)


