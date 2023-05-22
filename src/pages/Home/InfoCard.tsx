import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

import {
	Grid,
	Card,
	CardActions,
	CardContent,
	Button,
	Typography,
	CardMedia 
} from '@mui/material';


const infoString = `
It's all on namecheap hunby, do whatever you like with it <3.`;


const InfoCard = () => {

	const content = 
	<>
		<Grid container justifyContent="center">
			<Typography variant="h5" component="div" color="secondary" textAlign="center">
				Happy Birthday Sweetest Yeenma Ever
			</Typography>
		</Grid>
		<Grid container justifyContent="center">
			<Typography variant="h6" component="div" color="primary" textAlign="center">
				You are an angel.
			</Typography>
		</Grid>
		<br />
		<Grid container justifyContent="center">
			<Typography variant="body1">
				{infoString}
			</Typography>
		</Grid>
	</>;

	return (
		<Grid item md={11} xs={12}>
			<Card>
				<CardMedia
					sx={{ height: 240 }}
					image="/images/header_image.jpg"
					title="green iguana"
				/>
				<CardContent>
					{content}
				</CardContent>
				<CardActions>
					<Grid container justifyContent="center">
							<Button 
								size="large" 
								color="primary"
								variant="outlined"
								onClick={() => { window.location.href = "https://ap.www.namecheap.com/Domains/DomainControlPanel/osy.zip/advancedns"; }}
							>
								{`Claim ur present Uwu <3`} 
							</Button>
					</Grid>
				</CardActions>
			</Card>
		</Grid>
	);
};


export default InfoCard;
