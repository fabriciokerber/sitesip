import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, Box, LinkBox, Input, Button, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Formspree } from "@quarkly/components";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"contato"} />
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
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1547619292-240402b5ae5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80)"
			quarkly-title="Form-1"
		>
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" md-width="100%">
					<Box>
						<Box
							sm-padding="64px 0 0 0"
							margin="32px 0 0 0"
							max-width="360px"
							position="relative"
							padding="0 0 0 64px"
						>
							<Icon
								size="48px"
								top="0"
								left="0"
								category="md"
								icon={MdLocationOn}
								position="absolute"
							/>
							<Text as="h4" margin="6px 0" font="--base">
								Localização
							</Text>
							<Text as="p" margin="6px 0" font="--headline3">
								953,, Chapecó, Santa Catarina{" "}
								<br />
								BR 282 Brasil
							</Text>
						</Box>
						<Box
							position="relative"
							padding="0 0 0 64px"
							sm-padding="64px 0 0 0"
							margin="64px 0 0 0"
							max-width="360px"
						>
							<Icon
								top="0"
								left="0"
								category="md"
								icon={MdEmail}
								position="absolute"
								size="48px"
							/>
							<Text font="--base" as="h4" margin="6px 0">
								Email{" "}
							</Text>
							<Text as="p" margin="6px 0" font="--headline3">
								<Link href="mailto:hello@company.com" text-decoration="none" hover-text-decoration="underline" color="--light">
									contato@siip.com.br
								</Link>
							</Text>
						</Box>
						<Box padding="0 0 0 64px" margin="64px 0 0 0" max-width="360px" position="relative">
							<Icon
								left="0"
								category="md"
								icon={MdPhone}
								position="absolute"
								size="48px"
								top="0"
							/>
							<Text font="--base" as="h4" margin="6px 0">
								Contato
							</Text>
							<Text as="p" margin="6px 0" font="--headline3">
								+55 (49) 9995-1004
							</Text>
						</Box>
						<Box
							sm-padding="0"
							margin="48px 0"
							max-width="360px"
							position="relative"
							display="flex"
							padding="0 0 0 64px"
						>
							<LinkBox margin="0px 16px 0px 0px" href="https://www.linkedin.com/in/fabricio-kerber/">
								<Icon
									category="fa"
									icon={FaLinkedinIn}
									width="48px"
									height="48px"
									size="24px"
									background="--color-primary"
									border-radius="50%"
									color="--light"
									margin="0px 0px 0px 0px"
								/>
							</LinkBox>
						</Box>
					</Box>
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" md-width="100%">
					<Box>
						<Box
							padding="56px 48px"
							margin="0 0 0 auto"
							md-max-width="100%"
							background="--color-primary"
							max-width="360px"
						>
							<Text as="h3" font="--headline3" margin="0 0 20px 0">
								Posso ajudar?
							</Text>
							<Formspree endpoint="xeqpgrlv">
								<Box gap="16px" display="flex" flex-direction="row" flex-wrap="wrap">
									<Box padding="8px 8px 8px 8px" width="100%">
										<Box display="flex" flex-direction="column">
											<Text margin="0 0 4px 0" font="--base">
												Nome
											</Text>
											<Input max-width="400px" width="100%" name="name" />
										</Box>
									</Box>
									<Box width="100%" padding="8px 8px 8px 8px">
										<Box display="flex" flex-direction="column">
											<Text font="--base" margin="0 0 4px 0">
												Email
											</Text>
											<Input max-width="400px" width="100%" type="email" name="email" />
										</Box>
									</Box>
									<Box padding="8px 8px 8px 8px" width="100%">
										<Box display="flex" flex-direction="column">
											<Text font="--base" margin="0 0 4px 0">
												Mensagem
											</Text>
											<Input width="100%" name="message" as="textarea" rows="4" />
										</Box>
									</Box>
									<Box width="100%" padding="8px 8px 8px 8px">
										<Box display="flex" flex-direction="column" align-items="flex-start">
											<Button background="--color-dark" type="submit">
												Enviar
											</Button>
										</Box>
									</Box>
								</Box>
							</Formspree>
						</Box>
					</Box>
				</Box>
			</Box>
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