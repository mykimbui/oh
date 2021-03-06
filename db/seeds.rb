# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Picture.destroy_all
Project.destroy_all

b = Project.create(name: "Electra", font: 'Electra', background: "#224a88", download:'https://drive.google.com/open?id=1o5_XS4NTB1qS9a9XltnUfLo0mT_ZFAkO', description:"Organic typeface based on the work of William Addison Dwiggins. You can try it yourself :)", undernote:"Self-initiated project")
c = Project.create(name: "Holy Gothic", font:'Holy', background: "#224a88", description:"Gothic typeface. Coming soon.", undernote:"Self-initiated project")
i = Project.create(name: "Drawing Tool", background: "#e7b1a2", website:"https://drawwithgradients.netlify.com/", description:"A traditional drawing tool with a twist. You draw 3D shapes in the space.", undernote:"Self-initiated project")
d = Project.create(name: "Ain't There", background: "#e4a6b5", website: "https://ainthere.herokuapp.com/",description:"A website journal containing all the travels I have done in the past years with pictures.", undernote:"Self-initiated project")
f = Project.create(name: "Fruit Stickers Collective", background: "#f7f7f7", website: "https://fruitstickerscollective.netlify.com/", description:"I like to collect fruit stickers, so I made a website. If you have any cool sticker, please send it to me :)", undernote:"Self-initiated project")
h = Project.create(name: "Experiments", background: "#f7f7f7", website:"https://facefilter.netlify.com/", description:"Experiments is a personal project that gives me the freedom to learn new programs, languages or a new technology by creating anything I want with it. Since starting this, I have been teaching myself Cinema 4D, shaders, generative design and three.js.", undernote:"Self-initiated project")
g = Project.create(name: "Logos", background: "#ca472d", description:"Variety of personal and professional icons and logotypes.", undernote:"Client and personal projects")
a = Project.create(name: "Texty", background: "#cc6b66", description: "Website for Texty, a service that gives businesses the resources to send text messages in bulk to their clients.", undernote:"Freelance project for a startup")
e = Project.create(name: "Internet Archive", background: "#71a793", description:"An archive of all the websites we find on the internet. This project is made in a need of organising our references. Project made in collaboration with Faris Kassim. Coming soon.", undernote:"Self-initiated project")
# f = Project.create(name: "Coming Soon", background: "#c4b2ba", website: "https://cloth.netlify.com/", description:"A countdown to a new project. Flag is interactive with mouse click and move.")

Picture.create(url: "00-ohmy-text0.mp4", project_id: a.id)
Picture.create(url: "00-ohmy-text1.mp4", project_id: a.id)
Picture.create(url: "00-ohmy-text2.mp4", project_id: a.id)
Picture.create(url: "00-ohmy-text3.mp4", project_id: a.id)
Picture.create(url: "00-ohmy-text4.mp4", project_id: a.id)
Picture.create(url: "00-ohmy-text5.mp4", project_id: a.id)
Picture.create(url: "00-ohmy-text6.jpg", project_id: a.id)
Picture.create(url: "00-ohmy-text7.jpg", project_id: a.id)
Picture.create(url: "00-ohmy-text8.jpg", project_id: a.id)
Picture.create(url: "00-ohmy-text9.jpg", project_id: a.id)
Picture.create(url: "00-ohmy-text10.jpg", project_id: a.id)
Picture.create(url: "00-ohmy-text11.jpg", project_id: a.id)
Picture.create(url: "00-ohmy-text12.jpg", project_id: a.id)

# Picture.create(url: "01-ohmy-electra0.jpg", project_id: b.id)
# Picture.create(url: "01-ohmy-electra1.jpg", project_id: b.id)
# Picture.create(url: "01-ohmy-electra2.jpg", project_id: b.id)

Picture.create(url: "02-ohmy-holy000.jpg", project_id: c.id)
Picture.create(url: "02-ohmy-holy00.jpg", project_id: c.id)
Picture.create(url: "02-ohmy-holy0.jpg", project_id: c.id)
Picture.create(url: "02-ohmy-holy1.jpg", project_id: c.id)

Picture.create(url: "04-ohmy-ainthere0.mp4", project_id: d.id)
Picture.create(url: "04-ohmy-ainthere1.mp4", project_id: d.id)

Picture.create(url: "10-ohmy-fruit0.mp4", project_id: f.id)
Picture.create(url: "10-ohmy-fruit1.mp4", project_id: f.id)

Picture.create(url: "05-ohmy-webarchive0.jpg", project_id: e.id)
Picture.create(url: "05-ohmy-webarchive1.jpg", project_id: e.id)
Picture.create(url: "05-ohmy-webarchive4.jpg", project_id: e.id)

# Picture.create(url: "08-ohmy-logo0.jpg", project_id: g.id)
Picture.create(url: "08-ohmy-logo1.png", project_id: g.id)
Picture.create(url: "08-ohmy-logo3.png", project_id: g.id)
Picture.create(url: "08-ohmy-logo4.png", project_id: g.id)
Picture.create(url: "08-ohmy-logo5.png", project_id: g.id)

Picture.create(url: "09-ohmy-experiment0.mp4", project_id: h.id)
Picture.create(url: "09-ohmy-experiment1.mp4", project_id: h.id)
Picture.create(url: "09-ohmy-experiment2.mp4", project_id: h.id)
Picture.create(url: "09-ohmy-experiment3.mp4", project_id: h.id)
Picture.create(url: "09-ohmy-experiment4.mp4", project_id: h.id)
Picture.create(url: "06-ohmy-coming0.mp4", project_id: h.id)
Picture.create(url: "06-ohmy-coming3.jpg", project_id: h.id)

Picture.create(url: "11-ohmy-draw0.mp4", project_id: i.id)
Picture.create(url: "11-ohmy-draw1.mp4", project_id: i.id)



