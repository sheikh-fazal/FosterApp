import React from 'react'
import ThirdPartyCard from './third-party-card';
import Helpline from '../../../assets/svg/safeguarding/helpline.svg';
import Services from '../../../assets/svg/safeguarding/services.svg';
import SocialMedia from '../../../assets/svg/safeguarding/socialMedia.svg';
import ThirdParty from '../../../assets/svg/safeguarding/third-parties.svg';
import Call from '../../../assets/svg/safeguarding/call.svg';
import Mail from '../../../assets/svg/safeguarding/mail.svg';
import Browser from '../../../assets/svg/safeguarding/browser.svg';
import Facebook from '../../../assets/svg/safeguarding/facebook.svg';
import Youtube from '../../../assets/svg/safeguarding/youtube.svg';
import Twitter from '../../../assets/svg/safeguarding/twitter.svg';
import Linkdin from '../../../assets/svg/safeguarding/linkdin.svg';
import Whatsapp from '../../../assets/svg/safeguarding/whatsapp.svg';
import Instagaram from '../../../assets/svg/safeguarding/instagaram.svg';
import Add from '../../../assets/svg/safeguarding/add.svg';
import Contract from '../../../assets/svg/safeguarding/contracts.svg';
import Membership from '../../../assets/svg/safeguarding/membership.svg';
import Payment from '../../../assets/svg/safeguarding/payments.svg';
import AddBlack from '../../../assets/svg/safeguarding/addBlack.svg';
import Barmados from '../../../assets/svg/safeguarding/barmados.svg';
import Info from '../../../assets/svg/safeguarding/info.svg';
import Share from '../../../assets/svg/safeguarding/share.svg';
import Edit from '../../../assets/svg/safeguarding/edit.svg';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const thirdPartiesArray = [
  {
    id: '1',
    title: 'Helpline',
    icon: Helpline,
    background: 'linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)',
    subData: [
      { icon: Call, text: 'Call Childline’s 24-hour support service on ', subText: '0800 11 11' },
      { icon: Mail, text: 'Email us on ', subText: 'help@nspcc.org.uk.' },
    ]
  },
  {
    id: '2',
    title: 'Services Offered',
    icon: Services,
    background: 'linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)',
    subData: [
      { text: 'Protect, support and nurture the UK most vulnerable children' },
      { text: 'Fostering and adoption' },
      { text: 'Helping Families' },
      { text: 'Supoorting Virtual People' },
      { text: 'Protecting Children' },
      { text: 'Voice and influence on young people' },

    ]
  },
  {
    id: '3',
    title: 'Social Media',
    icon: SocialMedia,
    background: 'linear-gradient(90deg, #2CB764 10.76%, #0E918C 133.7%)',
    subData: [
      { icon: Browser, link: '' },
      { icon: Facebook, link: '' },
      { icon: Youtube, link: '' },
      { icon: Twitter, link: '' },
      { icon: Linkdin, link: '' },
      { icon: Whatsapp, link: '' },
      { icon: Instagaram, link: '' },
      { icon: Add, link: '' },

    ]
  },
  {
    id: '4',
    title: 'Contracts & Memberships',
    icon: ThirdParty,
    background: 'linear-gradient(106.35deg, #1A202E 0%, #424E68 100%)',
    subData: [
      { icon: Contract, title: 'Contracts' },
      { icon: Membership, title: 'Membership' },
      { icon: Payment, title: 'Payment' },
      { icon: AddBlack, title: '' },
    ]
  }
]

const ThirdPartySection = () => {
  const theme = useTheme();

  const renderData = (title: string, subData: any, background: any) => {
    switch (title) {
      case 'Helpline':
        return <Box display="flex" flexDirection="column" gap={4} sx={{ p: '40px 30px' }}>
          {
            subData?.map((obj: any) => (
              <Box sx={styles.flex} key={obj.text} >
                <Image src={obj?.icon} alt='icon' />
                <Typography sx={styles.title(theme.palette.mode)}>
                  {obj.text}
                  <Typography
                    sx={{ color: '#FB363E', fontWeight: 700 }}
                    component={'span'}>
                    {obj.subText}
                  </Typography>
                </Typography>
              </Box>
            ))}
        </Box>
      case 'Services Offered':
        return <ul style={{ paddingBottom: '25px ', marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px", paddingLeft: '30px' }}>
          {subData?.map((obj: any) => (
            <Box >
              <Typography component={'li'} key={obj.text} sx={styles.flex}>
                <Typography sx={styles.box(background)}></Typography>
                <Typography>{obj.text}</Typography>
              </Typography>
            </Box>
          ))
          }
        </ul>

      case 'Social Media':
        return <Grid container spacing={3} sx={{ p: '50px 20px', fontWeight: '500' }}>
          {subData.map((obj: any) => (
            <Grid item lg={3} display={'flex'} alignItems={"center"} justifyContent={'center'} sx={{ my: '20px' }}>
              <Link href={obj.link} key={obj.link}>
                <Image src={obj.icon} alt='icon' />
              </Link>
            </Grid>
          ))}
        </Grid>

      case 'Contracts & Memberships':
        return <Grid container sx={{ p: '20px 40px', display: "flex", alignItems: "center", height: "100%" }}>
          {
            subData.map((obj: any) => (
              <Grid item lg={3} md={4} sm={6} xs={12} key={obj.title} sx={{ textAlign: 'center' }} display={'flex'} alignItems={"center"} justifyContent={'center'} flexDirection={'column'}>
                <Image src={obj.icon} alt='icon' style={{ margin: '0 auto' }} />
                <Typography>{obj.title}</Typography>
              </Grid>
            ))
          }
        </Grid>
      default:
        return;
    }
  }

  return (
    <>
      <Grid container alignItems={'center'} sx={{ mb: 4 }}>
        <Grid item sm={11} xs={12}>
          <Box display={'flex'} alignItems={'center'} sx={{gap:0.5}}>
            <Typography sx={{ mr: 3 }}>Title Here</Typography>
            <Image src={Info} alt='' style={styles.img} />
            <Image src={Edit} alt='' style={styles.img} />
            <Image src={Share} alt='' style={styles.img} />
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Image src={Barmados} alt='' style={styles.img} />
        </Grid>
      </Grid>
      <Grid container spacing={2} >
        {thirdPartiesArray.map((data, i) => (
          <Grid item key={i} lg={6} md={6} xs={12} >
            <ThirdPartyCard
              title={data.title} icon={data.icon} background={data.background}
            >
              {renderData(data.title, data.subData, data.background)}
            </ThirdPartyCard>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default ThirdPartySection

const styles: any = {
  flex: { display: 'flex', alignItems: 'center', gap: 3, },
  title: (mode: any) => ({ fontWeight: 700, color: mode === 'light' ? '#343A40' : mode }),
  box: (background: any) => ({ background: background, height: '15px', width: '15px' }),
  media: { display: 'flex', alignItems: 'center', flexWrap: 'wrap', justyifyContent: 'space-between' },
}