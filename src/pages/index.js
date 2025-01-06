import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text, LinkBox, Hr, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Help for you — Healthcare without the system
			</title>
			<meta name={"description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:title"} content={"Help for you — Healthcare without the system"} />
			<meta property={"og:description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/OGimage.png?v=2021-09-21T16:25:40.647Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon.svg?v=2021-09-21T16:18:29.306Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon270.svg?v=2021-09-21T16:18:07.731Z"} />
			<meta name={"msapplication-TileColor"} content={"#000848"} />
		</Helmet>
		<Image
			md-top="300px"
			lg-top="0px"
			src="https://uploads.quarkly.io/6123949e957019001e284458/images/backgroung-hero.svg?v=2021-09-21T22:07:12.314Z"
			position="absolute"
			right="0px"
			bottom="auto"
			top="130px"
			z-index="1"
			lg-right="-200px"
			md-width="600px"
		/>
		<Section background="linear-gradient(264.47deg, #000848 29.39%, #000848 93.49%)" padding="36px 0 36px 0" quarkly-title="Header">
			<Override slot="SectionContent" flex-direction="row" />
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				width="30%"
				sm-width="50%"
				display="flex"
				align-items="center"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
			>
				<Image
					height="auto"
					src="https://uploads.quarkly.io/6764ae7c9335410018c8b336/images/siip_white_retangulo.png?v=2024-12-19T23:43:59.845Z"
					width="100%"
					max-width="171px"
					srcSet="https://smartuploads.quarkly.io/6764ae7c9335410018c8b336/images/siip_white_retangulo.png?v=2024-12-19T23%3A43%3A59.845Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6764ae7c9335410018c8b336/images/siip_white_retangulo.png?v=2024-12-19T23%3A43%3A59.845Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6764ae7c9335410018c8b336/images/siip_white_retangulo.png?v=2024-12-19T23%3A43%3A59.845Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6764ae7c9335410018c8b336/images/siip_white_retangulo.png?v=2024-12-19T23%3A43%3A59.845Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6764ae7c9335410018c8b336/images/siip_white_retangulo.png?v=2024-12-19T23%3A43%3A59.845Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6764ae7c9335410018c8b336/images/siip_white_retangulo.png?v=2024-12-19T23%3A43%3A59.845Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6764ae7c9335410018c8b336/images/siip_white_retangulo.png?v=2024-12-19T23%3A43%3A59.845Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				width="70%"
				sm-width="50%"
				align-items="center"
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
			>
				<Components.QuarklycommunityKitMobileSidePanel md-z-index="9">
					<Override
						slot="Content"
						align-items="center"
						padding="16px 0px 16px 16px"
						md-background="--color-light"
						md-z-index="9"
						md-justify-content="flex-start"
						background="rgba(255, 255, 255, 0)"
						justify-content="center"
					/>
					<Override slot="Children" justify-content="center" display="flex" align-items="center" />
					<Override slot="Button Text" md-display="none" />
					<Override slot="Button Icon" md-color="--white" md-font="36px sans-serif" />
					<Override slot="Cross" md-color="--dark" md-font="36px sans-serif" />
					<Override slot="Wrapper" md-z-index="9" />
					<Box
						display="flex"
						align-items="center"
						justify-content="flex-end"
						md-flex-direction="column"
						md-margin="40px 0px 13px 0px"
						md-font="--headline4"
					>
						<Link
							href="#"
							font="normal 600 18px/1.5 --fontFamily-googleInter"
							text-decoration-line="initial"
							color="--white"
							margin="0px 20px 0px 20px"
							md-margin="0px 0px 13px 0px"
							md-font="--lead"
							md-color="--indigo"
						>
							Home
						</Link>
						<Link
							color="--grey"
							margin="0px 20px 0px 20px"
							transition="opacity 0.3s ease 0s"
							md-margin="0px 0px 13px 0px"
							md-font="--lead"
							href="/contato"
							font="--base"
							text-decoration-line="initial"
							opacity="0.8"
							hover-opacity="1"
							md-color="--indigo"
						>
							Contact
						</Link>
					</Box>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Box>
		</Section>
		<Section background="linear-gradient(264.47deg, #000848 29.39%, #000848 93.49%)" padding="36px 0 80px 0" quarkly-title="HeroBlock" md-padding="36px 0 60px 0">
			<Override
				slot="SectionContent"
				flex-direction="row"
				position="relative"
				z-index="9"
				md-flex-wrap="wrap"
				md-z-index="7"
			/>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				flex-direction="column"
				display="flex"
				align-items="flex-start"
				lg-padding="0px 90px 0px 0px"
				md-width="100%"
				justify-content="center"
				width="70%"
				padding="0px 180px 0px 0px"
				md-padding="0px 0px 0px 0px"
			>
				<Text
					lg-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 8px 0px"
					color="rgba(255, 172, 5, 0.69)"
					lg-text-align="left"
					font="--base"
					text-transform="uppercase"
					lg-margin="0px 0px 8px 0px"
					sm-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
				>
					POSSIBILIDADES INFINITAS
				</Text>
				<Text
					lg-text-align="left"
					lg-font="normal 700 40px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 28px/1.2 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 16px 0px"
					font="--headline1"
					color="--white"
					sm-font="normal 500 30px/1.2 &quot;Inter&quot;, sans-serif"
				>
					Progresso com inteligêcia
				</Text>
				<Text
					font="--base"
					lg-text-align="left"
					lg-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 0px 0px"
					color="--white"
					opacity="1"
				>
					Ajudamos empresas com Inteligência Artificial, Gestão de Dados
					<br />
					e inovação da melhor forma!
				</Text>
				<Box
					lg-margin="32px 0px 0px 0px"
					md-width="100%"
					md-margin="36px 0px 0px 0px"
					display="flex"
					margin="72px 0px 0px 0px"
				>
					<Link
						sm-margin="0px 22px 0px 0px"
						transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
						href="/login"
						text-decoration-line="initial"
						sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						sm-padding="15px 13px 15px 13px"
						md-text-align="center"
						lg-margin="0px 32px 0px 0px"
						padding="15px 30px 15px 30px"
						border-radius="10px"
						lg-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						md-padding="15px 16px 15px 16px"
						hover-color="--primary"
						color="--white"
						margin="0px 44px 0px 0px"
						lg-padding="15px 23px 15px 23px"
						md-width="50%"
						background="--color-primary"
						font="--lead"
						hover-background="--color-white"
						border-width="2px"
						border-style="solid"
						border-color="--color-primary"
					>
						Get Stared
					</Link>
					<Link
						padding="15px 30px 15px 30px"
						font="--lead"
						border-radius="10px"
						border-width="2px"
						transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
						lg-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						border-style="solid"
						md-width="50%"
						md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						md-text-align="center"
						sm-padding="15px 13px 15px 13px"
						text-decoration-line="initial"
						color="--white"
						background="rgba(255, 5, 5, 0)"
						margin="0px 0px 0px 0px"
						border-color="rgba(255, 255, 255, 0.3)"
						sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						hover-background="--color-white"
						hover-color="--indigo"
						href="/login"
						lg-padding="15px 23px 15px 23px"
						md-padding="15px 16px 15px 16px"
					>
						Learn more
					</Link>
				</Box>
			</Box>
			<Box
				empty-border-style="solid"
				width="30%"
				display="flex"
				justify-content="flex-end"
				empty-border-width="1px"
				empty-min-height="64px"
				empty-border-color="LightGray"
				align-items="center"
				md-width="100%"
				md-order="-1"
				empty-min-width="64px"
			>
				<Image
					lg-max-height="400px"
					width="100%"
					max-height="450px"
					md-margin="0px 0px 30px 0px"
					src="https://uploads.quarkly.io/6123949e957019001e284458/images/iPhone%20X.png?v=2021-09-21T20:44:05.312Z"
					lg-position="relative"
					lg-left="-5px"
					max-width="100%"
					srcSet="https://smartuploads.quarkly.io/6123949e957019001e284458/images/iPhone%20X.png?v=2021-09-21T20%3A44%3A05.312Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/iPhone%20X.png?v=2021-09-21T20%3A44%3A05.312Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/iPhone%20X.png?v=2021-09-21T20%3A44%3A05.312Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/iPhone%20X.png?v=2021-09-21T20%3A44%3A05.312Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/iPhone%20X.png?v=2021-09-21T20%3A44%3A05.312Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/iPhone%20X.png?v=2021-09-21T20%3A44%3A05.312Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/iPhone%20X.png?v=2021-09-21T20%3A44%3A05.312Z&quality=85&w=3200 3200w"
					sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Section>
		<Section padding="150px 0 150px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6123949e957019001e284458/images/Group%20177.png?v=2021-08-24T00:44:18.633Z) 0% 30% /cover no-repeat scroll padding-box" sm-padding="0px 0 0px 0" md-padding="50px 0 50px 0">
			<Override
				slot="SectionContent"
				display="grid"
				grid-gap="16px"
				grid-template-columns="repeat(4, 1fr)"
				lg-grid-gap="0px"
				md-grid-template-columns="repeat(2, 1fr)"
			/>
			<Box
				justify-content="center"
				flex-direction="column"
				background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				align-items="center"
				display="flex"
				min-height="320px"
				empty-min-height="64px"
				empty-border-style="solid"
				padding="0px 0px 60px 0px"
			>
				<Text
					lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
					lg-margin="0px 0px 8px 0px"
					position="relative"
					z-index="1"
					color="--indigo"
					font="normal 700 49px/1.2 --fontFamily-googleInter"
					margin="0px 0px 20px 0px"
				>
					20+
				</Text>
				<Text
					text-align="center"
					opacity="0.7"
					lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					position="relative"
					z-index="1"
					color="--dark"
					font="--lead"
					margin="0px 0px 0px 0px"
				>
					Anos de experiência
				</Text>
			</Box>
			<Box
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				flex-direction="column"
				background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
				min-height="320px"
				padding="0px 0px 60px 0px"
				empty-min-height="64px"
				empty-border-width="1px"
				display="flex"
				align-items="center"
				justify-content="center"
			>
				<Text
					color="--indigo"
					font="normal 700 49px/1.2 --fontFamily-googleInter"
					margin="0px 0px 20px 0px"
					lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
					lg-margin="0px 0px 8px 0px"
					position="relative"
					z-index="1"
				>
					300+
				</Text>
				<Text
					md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					z-index="1"
					font="--lead"
					margin="0px 0px 0px 0px"
					text-align="center"
					opacity="0.7"
					position="relative"
					color="--dark"
					lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
				>
					Empresas
				</Text>
			</Box>
			<Box
				empty-min-height="64px"
				flex-direction="column"
				background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				sm-margin="0px 0px 0px 0px"
				empty-min-width="64px"
				empty-border-width="1px"
				justify-content="center"
				min-height="320px"
				md-margin="30px 0px 0px 0px"
				align-items="center"
				padding="0px 0px 60px 0px"
			>
				<Text
					margin="0px 0px 20px 0px"
					lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
					lg-margin="0px 0px 8px 0px"
					position="relative"
					z-index="1"
					color="--indigo"
					font="normal 700 49px/1.2 --fontFamily-googleInter"
				>
					24/7
				</Text>
				<Text
					opacity="0.7"
					md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					z-index="1"
					margin="0px 0px 0px 0px"
					text-align="center"
					lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					position="relative"
					color="--dark"
					font="--lead"
				>
					Support{" "}
				</Text>
			</Box>
			<Box
				flex-direction="column"
				md-margin="30px 0px 0px 0px"
				empty-min-height="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				empty-min-width="64px"
				display="flex"
				background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
				padding="0px 0px 60px 0px"
				sm-margin="0px 0px 0px 0px"
				min-height="320px"
				empty-border-width="1px"
				align-items="center"
				justify-content="center"
			>
				<Text
					position="relative"
					z-index="1"
					color="--indigo"
					font="normal 700 49px/1.2 --fontFamily-googleInter"
					margin="0px 0px 20px 0px"
					lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
					lg-margin="0px 0px 8px 0px"
				>
					240+
				</Text>
				<Text
					lg-width="70%"
					width="70%"
					position="relative"
					z-index="1"
					color="--dark"
					text-align="center"
					opacity="0.7"
					md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					font="--lead"
					margin="0px 0px 0px 0px"
					lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
				>
					Soluções disponíveis
				</Text>
			</Box>
		</Section>
		<Section lg-padding="60px 0 40px 0" padding="60px 0 100px 0" md-padding="30px 0 30px 0">
			<Text
				md-margin="0px 0px 40px 0px"
				lg-margin="0px 0px 40px 0px"
				margin="0px 0px 80px 0px"
				font="--headline2"
				color="--indigo"
				lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
				md-font="normal 700 20px/1.2 &quot;Inter&quot;, sans-serif"
			>
				A New Way of Getting Healthcare
			</Text>
			<Box
				margin="0px 0px 20px 0px"
				sm-margin="0px 0px 30px 0px"
				border-radius="10px"
				min-height="284px"
				md-border-radius="0px"
				padding="0px 0px 0px 0px"
				border-style="solid"
				display="flex"
				border-width="2px"
				flex-wrap="wrap"
				md-border-width="0px 0px 2px 0px"
				width="100%"
				border-color="rgba(66, 82, 207, 0.1)"
				md-border-color="rgba(66, 82, 207, 0.1)"
			>
				<Box display="flex" lg-width="50%" md-width="100%" width="30%">
					<Image
						margin="-1px 0px -1px -1px"
						src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
						object-fit="cover"
						width="100%"
						border-radius="10px"
						md-margin="0px 0px 0px 0px"
						srcSet="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					padding="32px 17% 32px 62px"
					width="70%"
					justify-content="space-between"
					md-width="100%"
					md-padding="32px 30px 32px 0px"
					display="flex"
					flex-direction="column"
					position="relative"
					lg-padding="32px 30px 32px 32px"
					lg-width="50%"
				>
					<LinkBox
						bottom="auto"
						lg-right="16px"
						lg-top="49px"
						position="absolute"
						right="32px"
						top="32px"
						left="auto"
					>
						<Image
							width="48px"
							height="48px"
							top="32px"
							left="auto"
							lg-height="24px"
							src="https://uploads.quarkly.io/6123949e957019001e284458/images/akar-icons_arrow-right.svg?v=2021-09-22T00:57:24.639Z"
							position="static"
							right="32px"
							bottom="auto"
							lg-width="24px"
						/>
					</LinkBox>
					<Text
						color="--indigo"
						width="85%"
						lg-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
						margin="0px 0px 8px 0px"
						font="--headline4"
					>
						Check your symptoms online
					</Text>
					<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1">
						Don't want to be sick and tired any more? For quick care for you and your children, text our doctors who are available 24/7. No waiting rooms or appointments.
					</Text>
				</Box>
			</Box>
			<Box
				display="flex"
				sm-margin="0px 0px 30px 0px"
				padding="0px 0px 0px 0px"
				md-border-width="0px 0px 2px 0px"
				margin="0px 0px 20px 0px"
				width="100%"
				border-style="solid"
				border-color="rgba(66, 82, 207, 0.1)"
				border-width="2px"
				border-radius="10px"
				flex-wrap="wrap"
				min-height="284px"
				md-border-radius="0px"
			>
				<Box
					padding="32px 17% 32px 62px"
					width="70%"
					display="flex"
					position="relative"
					md-padding="32px 30px 32px 0px"
					flex-direction="column"
					justify-content="space-between"
					lg-padding="32px 30px 32px 32px"
					lg-width="50%"
					md-width="100%"
				>
					<LinkBox
						lg-right="16px"
						lg-top="49px"
						position="absolute"
						right="32px"
						top="32px"
						left="auto"
						bottom="auto"
					>
						<Image
							src="https://uploads.quarkly.io/6123949e957019001e284458/images/akar-icons_arrow-right.svg?v=2021-09-22T00:57:24.639Z"
							left="auto"
							lg-height="24px"
							top="32px"
							bottom="auto"
							lg-width="24px"
							width="48px"
							height="48px"
							position="static"
							right="32px"
						/>
					</LinkBox>
					<Text
						margin="0px 0px 8px 0px"
						font="--headline4"
						color="--indigo"
						width="85%"
						lg-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
					>
						Manage your health easily
					</Text>
					<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1">
						Over 200 doctors are available to provide you with comprehensive care online at any time. Get help with managing chronic illnesses to achieve lifestyle objectives and optimize your pharmaceutical regimen.
					</Text>
				</Box>
				<Box
					md-order="-1"
					width="30%"
					display="flex"
					lg-width="50%"
					md-width="100%"
				>
					<Image
						object-fit="cover"
						width="100%"
						border-radius="10px"
						md-margin="0px 0px 0px 0px"
						margin="-1px -1px -1px 0px"
						src="https://images.unsplash.com/photo-1513315849661-23219170a967?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
						srcSet="https://images.unsplash.com/photo-1513315849661-23219170a967?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1513315849661-23219170a967?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1513315849661-23219170a967?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1513315849661-23219170a967?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1513315849661-23219170a967?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1513315849661-23219170a967?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1513315849661-23219170a967?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
			<Box
				display="flex"
				width="100%"
				border-style="solid"
				border-radius="10px"
				min-height="284px"
				md-border-radius="0px"
				margin="0px 0px 20px 0px"
				sm-margin="0px 0px 30px 0px"
				padding="0px 0px 0px 0px"
				border-color="rgba(66, 82, 207, 0.1)"
				border-width="2px"
				flex-wrap="wrap"
				md-border-width="0px 0px 2px 0px"
			>
				<Box md-width="100%" width="30%" display="flex" lg-width="50%">
					<Image
						margin="-1px 0px -1px -1px"
						src="https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
						object-fit="cover"
						width="100%"
						border-radius="10px"
						md-margin="0px 0px 0px 0px"
						srcSet="https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1612531385446-f7e6d131e1d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3200&q=80 3200w"
						sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
				<Box
					md-width="100%"
					padding="32px 17% 32px 62px"
					display="flex"
					lg-width="50%"
					position="relative"
					lg-padding="32px 30px 32px 32px"
					md-padding="32px 30px 32px 0px"
					width="70%"
					flex-direction="column"
					justify-content="space-between"
				>
					<LinkBox
						position="absolute"
						right="32px"
						top="32px"
						bottom="auto"
						left="auto"
						lg-right="16px"
						lg-top="49px"
					>
						<Image
							lg-width="24px"
							lg-height="24px"
							right="32px"
							top="32px"
							left="auto"
							bottom="auto"
							width="48px"
							height="48px"
							src="https://uploads.quarkly.io/6123949e957019001e284458/images/akar-icons_arrow-right.svg?v=2021-09-22T00:57:24.639Z"
							position="static"
						/>
					</LinkBox>
					<Text
						margin="0px 0px 8px 0px"
						font="--headline4"
						color="--indigo"
						width="85%"
						lg-font="600 22px/1.3 &quot;Inter&quot;, sans-serif"
					>
						Pay at affordable prices
					</Text>
					<Text margin="0px 0px 0px 0px" font="--textBase" color="--darkL1">
						We are constantly getting better and more affordable. Our technology can keep prices low because our care teams are more concentrated on you rather than paperwork or billing. Plus we got rid of copays and hidden fees.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			padding="60px 0 90px 0"
			position="relative"
			lg-padding="60px 0 60px 0"
			sm-padding="30px 0 30px 0"
			md-padding="30px 0 30px 0"
		>
			<Override
				slot="SectionContent"
				lg-padding="0px 0px 0px 0px"
				max-width="1194px"
				flex-wrap="wrap"
				flex-direction="row"
			/>
			<Box
				lg-align-items="flex-start"
				flex-direction="row"
				justify-content="flex-start"
				margin="0px 0px 64px 0px"
				padding="16px 0px 16px 0px"
				lg-margin="0px 0px 24px 0px"
				sm-flex-wrap="wrap"
				display="flex"
				align-items="center"
				sm-margin="0px 0px 30px 0px"
				width="100%"
			>
				<Box width="40%" sm-width="100%">
					<Text color="--indigo" sm-margin="0px 0px 16px 0px" margin="0px 0px 0px 0px" font="--headline4">
						Partners
					</Text>
				</Box>
				<Box width="60%" padding="0px 20% 0px 0px" lg-padding="0px 0px 0px 0px" sm-width="100%">
					<Text margin="0px 0px 0px 0px" font="--textBase" color="--dark">
						…Help4u is one of the most influential consumer health companies that builds the future of care by addressing healthcare disparities of access and affordability.
					</Text>
				</Box>
			</Box>
			<Hr
				border-style="solid"
				height="0px"
				margin="0px 0px 32px 0px"
				lg-margin="0px 0px 16px 0px"
				lg-display="none"
				width="100%"
				border-color="rgba(66, 82, 207, 0.1)"
				border-width="2px 0 0 0"
			/>
			<Box
				margin="0px 0px 0px 0px"
				sm-flex-wrap="wrap"
				sm-margin="0px 0px 0px 0px"
				justify-content="center"
				flex-wrap="wrap"
				width="100%"
				display="flex"
			>
				<Box
					border-style="solid"
					sm-padding="0px 0px 0px 0px"
					border-color="rgba(66, 82, 207, 0.1)"
					lg-padding="16px 16px 16px 16px"
					md-width="50%"
					sm-display="flex"
					sm-align-items="center"
					width="33.333%"
					padding="32px 74px 32px 74px"
					border-width="0px 1px 0px 0px"
					sm-justify-content="center"
				>
					<Box
						box-shadow="1px 4px 12px rgba(0, 0, 0, 0.08)"
						justify-content="center"
						margin="0px 0px 0px 0px"
						sm-width="90%"
						width="100%"
						padding="18px 25px 18px 25px"
						display="flex"
						align-items="center"
						lg-padding="18px 18px 18px 18px"
					>
						<Image src="https://uploads.quarkly.io/6123949e957019001e284458/images/fedex.png?v=2021-08-23T22:45:21.577Z" sm-min-height="35px" srcSet="https://smartuploads.quarkly.io/6123949e957019001e284458/images/fedex.png?v=2021-08-23T22%3A45%3A21.577Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/fedex.png?v=2021-08-23T22%3A45%3A21.577Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/fedex.png?v=2021-08-23T22%3A45%3A21.577Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/fedex.png?v=2021-08-23T22%3A45%3A21.577Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/fedex.png?v=2021-08-23T22%3A45%3A21.577Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/fedex.png?v=2021-08-23T22%3A45%3A21.577Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/fedex.png?v=2021-08-23T22%3A45%3A21.577Z&quality=85&w=3200 3200w" sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw" />
					</Box>
				</Box>
				<Box
					border-width="0px 1px 0px 1px"
					md-border-width="0px 0px 0px 1px"
					sm-display="flex"
					sm-align-items="center"
					md-width="50%"
					sm-padding="0px 0px 0px 0px"
					sm-justify-content="center"
					width="33.333%"
					padding="32px 74px 32px 74px"
					border-style="solid"
					border-color="rgba(66, 82, 207, 0.1)"
					lg-padding="16px 16px 16px 16px"
				>
					<Box
						sm-width="90%"
						width="100%"
						padding="18px 25px 18px 25px"
						align-items="center"
						margin="0px 0px 0px 0px"
						box-shadow="1px 4px 12px rgba(0, 0, 0, 0.08)"
						display="flex"
						justify-content="center"
						lg-padding="18px 18px 18px 18px"
					>
						<Image src="https://uploads.quarkly.io/6123949e957019001e284458/images/google-1-removebg-preview%201.png?v=2021-08-23T22:46:07.391Z" sm-min-height="35px" srcSet="https://smartuploads.quarkly.io/6123949e957019001e284458/images/google-1-removebg-preview%201.png?v=2021-08-23T22%3A46%3A07.391Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/google-1-removebg-preview%201.png?v=2021-08-23T22%3A46%3A07.391Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/google-1-removebg-preview%201.png?v=2021-08-23T22%3A46%3A07.391Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/google-1-removebg-preview%201.png?v=2021-08-23T22%3A46%3A07.391Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/google-1-removebg-preview%201.png?v=2021-08-23T22%3A46%3A07.391Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/google-1-removebg-preview%201.png?v=2021-08-23T22%3A46%3A07.391Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/google-1-removebg-preview%201.png?v=2021-08-23T22%3A46%3A07.391Z&quality=85&w=3200 3200w" sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw" />
					</Box>
				</Box>
				<Hr
					md-display="block"
					display="none"
					border-style="solid"
					height="0px"
					lg-margin="16px 0px 16px 0px"
					margin="32px 0px 32px 0px"
					width="100%"
					border-color="rgba(66, 82, 207, 0.1)"
					border-width="2px 0 0 0"
				/>
				<Box
					lg-padding="16px 16px 16px 16px"
					md-width="50%"
					md-border-width="0px 1px 0px 0px"
					sm-display="flex"
					sm-justify-content="center"
					padding="32px 74px 32px 74px"
					border-width="0px 0px 0px 1px"
					border-style="solid"
					sm-align-items="center"
					width="33.333%"
					border-color="rgba(66, 82, 207, 0.1)"
					sm-padding="0px 0px 0px 0px"
				>
					<Box
						margin="0px 0px 0px 0px"
						width="100%"
						box-shadow="1px 4px 12px rgba(0, 0, 0, 0.08)"
						align-items="center"
						lg-padding="18px 18px 18px 18px"
						sm-width="90%"
						padding="18px 25px 18px 25px"
						display="flex"
						justify-content="center"
					>
						<Image src="https://uploads.quarkly.io/6123949e957019001e284458/images/new-Microsoft-logo-removebg-preview%201.png?v=2021-08-23T22:46:26.360Z" sm-min-height="35px" srcSet="https://smartuploads.quarkly.io/6123949e957019001e284458/images/new-Microsoft-logo-removebg-preview%201.png?v=2021-08-23T22%3A46%3A26.360Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/new-Microsoft-logo-removebg-preview%201.png?v=2021-08-23T22%3A46%3A26.360Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/new-Microsoft-logo-removebg-preview%201.png?v=2021-08-23T22%3A46%3A26.360Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/new-Microsoft-logo-removebg-preview%201.png?v=2021-08-23T22%3A46%3A26.360Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/new-Microsoft-logo-removebg-preview%201.png?v=2021-08-23T22%3A46%3A26.360Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/new-Microsoft-logo-removebg-preview%201.png?v=2021-08-23T22%3A46%3A26.360Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/new-Microsoft-logo-removebg-preview%201.png?v=2021-08-23T22%3A46%3A26.360Z&quality=85&w=3200 3200w" sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw" />
					</Box>
				</Box>
				<Hr
					margin="32px 0px 32px 0px"
					lg-margin="16px 0px 16px 0px"
					md-display="none"
					width="100%"
					border-color="rgba(66, 82, 207, 0.1)"
					border-width="2px 0 0 0"
					border-style="solid"
					height="0px"
				/>
				<Box
					padding="32px 74px 32px 74px"
					border-style="solid"
					md-border-width="0px 0px 0px 1px"
					sm-display="flex"
					sm-justify-content="center"
					width="33.333%"
					border-width="0px 1px 0px 0px"
					border-color="rgba(66, 82, 207, 0.1)"
					lg-padding="16px 16px 16px 16px"
					md-width="50%"
					sm-padding="0px 0px 0px 0px"
					sm-align-items="center"
				>
					<Box
						padding="18px 25px 18px 25px"
						display="flex"
						align-items="center"
						lg-padding="18px 18px 18px 18px"
						width="100%"
						box-shadow="1px 4px 12px rgba(0, 0, 0, 0.08)"
						justify-content="center"
						margin="0px 0px 0px 0px"
						sm-width="90%"
					>
						<Image src="https://uploads.quarkly.io/6123949e957019001e284458/images/olv.png?v=2021-08-23T22:46:17.840Z" sm-min-height="35px" srcSet="https://smartuploads.quarkly.io/6123949e957019001e284458/images/olv.png?v=2021-08-23T22%3A46%3A17.840Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/olv.png?v=2021-08-23T22%3A46%3A17.840Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/olv.png?v=2021-08-23T22%3A46%3A17.840Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/olv.png?v=2021-08-23T22%3A46%3A17.840Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/olv.png?v=2021-08-23T22%3A46%3A17.840Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/olv.png?v=2021-08-23T22%3A46%3A17.840Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/olv.png?v=2021-08-23T22%3A46%3A17.840Z&quality=85&w=3200 3200w" sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw" />
					</Box>
				</Box>
				<Hr
					height="0px"
					border-width="2px 0 0 0"
					border-style="solid"
					margin="32px 0px 32px 0px"
					lg-margin="16px 0px 16px 0px"
					md-display="block"
					display="none"
					width="100%"
					border-color="rgba(66, 82, 207, 0.1)"
				/>
				<Box
					md-width="50%"
					sm-padding="0px 0px 0px 0px"
					sm-justify-content="center"
					padding="32px 74px 32px 74px"
					border-style="solid"
					border-color="rgba(66, 82, 207, 0.1)"
					sm-display="flex"
					sm-align-items="center"
					md-border-width="0px 1px 0px 0px"
					width="33.333%"
					border-width="0px 1px 0px 1px"
					lg-padding="16px 16px 16px 16px"
				>
					<Box
						width="100%"
						padding="18px 25px 18px 25px"
						display="flex"
						justify-content="center"
						margin="0px 0px 0px 0px"
						lg-padding="18px 18px 18px 18px"
						sm-width="90%"
						box-shadow="1px 4px 12px rgba(0, 0, 0, 0.08)"
						align-items="center"
					>
						<Image sm-height="35px" src="https://uploads.quarkly.io/6123949e957019001e284458/images/amazon.png?v=2021-08-23T22:48:00.645Z" srcSet="https://smartuploads.quarkly.io/6123949e957019001e284458/images/amazon.png?v=2021-08-23T22%3A48%3A00.645Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/amazon.png?v=2021-08-23T22%3A48%3A00.645Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/amazon.png?v=2021-08-23T22%3A48%3A00.645Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/amazon.png?v=2021-08-23T22%3A48%3A00.645Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/amazon.png?v=2021-08-23T22%3A48%3A00.645Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/amazon.png?v=2021-08-23T22%3A48%3A00.645Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/amazon.png?v=2021-08-23T22%3A48%3A00.645Z&quality=85&w=3200 3200w" sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw" />
					</Box>
				</Box>
				<Box
					sm-display="flex"
					sm-align-items="center"
					width="33.333%"
					border-color="rgba(66, 82, 207, 0.1)"
					lg-padding="16px 16px 16px 16px"
					sm-padding="0px 0px 0px 0px"
					sm-justify-content="center"
					padding="32px 74px 32px 74px"
					border-width="0px 0px 0px 1px"
					border-style="solid"
					md-width="50%"
				>
					<Box
						justify-content="center"
						margin="0px 0px 0px 0px"
						lg-padding="18px 18px 18px 18px"
						width="100%"
						box-shadow="1px 4px 12px rgba(0, 0, 0, 0.08)"
						padding="18px 25px 18px 25px"
						display="flex"
						align-items="center"
						sm-width="90%"
					>
						<Image src="https://uploads.quarkly.io/6123949e957019001e284458/images/kisspng-logo-brand-walmart-desktop-wallpaper-image-walmart-to-offer-low-cost-checking-accounts-5b63eaa32fa612%201.png?v=2021-08-23T22:48:17.392Z" sm-height="35px" srcSet="https://smartuploads.quarkly.io/6123949e957019001e284458/images/kisspng-logo-brand-walmart-desktop-wallpaper-image-walmart-to-offer-low-cost-checking-accounts-5b63eaa32fa612%201.png?v=2021-08-23T22%3A48%3A17.392Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/kisspng-logo-brand-walmart-desktop-wallpaper-image-walmart-to-offer-low-cost-checking-accounts-5b63eaa32fa612%201.png?v=2021-08-23T22%3A48%3A17.392Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/kisspng-logo-brand-walmart-desktop-wallpaper-image-walmart-to-offer-low-cost-checking-accounts-5b63eaa32fa612%201.png?v=2021-08-23T22%3A48%3A17.392Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/kisspng-logo-brand-walmart-desktop-wallpaper-image-walmart-to-offer-low-cost-checking-accounts-5b63eaa32fa612%201.png?v=2021-08-23T22%3A48%3A17.392Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/kisspng-logo-brand-walmart-desktop-wallpaper-image-walmart-to-offer-low-cost-checking-accounts-5b63eaa32fa612%201.png?v=2021-08-23T22%3A48%3A17.392Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/kisspng-logo-brand-walmart-desktop-wallpaper-image-walmart-to-offer-low-cost-checking-accounts-5b63eaa32fa612%201.png?v=2021-08-23T22%3A48%3A17.392Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6123949e957019001e284458/images/kisspng-logo-brand-walmart-desktop-wallpaper-image-walmart-to-offer-low-cost-checking-accounts-5b63eaa32fa612%201.png?v=2021-08-23T22%3A48%3A17.392Z&quality=85&w=3200 3200w" sizes="(max-width: 460px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw" />
					</Box>
				</Box>
			</Box>
			<Hr
				border-style="solid"
				height="0px"
				margin="32px 0px 0px 0px"
				lg-margin="16px 0px 0px 0px"
				lg-display="none"
				width="100%"
				border-color="rgba(66, 82, 207, 0.1)"
				border-width="2px 0 0 0"
			/>
		</Section>
		<Section sm-padding="60px 0 60px 0" lg-padding="60px 0 100px 0" padding="60px 0 160px 0">
			<Override slot="SectionContent" justify-content="center" align-items="center" />
			<Box
				width="87%"
				min-height="16px"
				height="30px"
				border-radius="30px 30px 0px 0px"
				background="--color-light"
				opacity="0.3"
			/>
			<Box
				background="--color-light"
				opacity="0.4"
				sm-display="none"
				width="93%"
				min-height="16px"
				height="30px"
				border-radius="30px 30px 0px 0px"
			/>
			<Box
				padding="66px 30px 66px 30px"
				flex-direction="column"
				sm-padding="30px 15px 30px 15px"
				sm-border-radius="12px"
				align-items="center"
				background="--color-light"
				border-radius="30px"
				justify-content="center"
				width="100%"
				display="flex"
				margin="0px 0px 0px 0px"
			>
				<Text font="--lead" color="--primary" text-transform="uppercase" margin="0px 0px 25px 0px">
					NEWSLETTER
				</Text>
				<Text
					text-align="center"
					lg-font="normal 600 30px/1.3 --fontFamily-googleInter"
					md-font="normal 600 25px/1.3 --fontFamily-googleInter"
					sm-font="normal 600 19px/1.3 --fontFamily-googleInter"
					margin="0px 0px 35px 0px"
					font="normal 600 39px/1.3 --fontFamily-googleInter"
					color="--dark"
				>
					We offer 20% off every month
					<br />
					for all our subscribers
				</Text>
				<Box
					border-color="rgba(5, 0, 11, 0.1)"
					border-radius="16px"
					border-width="1px"
					border-style="solid"
					sm-width="100%"
					background="#ffffff"
					padding="12px 12px 12px 12px"
				>
					<Components.QuarklycommunityKitNetlifyForm>
						<Input
							placeholder="Email Address"
							sm-width="100%"
							sm-padding="12px 14px 12px 14px"
							border-width="0px"
							padding="14px 16px 14px 16px"
							width="320px"
							md-width="250px"
							name="Email Address"
							type="email"
							required
							background="rgba(255, 255, 255, 0)"
						/>
						<Button
							sm-width="100%"
							border-width="1px"
							border-color="--color-primary"
							font="--base"
							padding="14px 53px 14px 53px"
							sm-padding="12px 15px 12px 15px"
							hover-background="--color-light"
							hover-color="--primary"
							border-style="solid"
							background="--color-primary"
							border-radius="10px"
							md-padding="14px 30px 14px 30px"
						>
							Subscribe
						</Button>
					</Components.QuarklycommunityKitNetlifyForm>
				</Box>
			</Box>
		</Section>
		<Section background="--color-indigo" padding="100px 0 100px 0" md-padding="40px 0 40px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-border-color="LightGray"
				flex-direction="column"
				md-justify-content="center"
				display="flex"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				width="25%"
				md-align-items="center"
			>
				<Image src="https://uploads.quarkly.io/6123949e957019001e284458/images/logo.svg?v=2021-09-21T20:30:52.302Z" margin="0px 0px 24px 0px" max-width="171px" />
				<SocialMedia
					facebook="https://www.facebook.com/quarklyapp/"
					twitter="https://twitter.com/quarklyapp"
					telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
					instagram="https://www.instagram.com/instagram/"
					align-items="flex-start"
					justify-content="flex-start"
				>
					<Override
						slot="link"
						margin="0 12px 0 0px"
						hover-background="--color-indigo"
						background="--color-greyD1"
						lg-height="28px"
						lg-padding="4px 4px 4px 4px"
						lg-display="flex"
						lg-align-items="center"
						border-radius="50%"
						lg-justify-content="center"
						lg-width="28px"
						color="--light"
					/>
					<Override slot="icon" lg-font="18px sans-serif" />
				</SocialMedia>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
				width="25%"
				display="flex"
				md-width="100%"
				md-justify-content="center"
				empty-border-width="1px"
				empty-border-style="solid"
				flex-direction="column"
				padding="16px 16px 16px 16px"
				md-align-items="center"
			>
				<Text color="--white" font="--lead" margin="0px 0px 20px 0px">
					SHORT LINKS
				</Text>
				<Link
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
					opacity=".8"
				>
					Home
				</Link>
				<Link
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
				>
					Services
				</Link>
				<Link
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
				>
					Screenshots
				</Link>
				<Link
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 0px 0px"
					font="--base"
					href="#"
				>
					Contact
				</Link>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-color="LightGray"
				width="25%"
				display="flex"
				flex-direction="column"
				md-justify-content="center"
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				md-width="100%"
				md-align-items="center"
				empty-border-width="1px"
			>
				<Text color="--white" font="--lead" margin="0px 0px 20px 0px">
					HELP LINK
					<br />
				</Text>
				<Link
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
				>
					How to download
				</Link>
				<Link
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
					opacity=".8"
				>
					How it works
				</Link>
				<Link
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
				>
					Video tutorial
				</Link>
				<Link
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 0px 0px"
					font="--base"
					href="#"
					color="--white"
				>
					FAQs
				</Link>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="25%"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-border-width="1px"
				display="flex"
				flex-direction="column"
				md-align-items="center"
				md-justify-content="center"
			>
				<Text color="--white" font="--lead" margin="0px 0px 20px 0px">
					SHORT LINKS
				</Text>
				<Link
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="https://play.google.com/store"
					transition="opacity 0.3s ease 0s"
					target="_blank"
				>
					Google Play Store
				</Link>
				<Link
					font="--base"
					href="#"
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
					hover-opacity="1"
					margin="0px 0px 10px 0px"
				>
					Apple App Store
				</Link>
				<Link
					hover-opacity="1"
					margin="0px 0px 10px 0px"
					font="--base"
					href="#"
					color="--white"
					opacity=".8"
					text-decoration-line="initial"
					transition="opacity 0.3s ease 0s"
				>
					Download Directly
				</Link>
			</Box>
		</Section>
		<Components.QuarklycommunityKitNetlifyForm />
		<Components.QuarklycommunityKitNetlifyForm />
		<Components.QuarklycommunityKitNetlifyForm />
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
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6123949e957019001e284456"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});