import { Box, Grid, Typography } from '@mui/material'
import CCEImg from '../../../../assets/svg/safeguarding/CCE.svg'
import CSEImg from '../../../../assets/svg/safeguarding/CSE.svg'
import AllegationTemplateImg from '../../../../assets/svg/safeguarding/allegation-template.svg'
import IncidentTemplateImg from '../../../../assets/svg/safeguarding/incident-template.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'

const SafeguardingTemplates = () => {

  const router = useRouter()
  const safeguardingTempltesData = [
    {
      id: 1,
      icon: CCEImg,
      text: "Child Criminal Expliotation (CCE) Template",
      link: "/safeguarding/policy-guide-templates/safeguarding-template/safeguarding-template-details",
      bgColor: "#F63D31"
    },
    {
      id: 2,
      icon: CSEImg,
      text: "Child Sexual Expliotation (CSE) Template",
      link: "/safeguarding/policy-guide-templates/safeguarding-template/safeguarding-template-details",
      bgColor: "#20BE60"
    },
    {
      id: 1,
      icon: AllegationTemplateImg,
      text: "Allegation Management Template",
      link: "/safeguarding/policy-guide-templates/safeguarding-template/safeguarding-template-details",
      bgColor: "#0E918C"
    },
    {
      id: 1,
      icon: IncidentTemplateImg,
      text: "Incident Management Template",
      link: "/safeguarding/policy-guide-templates/safeguarding-template/safeguarding-template-details",
      bgColor: "#10B0C6"
    },
  ]
  return (
    <Grid container spacing={2}>
      {safeguardingTempltesData?.map((item, index) => (
        <Grid item xs={12} xl={6} key={index}>
          <Box onClick={() => router.push(item?.link)} sx={{ background: item?.bgColor, padding: "36px 40px", borderRadius: "10px", display: "flex", alignItems: "center", gap: "60px", cursor: "pointer" }}>
            <Image width={88} height={88} src={item?.icon} alt="icon" />
            <Typography sx={{ color: "white", fontSize: "24px", fontWeight: "600" }}>{item?.text}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default SafeguardingTemplates
