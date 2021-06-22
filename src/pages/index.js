import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Menu, StackItem, Stack } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				
			</title>
			<meta name={"description"} content={"Web site created by wetar"} />
			</Helmet>
		<Section>
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="--headline1">
					STOP NEET
				</Text>
				</Box>
		</Section>
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0" font="60px sans-serif">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						color="--dark"
						padding="98px 64px"
						background="--color-light"
						flex-direction="column"
						border-width="2px"
						border-style="solid"
					/>
					<Text
						as="h2"
						margin="12px 0"
						font="normal 900 48px/1.2 --fontFamily-sans"
						md-font="--headline3"
						white-space="normal"
						color="#0d0000"
						width="auto"
						min-width="100%"
						display="inline-block"
						max-width="100%"
					>
						மனுதர்மத்தின் நவீன வடிவான
						<br />
						{" "}‘நீட்’ தேர்வு{" "}
					</Text>
					<Text font="150px sans-serif">
						<Strong color="#db0606">
							NEET
						</Strong>
					</Text>
					<Text font="800 60px sans-serif">
						A MODERN MANUSMRITI
					</Text>
					<Link
						href="http://35.198.252.244/stopneet/"
						border-width="4px"
						padding="24px 24px 24px 24px"
						border-style="solid"
						text-decoration-line="initial"
						font="600 54px sans-serif"
						background="#000000"
						border-color="#ffffff"
						color="#ececfe"
						hover-background="#ea0404"
					>
						SIGN PETITON
					</Link>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Stack>
						<StackItem width="100%" lg-width="33.3%" md-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://uploads.quarkly.io/60ceda3a436263001e1ee0d1/images/EyyMOwDUcAANXXN.jpg?v=2021-06-21T15:09:31.060Z) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://uploads.quarkly.io/60ceda3a436263001e1ee0d1/images/E4TdB_pX0AAZia0.jpg?v=2021-06-21T15:15:53.151Z) center/cover" />
						</StackItem>
						<StackItem width="50%" lg-width="33.3%" md-width="50%" sm-width="100%">
							<Override slot="StackItemContent" padding-bottom="100%" background="url(https://uploads.quarkly.io/60ceda3a436263001e1ee0d1/images/EhsBcH3VgAEJkpO.jpg?v=2021-06-21T15:22:56.815Z) center/cover" mix-blend-mode="luminosity" />
						</StackItem>
					</Stack>
				</StackItem>
			</Stack>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" font="--base" color="--dark">
			<Text
				as="h1"
				font="normal 900 122px/1.2 --fontFamily-sans"
				md-font="--headline2"
				max-width="520px"
				margin="0 auto 5px auto"
				text-align="center"
				border-width="2px"
				width="max-content"
				min-width="max-content"
			>
				18 மரணங்கள்{" "}
			</Text>
			<Text
				as="p"
				color="--grey"
				max-width="520px"
				margin="0 auto"
				text-align="center"
				font="--lead"
			>
				NEET deprived Tamil Nadu’s marginalised medical-aspirants and drove them to suicide{"\n\n"}
			</Text>
			<Stack margin-top="40px">
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/60ceda3a436263001e1ee0d1/images/tamil-nadu-student-anitha1-27-1506514840.jpg?v=2021-06-21T16:06:32.104Z) 50% 0/cover no-repeat"
						mix-blend-mode="luminosity"
						filter="grayscale(10)"
					/>
					<Text color="--darkL2" margin="0">
						17, Ariyalur
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0" color="#f70303">
						Shanmugam Anitha{"\n\n"}
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						Anitha’s mother had died when she was young and her father was a daily-wage labourer. Despite living in abject poverty, lacking even a toilet in their house, she passed her twelfth standard as a state topper, scoring 1176 marks out of 1200. With such high marks, she would have easily crossed the cut-off required to get a seat in a Tamil Nadu medical college before the NEET was introduced.{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/60ceda3a436263001e1ee0d1/images/vikatan_2019-05_0091a8c7-ea93-4f1b-a4b1-0474706b46cc_126831_thumb.jpg?v=2021-06-21T16:14:28.494Z) 50% 0/cover no-repeat"
						filter="blur(3px) grayscale(10)"
					/>
					<Text color="--grey" margin="0">
						Peruvallur Jun 05, 2018
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0" color="#f70303">
						Pradeepa
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						Tteenager from Peruvallur village, in Villupuram district, had a shining academic record despite growing up in abject poverty. She topped her class in tenth standard, scoring 490 marks out of 500, and scored 1125 marks out of 1200 in her twelfth-standard exam. Pradeepa, whose father was an agricultural labourer, could afford a private school in her eleventh and twelfth standard only because she was offered a full scholarship. In 2017, she cleared the NEET, but could get only a naturopathy seat, and discontinued the course because she could not pay the exorbitant fees. She hoped to sit for it again and get an MBBS seat in a government medical college. But the nearest government coaching centre was more than seventy kilometres from her home. On 4 June 2018, the day she learnt that she had failed the exam, Pradeepa took her own life.{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/60ceda3a436263001e1ee0d1/images/EhsBcH3VgAEJkpO.jpg?v=2021-06-21T15:22:56.815Z) 50% 0/cover no-repeat"
						filter="blur(3px) grayscale(20)"
					/>
					<Text color="--grey" margin="0">
						Madurai Sep 12 , 2020
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0" color="#f70303">
						Jothisri Durga
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						The last time M Jothisri Durga’s parents saw her, at 1 am on the intervening night between 12 and 13 September, the 19-year-old was still preparing for the NEET. She had spent the entirety of the previous year preparing for it. Murugasundaram, Jothisri’s father and a sub-inspector of police in Madurai, said that he and his wife knew that a lot was weighing on their daughter’s mind, but that was only expected with the exam right around the corner. “She seemed normal on Friday night, had dinner and went to her room,” Murugasundaram said. “In the morning, our room was locked from outside. With great struggle we managed to come out only to find our daughter hanging in the hall.”
						<br />
						<br />
						In a moving voice note that she left behind, the 19-year-old said that she was scared that she might fail the examination although she had studied well. “If I couldn’t get a seat, everyone will be disappointed,” Jothisri said. “I am sorry Appa. I am sorry Amma. Appa, please take care of your health as you are a heart patient. Do not worry about me. Amma, Appa please don’t blame yourself. It is not your fault. It is solely my decision. Amma, I am going to miss you. Amma, I am sorry.” She could be heard sobbing. In a seven-page suicide note, she wrote, “I studied well … I got 590+ marks in the last mock test. But, Appa I am afraid of this exam.” A quote from her note came to be repeated widely during the protests that followed, “I am sorry, I am tired.”{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/60ceda3a436263001e1ee0d1/images/neet-suicide-angelin-shuruthi-1536299383.jpg?v=2021-06-21T16:24:27.116Z) 50% 0/cover no-repeat"
						filter="blur(3px) grayscale(10)"
					/>
					<Text color="--grey" margin="0">
						Selaiyur Sep 18, 2018
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0" color="#f70303">
						Angeline Sruthi
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						Angeline Surthi, a resident of Selaiyur near Tambaram. According to police, Angeline was a CBSE student and scored very good marks in Class 12. Her aim since childhood was to become a doctor. To pursue her dream, Angeline had attended the NEET in May. However, as she scored low marks in the examination, she was unable to obtain a medical seat.
						<br />
						Thought Angeline was dejected, her parents asked her to pursue an engineering degree. Following this, she joined Electronics and Communication Engineering (ECE) at a private college in Sholinganallur. However, Angeline remained upset and told her parents that she did not want to pursue engineering.
						<br />
						On Thursday evening, Angeline did not come out of her room after she returned from the college. When her parents called her to have dinner around 10.30 pm, there was no response. On suspicion, they broke open the door and found Angeline lying in the bed with her face covered with a polythene cover, which was tied using her earphones.
						<br />
						She was immediately rushed to a private hospital nearby but the doctor declared her brought dead.{"\n\n"}
					</Text>
				</StackItem>
			</Stack>
			<Stack margin-top="40px">
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/60ceda3a436263001e1ee0d1/images/aditya1jpg.jpg?v=2021-06-21T16:43:07.860Z) 50% 0/cover no-repeat"
						mix-blend-mode="luminosity"
						filter="blur(3px) grayscale(10)"
					/>
					<Text color="--darkL2" margin="0">
						Tiruchengode Sep 13, 2020
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0" color="#f70303">
						Adhithya
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						Aditya, son of a scrap merchant from Dharmapuri, too could not clear the NEET last year. A 20-year-old M.Adithya died by suicide by hanging himself at home
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/60ceda3a436263001e1ee0d1/images/motilal.jpg?v=2021-06-21T16:47:43.281Z) 50% 0/cover no-repeat"
						filter="blur(3px) grayscale(10)"
					/>
					<Text color="--grey" margin="0">
						Namakkal Sep 12, 2020
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0" color="#f70303">
						Mothilal
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						a 21-year-old medical aspirant from Tiruchengode in Namakkal ended his life on Saturday night.
						<br />
						<br />
						The boy had earlier made two attempts to crack NEET, but could not succeed. He had applied for the third time and was allocated centre at a private college in Kumarapalayam.
						<br />
						<br />
						His father Murugesan is running an electrical shop and mother Gomathi is a homemaker. Mothilal's brother Subash is studying Class IX.
						<br />
						<br />
						Police have recovered his body and sent it to Tiruchengode government hospital for post-mortem. Tiruchengode DSP Asokumar rushed to the spot and conducting an enquiry.
						<br />
						<br />
						“We are yet to confirm whether the boy died by suicide due to NEET exam fear. The exact details will be known only tomorrow after police investigation,” said Namakkal district collector K Megraj.
						<br />
						<br />
						Namakkal Superintendent of Police S Sakthi Ganesan also said they are yet to confirm whether the boy ended his life due to NEET. “No suicide note was recovered. We will know the reason for his death only after further investigation,” he said
						<br />
						The boy, identified as M Mothilal, was found dead inside his room on Saturday night by his family. He did not come out of the room for a long time, forcing his parents to break open the door in panic - only to find his motionless body.{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/60ceda3a436263001e1ee0d1/images/1599660453392.jpg?v=2021-06-21T16:56:06.974Z) 50% 0/cover no-repeat"
						filter="blur(3px) grayscale(20)"
					/>
					<Text color="--grey" margin="0">
						Ariyaluri Sep 10, 2020
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0" color="#f70303">
						Vignesh
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						The 19-year-old student, Vignesh, had appeared twice for NEET earlier. (Representational)
						<br />
						{" "}19-year-old NEET (National Eligibility cum Entrance Test) aspirant, who was found dead in Tamil Nadu's Ariyalur district on Wednesday, is suspected to have died by suicide, police said. The death of the teenager has triggered a political row; his parents said he was stressed due to the medical entrance exam to be held on Sunday.
						<br />
						<br />
						The 19-year-old student, Vignesh, had appeared twice for NEET earlier, police said. His body was found in a well in a village, about 300 km from state capital Chennai. "The youth has not left any suicide note. His parents say he appeared stressed, we are investigating what triggered to kill himself. He had not cleared NEET in his earlier attempts," said Ariyalur Superintendent of police VR Srinivasan
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/60ceda3a436263001e1ee0d1/images/S_Ritusree.jpg?v=2021-06-21T17:02:06.963Z) 50% 0/cover no-repeat"
						filter="blur(3px) grayscale(10)"
					/>
					<Text color="--grey" margin="0">
						Venliyangodu June, 5,2019
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0" color="#f70303">
						Rithusree
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						Ritusree hailed from Venliyangkadu of Tirupur and was a student of Jaivabbai Government Higher Secondary School.
						<br />
						<br />
						According to sources, the teenager was upset as she failed to qualify for the NEET exam. In the 12th board exams, Ritusree managed to score 490 out of 500 which is a score of 98 per cent. However, the girl was unable to score enough marks in the NEET exam in order to qualify for a medical seat.{" "}
						<br />
						<br />
						{"\n"}According to the police, the student hung herself using a saree in her house and was brought dead to the hospital{"\n\n\n\n"}
					</Text>
				</StackItem>
			</Stack>
			<Stack margin-top="40px">
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/60ceda3a436263001e1ee0d1/images/1782834163Subashree.jpg?v=2021-06-22T05:24:01.974Z) 50% 0/cover no-repeat"
						mix-blend-mode="luminosity"
						filter="grayscale(10) blur(3px)"
					/>
					<Text color="--darkL2" margin="0">
						Coimbatore Aug 19, 2020
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0" color="#f70303">
						Subashree
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						Ravichandran is an ITI employee who resides at an apartment in East Venkatasamy Road, R.S. Puram. His daughter Subhasree (19) studied class 12, under the CBSE board in Namakkal District. She has been preparing for the NEET exams for the past two years and when she had appeared for exams last year, she secured 451 marks.
						<br />
						This was sufficient to get her placed in BDS course, but it was her wish to study General medicine. Hence she had enrolled at a private academy in Coimbatore to pursue her dream. In the meantime, NEET exams were postponed due to the COVID-19 pandemic. The announcement that the exams will be conducted in September caused Subhasree a lot of mental stress.
						<br />
						Her stress and fear about facing the NEET exams drove her to conclude her life as a result of which she hung herself to death home last evening. Based on a complaint filed by Subhasree's mother at the R.S. Puram police station, the police retrieved the body of the girl and sent it to the Coimbatore GH for postmortem. A case has been filed and investigations are on regarding the case.
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/60ceda3a436263001e1ee0d1/images/08THSUBASHREE.jpg?v=2021-06-22T05:34:50.645Z) 50% 0/cover no-repeat"
						filter="blur(3px) grayscale(60)"
					/>
					<Text color="--grey" margin="0">
						Trichy June 8, 2018
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0" color="#f70303">
						Subashree
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						A day after an 18-year-old girl ended her life in Villupuram over her inability to clear the National Eligibility-cum-Entrance Test (NEET), a 17-year-old girl from Uthamarkoil, on the outskirts of Tiruchi, committed suicide on Wednesday night, after she failed the test.
						<br />
						<br />
						The deceased Subashree scored only 24 marks out of 720 in the test and was seen depressed for the past two days. She had scored 907 in Plus II under the State board syllabus, the police said.
						<br />
						<br />
						Subashree was found hanging from a ceiling fan in her room on Wednesday night. Her mother Selvi, with the help of neighbours, broke open the door and rushed her to a private hospital in the city, where she was declared brought dead.
						<br />
						<br />
						Subashree’s friends said she desired to become a medical professional and had attended a crash course on NEET for two months at a private coaching institute. She wrote the test in English.{"\n\n\n\n"}
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/60ceda3a436263001e1ee0d1/images/Screenshot%202021-06-22%20111614.jpg?v=2021-06-22T05:46:46.595Z) 50% 0/cover no-repeat"
						filter="blur(3px) grayscale(10)"
					/>
					<Text color="--grey" margin="0">
						Venliyangodu June, 5,2019
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0" color="#f70303">
						Vaishya
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						another medical aspirant from Tamil Nadu committed suicide after scoring less marks in the NEET exam. The seventeen-year-old Vaishya Namburaja from Pattukotai immolated herself in her house on Wednesday after realising that her marks might not be enough to secure her an MBBS seat.

 


