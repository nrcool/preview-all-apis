const e=JSON.parse('[{"id":"1","title":"Introduction to Computer Science","instructor":"Dr. Sarah Johnson","university":"MIT","duration":"12 weeks","level":"Beginner","rating":4.8,"students":15000,"price":"$49.99","image":"https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg","category":"Computer Science"},{"id":"2","title":"Machine Learning Fundamentals","instructor":"Prof. Andrew Smith","university":"Stanford","duration":"10 weeks","level":"Intermediate","rating":4.9,"students":12000,"price":"$59.99","image":"https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg","category":"Data Science"},{"id":"3","title":"Web Development Bootcamp","instructor":"Angela Yu","university":"London App Brewery","duration":"16 weeks","level":"Beginner","rating":4.7,"students":25000,"price":"$69.99","image":"https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg","category":"Web Development"},{"id":"4","title":"Digital Marketing Masterclass","instructor":"Neil Patel","university":"Digital Marketing Institute","duration":"8 weeks","level":"All Levels","rating":4.6,"students":18000,"price":"$79.99","image":"https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg","category":"Marketing"},{"id":"5","title":"Financial Management","instructor":"Prof. Robert Miller","university":"Harvard Business School","duration":"14 weeks","level":"Advanced","rating":4.8,"students":9000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/648826_f0e5_4.jpg","category":"Finance"},{"id":"6","title":"Artificial Intelligence Ethics","instructor":"Dr. Emily Chen","university":"Berkeley","duration":"6 weeks","level":"Intermediate","rating":4.7,"students":7500,"price":"$69.99","image":"https://img-c.udemycdn.com/course/240x135/2365628_0b60_9.jpg","category":"AI & Ethics"},{"id":"7","title":"Mobile App Development","instructor":"Mark Wilson","university":"Google Academy","duration":"12 weeks","level":"Intermediate","rating":4.9,"students":13000,"price":"$79.99","image":"https://img-c.udemycdn.com/course/240x135/1778502_f4b9_12.jpg","category":"Mobile Development"},{"id":"8","title":"Data Analytics with Python","instructor":"Jose Portilla","university":"Pierian Data","duration":"10 weeks","level":"Intermediate","rating":4.8,"students":16000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg","category":"Data Analytics"},{"id":"9","title":"Graphic Design Principles","instructor":"Lisa Brown","university":"Parsons School of Design","duration":"8 weeks","level":"Beginner","rating":4.6,"students":11000,"price":"$64.99","image":"https://img-c.udemycdn.com/course/240x135/1643044_e281_5.jpg","category":"Design"},{"id":"10","title":"Business Strategy","instructor":"Prof. Michael Porter","university":"Wharton School","duration":"12 weeks","level":"Advanced","rating":4.9,"students":8500,"price":"$99.99","image":"https://img-c.udemycdn.com/course/240x135/648826_f0e5_4.jpg","category":"Business"},{"id":"11","title":"React - The Complete Guide","instructor":"Maximilian Schwarzmüller","university":"Academind","duration":"48 hours","level":"All Levels","rating":4.8,"students":750000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg","category":"Web Development"},{"id":"12","title":"Python for Data Science","instructor":"Dr. Angela Yu","university":"London App Brewery","duration":"42 hours","level":"Intermediate","rating":4.9,"students":520000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg","category":"Data Science"},{"id":"13","title":"AWS Certified Solutions Architect","instructor":"Stephane Maarek","university":"AWS Training","duration":"35 hours","level":"Advanced","rating":4.7,"students":480000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/362328_91f3_10.jpg","category":"Cloud Computing"},{"id":"14","title":"Complete JavaScript Course","instructor":"Jonas Schmedtmann","university":"Coding Academy","duration":"69 hours","level":"All Levels","rating":4.8,"students":680000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg","category":"Web Development"},{"id":"15","title":"iOS App Development Bootcamp","instructor":"Dr. Angela Yu","university":"London App Brewery","duration":"55 hours","level":"Beginner","rating":4.8,"students":420000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/1778502_f4b9_12.jpg","category":"Mobile Development"},{"id":"16","title":"Excel from Beginner to Advanced","instructor":"Kyle Pew","university":"Business Academy","duration":"18 hours","level":"All Levels","rating":4.6,"students":920000,"price":"$74.99","image":"https://img-c.udemycdn.com/course/240x135/793796_0e89_2.jpg","category":"Business"},{"id":"17","title":"Adobe Photoshop CC Masterclass","instructor":"Martin Perhiniak","university":"Design Academy","duration":"25 hours","level":"All Levels","rating":4.7,"students":380000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/1046722_cbd7_6.jpg","category":"Design"},{"id":"18","title":"Flutter Development Bootcamp","instructor":"Dr. Angela Yu","university":"London App Brewery","duration":"28 hours","level":"Intermediate","rating":4.8,"students":320000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/2259120_305f_6.jpg","category":"Mobile Development"},{"id":"19","title":"SQL Masterclass","instructor":"Jose Portilla","university":"Pierian Data","duration":"22 hours","level":"All Levels","rating":4.7,"students":420000,"price":"$79.99","image":"https://img-c.udemycdn.com/course/240x135/762616_7693_3.jpg","category":"Database"},{"id":"20","title":"Digital Marketing 2024","instructor":"Phil Ebiner","university":"Marketing Academy","duration":"32 hours","level":"Beginner","rating":4.6,"students":580000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/914296_3670_8.jpg","category":"Marketing"},{"id":"21","title":"Unity Game Development","instructor":"Jonathan Weinberger","university":"GameDev.tv","duration":"35 hours","level":"Beginner","rating":4.7,"students":420000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/2514486_c4e0.jpg","category":"Game Development"},{"id":"22","title":"Docker & Kubernetes","instructor":"Stephen Grider","university":"Code With Mosh","duration":"22 hours","level":"Intermediate","rating":4.8,"students":280000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/1793828_7999.jpg","category":"DevOps"},{"id":"23","title":"Vue.js Complete Guide","instructor":"Maximilian Schwarzmüller","university":"Academind","duration":"32 hours","level":"All Levels","rating":4.8,"students":320000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/995016_ebf4_3.jpg","category":"Web Development"},{"id":"24","title":"Blender 3D Modeling","instructor":"GameDev.tv Team","university":"GameDev.tv","duration":"42 hours","level":"Beginner","rating":4.7,"students":180000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/2514568_e9c5_3.jpg","category":"3D & Animation"},{"id":"25","title":"Ethical Hacking","instructor":"Zaid Sabih","university":"z Security","duration":"25 hours","level":"All Levels","rating":4.6,"students":520000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/857010_8239_2.jpg","category":"Cybersecurity"},{"id":"26","title":"Angular - The Complete Guide","instructor":"Maximilian Schwarzmüller","university":"Academind","duration":"34 hours","level":"All Levels","rating":4.8,"students":420000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/756150_c033_2.jpg","category":"Web Development"},{"id":"27","title":"CompTIA A+ Certification","instructor":"Mike Meyers","university":"Total Seminars","duration":"45 hours","level":"Beginner","rating":4.7,"students":280000,"price":"$99.99","image":"https://img-c.udemycdn.com/course/240x135/16389_4f40_7.jpg","category":"IT Certification"},{"id":"28","title":"Financial Analysis","instructor":"365 Careers","university":"365 Financial Academy","duration":"18 hours","level":"Intermediate","rating":4.6,"students":320000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/321410_d9c5_4.jpg","category":"Finance"},{"id":"29","title":"Node.js Developer Course","instructor":"Andrew Mead","university":"Mead Academy","duration":"35 hours","level":"All Levels","rating":4.7,"students":280000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/922484_52a1_8.jpg","category":"Web Development"},{"id":"30","title":"After Effects CC Animation","instructor":"Phil Ebiner","university":"Video School","duration":"28 hours","level":"Beginner","rating":4.6,"students":180000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/1457314_c22c_3.jpg","category":"Video & Animation"},{"id":"31","title":"Data Science with Python","instructor":"Jose Portilla","university":"Pierian Data","duration":"40 hours","level":"Intermediate","rating":4.8,"students":450000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg","category":"Data Science"},{"id":"32","title":"UI/UX Design Masterclass","instructor":"Daniel Walter Scott","university":"Bring Your Own Laptop","duration":"28 hours","level":"All Levels","rating":4.7,"students":220000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/1452908_8741_3.jpg","category":"Design"},{"id":"33","title":"Android App Development","instructor":"Rob Percival","university":"Codestars","duration":"45 hours","level":"Beginner","rating":4.6,"students":280000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/1672410_d4da_5.jpg","category":"Mobile Development"},{"id":"34","title":"MongoDB Complete Guide","instructor":"Maximilian Schwarzmüller","university":"Academind","duration":"25 hours","level":"All Levels","rating":4.7,"students":180000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/1906852_93c6_2.jpg","category":"Database"},{"id":"35","title":"Project Management Professional","instructor":"Joseph Phillips","university":"PMI Institute","duration":"35 hours","level":"Advanced","rating":4.6,"students":320000,"price":"$99.99","image":"https://img-c.udemycdn.com/course/240x135/1361790_2eb7_6.jpg","category":"Business"},{"id":"36","title":"Java Programming Masterclass","instructor":"Tim Buchalka","university":"Learn Programming Academy","duration":"80 hours","level":"All Levels","rating":4.8,"students":520000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/533682_c10c_4.jpg","category":"Programming"},{"id":"37","title":"Music Theory Complete","instructor":"Jason Allen","university":"Music Academy","duration":"22 hours","level":"Beginner","rating":4.7,"students":150000,"price":"$79.99","image":"https://img-c.udemycdn.com/course/240x135/1355784_064c_3.jpg","category":"Music"},{"id":"38","title":"Google Analytics Masterclass","instructor":"Daragh Walsh","university":"Digital Academy","duration":"18 hours","level":"Intermediate","rating":4.6,"students":280000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/1207962_2b04_2.jpg","category":"Marketing"},{"id":"39","title":"Blockchain Development","instructor":"Stephen Grider","university":"Code With Mosh","duration":"32 hours","level":"Advanced","rating":4.8,"students":180000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg","category":"Blockchain"},{"id":"40","title":"Maya 3D Animation","instructor":"Lucas Ridley","university":"Animation Academy","duration":"45 hours","level":"All Levels","rating":4.7,"students":120000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/1669514_189d_4.jpg","category":"3D & Animation"},{"id":"41","title":"Cybersecurity Fundamentals","instructor":"Nathan House","university":"StationX","duration":"32 hours","level":"Beginner","rating":4.7,"students":280000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/614772_233b_9.jpg","category":"Cybersecurity"},{"id":"42","title":"Digital Photography","instructor":"Phil Ebiner","university":"Photography Academy","duration":"24 hours","level":"All Levels","rating":4.6,"students":320000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/1462428_639f_7.jpg","category":"Photography"},{"id":"43","title":"Swift iOS Development","instructor":"Angela Yu","university":"London App Brewery","duration":"55 hours","level":"Intermediate","rating":4.8,"students":250000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/1778502_f4b9_12.jpg","category":"Mobile Development"},{"id":"44","title":"SEO Masterclass 2024","instructor":"Alex Genadinik","university":"Digital Marketing School","duration":"22 hours","level":"All Levels","rating":4.6,"students":180000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/1035472_23ce_6.jpg","category":"Marketing"},{"id":"45","title":"Microsoft Excel Advanced","instructor":"Kyle Pew","university":"Business School","duration":"28 hours","level":"Advanced","rating":4.7,"students":420000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/793796_0e89_2.jpg","category":"Business"},{"id":"46","title":"TypeScript Complete Guide","instructor":"Stephen Grider","university":"Code With Mosh","duration":"25 hours","level":"Intermediate","rating":4.8,"students":180000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/947098_2b2d_6.jpg","category":"Programming"},{"id":"47","title":"Adobe Premiere Pro CC","instructor":"Phil Ebiner","university":"Video School","duration":"32 hours","level":"All Levels","rating":4.7,"students":280000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/926512_6fdf_5.jpg","category":"Video Editing"},{"id":"48","title":"Machine Learning A-Z","instructor":"Kirill Eremenko","university":"SuperDataScience","duration":"45 hours","level":"Advanced","rating":4.8,"students":520000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg","category":"Data Science"},{"id":"49","title":"Guitar Masterclass","instructor":"Erich Andreas","university":"Music School","duration":"28 hours","level":"Beginner","rating":4.6,"students":150000,"price":"$79.99","image":"https://img-c.udemycdn.com/course/240x135/42271_886a_9.jpg","category":"Music"},{"id":"50","title":"Unreal Engine Game Dev","instructor":"GameDev.tv Team","university":"GameDev.tv","duration":"42 hours","level":"Intermediate","rating":4.7,"students":180000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/657932_c7e0_4.jpg","category":"Game Development"},{"id":"51","title":"Social Media Marketing","instructor":"Evan Kimbrell","university":"Digital Marketing Hub","duration":"20 hours","level":"All Levels","rating":4.6,"students":280000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/875974_95e3_4.jpg","category":"Marketing"},{"id":"52","title":"Python for Finance","instructor":"Jose Portilla","university":"Pierian Data","duration":"30 hours","level":"Intermediate","rating":4.7,"students":180000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/1189820_3f99_3.jpg","category":"Finance"},{"id":"53","title":"Adobe Illustrator CC","instructor":"Daniel Scott","university":"Bring Your Own Laptop","duration":"25 hours","level":"Beginner","rating":4.8,"students":220000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/1197206_7201_3.jpg","category":"Design"},{"id":"54","title":"PostgreSQL Database","instructor":"Avinash Jain","university":"TheCodex","duration":"22 hours","level":"All Levels","rating":4.6,"students":150000,"price":"$79.99","image":"https://img-c.udemycdn.com/course/240x135/1309292_6d0b_7.jpg","category":"Database"},{"id":"55","title":"React Native Mobile Apps","instructor":"Stephen Grider","university":"Code With Mosh","duration":"38 hours","level":"Intermediate","rating":4.8,"students":280000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/959700_8bd2_11.jpg","category":"Mobile Development"},{"id":"56","title":"Digital Art Fundamentals","instructor":"Austin Batchelor","university":"Art Academy","duration":"28 hours","level":"Beginner","rating":4.7,"students":120000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/1259404_72d4_7.jpg","category":"Art"},{"id":"57","title":"Jenkins CI/CD Pipeline","instructor":"Edward Viaene","university":"DevOps Academy","duration":"15 hours","level":"Advanced","rating":4.6,"students":180000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/1754098_e0df_3.jpg","category":"DevOps"},{"id":"58","title":"Piano for Beginners","instructor":"Erich Andreas","university":"Music School","duration":"24 hours","level":"Beginner","rating":4.7,"students":180000,"price":"$79.99","image":"https://img-c.udemycdn.com/course/240x135/42271_886a_9.jpg","category":"Music"},{"id":"59","title":"Network Security","instructor":"Nathan House","university":"StationX","duration":"28 hours","level":"Intermediate","rating":4.7,"students":150000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/614772_233b_9.jpg","category":"Cybersecurity"},{"id":"60","title":"3D Character Animation","instructor":"GameDev.tv Team","university":"GameDev.tv","duration":"35 hours","level":"Advanced","rating":4.8,"students":120000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/2514568_e9c5_3.jpg","category":"3D & Animation"},{"id":"61","title":"Deep Learning Specialization","instructor":"Andrew Ng","university":"DeepLearning.AI","duration":"50 hours","level":"Advanced","rating":4.9,"students":850000,"price":"$99.99","image":"https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg","category":"Data Science"},{"id":"62","title":"Content Marketing Strategy","instructor":"Alex Genadinik","university":"Marketing School","duration":"18 hours","level":"Intermediate","rating":4.6,"students":150000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/914296_3670_8.jpg","category":"Marketing"},{"id":"63","title":"C++ Programming Advanced","instructor":"Tim Buchalka","university":"Learn Programming Academy","duration":"45 hours","level":"Advanced","rating":4.7,"students":180000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/1576854_9aeb_2.jpg","category":"Programming"},{"id":"64","title":"Salesforce Administration","instructor":"Mike Wheeler","university":"Salesforce Academy","duration":"32 hours","level":"Beginner","rating":4.7,"students":220000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/1207602_b27b_2.jpg","category":"Business"},{"id":"65","title":"Maya Character Modeling","instructor":"Lucas Ridley","university":"Animation Academy","duration":"28 hours","level":"Intermediate","rating":4.6,"students":120000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/1669514_189d_4.jpg","category":"3D & Animation"},{"id":"66","title":"Linux System Administration","instructor":"Jason Cannon","university":"Linux Academy","duration":"25 hours","level":"Intermediate","rating":4.7,"students":180000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/149990_165a_6.jpg","category":"IT & Software"},{"id":"67","title":"Portrait Photography","instructor":"Phil Ebiner","university":"Photography Academy","duration":"22 hours","level":"All Levels","rating":4.6,"students":150000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/1462428_639f_7.jpg","category":"Photography"},{"id":"68","title":"Kotlin Android Development","instructor":"Rob Percival","university":"Codestars","duration":"35 hours","level":"Intermediate","rating":4.7,"students":180000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/1672410_d4da_5.jpg","category":"Mobile Development"},{"id":"69","title":"Investment Banking","instructor":"365 Careers","university":"365 Financial Academy","duration":"24 hours","level":"Advanced","rating":4.6,"students":120000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/321410_d9c5_4.jpg","category":"Finance"},{"id":"70","title":"Unity VR Development","instructor":"Jonathan Weinberger","university":"GameDev.tv","duration":"32 hours","level":"Advanced","rating":4.7,"students":150000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/2514486_c4e0.jpg","category":"Game Development"},{"id":"71","title":"Cloud Computing AWS","instructor":"Stephane Maarek","university":"AWS Training","duration":"40 hours","level":"All Levels","rating":4.8,"students":420000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/362328_91f3_10.jpg","category":"Cloud Computing"},{"id":"72","title":"Digital Painting","instructor":"Austin Batchelor","university":"Art Academy","duration":"25 hours","level":"Beginner","rating":4.7,"students":120000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/1259404_72d4_7.jpg","category":"Art"},{"id":"73","title":"Elasticsearch Masterclass","instructor":"Imtiaz Ahmad","university":"Tech Academy","duration":"22 hours","level":"Intermediate","rating":4.6,"students":150000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/1075642_8b5f_4.jpg","category":"Database"},{"id":"74","title":"Microservices Architecture","instructor":"Stephen Grider","university":"Code With Mosh","duration":"35 hours","level":"Advanced","rating":4.8,"students":180000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/1793828_7999.jpg","category":"DevOps"},{"id":"75","title":"Voice Acting","instructor":"Voice Over Pro","university":"Voice Academy","duration":"18 hours","level":"All Levels","rating":4.6,"students":80000,"price":"$79.99","image":"https://img-c.udemycdn.com/course/240x135/1259404_72d4_7.jpg","category":"Arts & Entertainment"},{"id":"76","title":"Rust Programming","instructor":"Lyubomir Gavadinov","university":"Software University","duration":"30 hours","level":"Intermediate","rating":4.7,"students":120000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/1657594_42bf_4.jpg","category":"Programming"},{"id":"77","title":"Adobe XD UI/UX Design","instructor":"Daniel Scott","university":"Bring Your Own Laptop","duration":"25 hours","level":"Beginner","rating":4.7,"students":180000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/1452908_8741_3.jpg","category":"Design"},{"id":"78","title":"Cybersecurity Analyst","instructor":"Nathan House","university":"StationX","duration":"45 hours","level":"Advanced","rating":4.8,"students":150000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/614772_233b_9.jpg","category":"Cybersecurity"},{"id":"79","title":"Trading Fundamentals","instructor":"365 Careers","university":"365 Financial Academy","duration":"28 hours","level":"Beginner","rating":4.6,"students":220000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/321410_d9c5_4.jpg","category":"Finance"},{"id":"80","title":"Drone Videography","instructor":"Phil Ebiner","university":"Video School","duration":"22 hours","level":"All Levels","rating":4.7,"students":120000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/1462428_639f_7.jpg","category":"Photography"},{"id":"81","title":"Spring Boot Microservices","instructor":"Chad Darby","university":"Spring Academy","duration":"35 hours","level":"Advanced","rating":4.8,"students":280000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/2057770_c5f8_4.jpg","category":"Programming"},{"id":"82","title":"Data Visualization D3.js","instructor":"Stephen Grider","university":"Code With Mosh","duration":"25 hours","level":"Intermediate","rating":4.7,"students":150000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/2141626_873d_4.jpg","category":"Data Science"},{"id":"83","title":"Motion Graphics After Effects","instructor":"Phil Ebiner","university":"Video School","duration":"28 hours","level":"All Levels","rating":4.6,"students":180000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/1457314_c22c_3.jpg","category":"Video & Animation"},{"id":"84","title":"Product Management","instructor":"Cole Mercer","university":"Product School","duration":"32 hours","level":"Intermediate","rating":4.7,"students":220000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/1361790_2eb7_6.jpg","category":"Business"},{"id":"85","title":"Guitar Advanced Techniques","instructor":"Erich Andreas","university":"Music School","duration":"25 hours","level":"Advanced","rating":4.7,"students":120000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/42271_886a_9.jpg","category":"Music"},{"id":"86","title":"Penetration Testing","instructor":"Zaid Sabih","university":"z Security","duration":"30 hours","level":"Advanced","rating":4.8,"students":180000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/857010_8239_2.jpg","category":"Cybersecurity"},{"id":"87","title":"Digital Marketing Analytics","instructor":"Daragh Walsh","university":"Digital Academy","duration":"22 hours","level":"Intermediate","rating":4.6,"students":150000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/1207962_2b04_2.jpg","category":"Marketing"},{"id":"88","title":"Real Estate Investment","instructor":"Symon He","university":"Real Estate Academy","duration":"28 hours","level":"All Levels","rating":4.7,"students":180000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/321410_d9c5_4.jpg","category":"Finance"},{"id":"89","title":"Game Design Theory","instructor":"Rick Davidson","university":"GameDev.tv","duration":"25 hours","level":"Beginner","rating":4.6,"students":120000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/2514486_c4e0.jpg","category":"Game Development"},{"id":"90","title":"Azure Cloud Architecture","instructor":"Scott Duffy","university":"Cloud Academy","duration":"35 hours","level":"Advanced","rating":4.7,"students":180000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/362328_91f3_10.jpg","category":"Cloud Computing"},{"id":"91","title":"GraphQL with React","instructor":"Stephen Grider","university":"Code With Mosh","duration":"28 hours","level":"Intermediate","rating":4.8,"students":180000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/1109926_7f97_2.jpg","category":"Web Development"},{"id":"92","title":"Fashion Photography","instructor":"Phil Ebiner","university":"Photography Academy","duration":"22 hours","level":"All Levels","rating":4.6,"students":120000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/1462428_639f_7.jpg","category":"Photography"},{"id":"93","title":"DevOps Engineering","instructor":"Edward Viaene","university":"DevOps Academy","duration":"35 hours","level":"Advanced","rating":4.7,"students":150000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/1754098_e0df_3.jpg","category":"DevOps"},{"id":"94","title":"3D Game Character Design","instructor":"GameDev.tv Team","university":"GameDev.tv","duration":"32 hours","level":"Intermediate","rating":4.7,"students":120000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/2514568_e9c5_3.jpg","category":"3D & Animation"},{"id":"95","title":"Cryptocurrency Trading","instructor":"365 Careers","university":"365 Financial Academy","duration":"25 hours","level":"Beginner","rating":4.6,"students":180000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/321410_d9c5_4.jpg","category":"Finance"},{"id":"96","title":"Network Security Advanced","instructor":"Nathan House","university":"StationX","duration":"40 hours","level":"Advanced","rating":4.8,"students":150000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/614772_233b_9.jpg","category":"Cybersecurity"},{"id":"97","title":"Leadership Management","instructor":"Chris Haroun","university":"Business School","duration":"28 hours","level":"All Levels","rating":4.7,"students":220000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/1361790_2eb7_6.jpg","category":"Business"},{"id":"98","title":"Piano Jazz Improvisation","instructor":"Erich Andreas","university":"Music School","duration":"25 hours","level":"Advanced","rating":4.7,"students":80000,"price":"$84.99","image":"https://img-c.udemycdn.com/course/240x135/42271_886a_9.jpg","category":"Music"},{"id":"99","title":"Data Engineering","instructor":"Jose Portilla","university":"Pierian Data","duration":"45 hours","level":"Advanced","rating":4.8,"students":180000,"price":"$94.99","image":"https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg","category":"Data Science"},{"id":"100","title":"iOS Game Development","instructor":"Angela Yu","university":"London App Brewery","duration":"35 hours","level":"Intermediate","rating":4.7,"students":150000,"price":"$89.99","image":"https://img-c.udemycdn.com/course/240x135/1778502_f4b9_12.jpg","category":"Mobile Development"}]'),t={education:e};export{t as default,e as education};