Vishaya, the daughter of Namburaja of Srinivasa Nagar allegedly checked her NEET results online on Wednesday and found out that she had scored 230 out of 720. Though the cut off marks for OBC category to which she belongs was 107, she felt the mark she scored would not be enough to get an MBBS seat and could get only BDS or some other courses. 

 

Police said that she became upset because of this and suddenly went into one of the rooms in her house and locked from inside before immolating her self. Though the parents broke open the door and rushed her to Pattukkottai Government hospital, the doctors pronounced her brought dead. 

 

Vaishya's father Namburaja runs a two-wheeler and cycle parking stand near Pattukkottai bus stand. Her paternal uncle has been a practising doctor in the town. Vaishya underwent coaching for NEET at a coaching centre at Kottayam in Kerala and had dreams to became a doctor like her uncle, sources said.{"  \n\n\n\n\n\n"}
					</Text>
				</StackItem>
				<StackItem width="25%" lg-width="50%" sm-width="100%" sm-margin-top="24px">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/60ceda3a436263001e1ee0d1/images/neet.jpg?v=2021-06-22T05:52:49.069Z) 50% 0/cover no-repeat"
						filter="blur(3px) grayscale(10)"
					/>
					<Text color="--grey" margin="0">
						Permabalur  August, 2 ,2019
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0" color="#f70303">
						Keerthana
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						An eighteen-year-old girl ended her life on Thursday allegedly because of her poor score in the National Eligibility cum Entrance Test (NEET).

According to police, Keerthana (18), daughter of Selvarasu, retired  bus conductor of Theeran Nagar secured 1053 in class 12.  She appeared for  National Eligibility cum Entrance Test in 2018 and secured 204 marks. Subsequently, she joined a private coaching centre in Chennai. In April this year, she took the exam but managed 384 marks which was not enough to get medical seat.






However, her friend got a seat at the Pudukkottai government Medical College in the second round of counselling held on Wednesday. Keerthana was very upset following this.

On Thursday Keerthana committed suicide when she was alone at home. On Information, Perambalur police rushed to the spot and recovered her body and sent to Perambalur district headquarters government hospital for postmodern.{"\n\n"}
					</Text>
				</StackItem>
			</Stack>
			<Stack margin-top="40px">
				<StackItem width="25%" lg-width="50%" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box
						height="0"
						margin="0 0 20px 0"
						padding-bottom="100%"
						background="url(https://uploads.quarkly.io/60ceda3a436263001e1ee0d1/images/D8YLt91UwAANM0_.webp?v=2021-06-22T05:58:41.438Z) 50% 0/cover no-repeat"
						mix-blend-mode="luminosity"
						filter="grayscale(10) blur(3px)"
					/>
					<Text color="--darkL2" margin="0">
						Villupuram June 6 2019
					</Text>
					<Text as="h3" font="--headline3" margin="5px 0 20px 0" color="#f70303">
						Monisha
					</Text>
					<Text as="p" margin="20px 0 5px 0">
						M Monisha, an 18-year-old from Konnimedu Kuppam village in Villupuram district, took her own life after failing the exam for the second time. She came from an impoverished fishing community and her family was unable to afford NEET coaching{"\n\n"}
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Text color="#f0e4e4">
				Source: The Caravan, Times of India
			</Text>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://wetar.org/"}
			target={"_blank"}
		>
			Made by Wetar
		</Link>
	</Theme>;
});
