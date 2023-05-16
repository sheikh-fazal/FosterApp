import { Box, Grid, Card, CardContent, Typography } from '@mui/material'
import Image from 'next/image';
import Protection from '../../assets/svg/safeguarding/protection.svg';
import Tools from '../../assets/svg/safeguarding/tools.svg';
import Policy from '../../assets/svg/safeguarding/policy.svg';
import ThirdParty from '../../assets/svg/safeguarding/third-parties.svg';
import Child1 from '../../assets/svg/safeguarding/child-abuse.svg';
import Child2 from '../../assets/svg/safeguarding/child-allegation.svg';
import Child3 from '../../assets/svg/safeguarding/child-incident.svg';
import Child4 from '../../assets/svg/safeguarding/child-contact.svg';
import Child5 from '../../assets/svg/safeguarding/child-advocacy.svg';
import Child6 from '../../assets/svg/safeguarding/child-contextual.svg';
import AssessmentTool from '../../assets/svg/safeguarding/safeguarding-tool.svg';
import CheckList from '../../assets/svg/safeguarding/safeguarding-checklist.svg';
import SafeGuardingChild from '../../assets/svg/safeguarding/safeguarding-child.svg';
import SafeGuardingMeasure from '../../assets/svg/safeguarding/safeguarding-mesaures.svg';
import SafeGuardingRevision from '../../assets/svg/safeguarding/safeguarding-revision.svg';
import SafeGuardingTraning from '../../assets/svg/safeguarding/safeguarding-traning.svg';
import SafeGuardingPolicy from '../../assets/svg/safeguarding/safeguarding-policy.svg';
import SafeGuardingTemplate from '../../assets/svg/safeguarding/safeguarding-template.svg';
import SafeGuardingCaring from '../../assets/svg/safeguarding/safeguarding-caring.svg';
import SafeGuardingSupport from '../../assets/svg/safeguarding/safeguarding-support.svg';
import SafeGuardingLegislation from '../../assets/svg/safeguarding/safeguarding-legislation.svg';
import Barnardos from '../../assets/svg/safeguarding/third-branardo.svg';
import Foster from '../../assets/svg/safeguarding/third-foster.svg';
import Voice from '../../assets/svg/safeguarding/third-caram.svg';
import Services from '../../assets/svg/safeguarding/third-service.svg';
import ThirdSociety from '../../assets/svg/safeguarding/third-society.svg';
import Link from 'next/link';


const SafeGuardCard = () => {

  const SAFEGUARDING_ARRAY = [
    {
      id: '1',
      title: 'Child Protection And Safeguarding',
      icon: Protection,
      background: 'linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)',
      subArray: [
        {
          id: '1',
          icon: Child2,
          title: 'Child Abuse and Exploitation Management',
          path: '/safeguarding/child-protection/child-abuse-and-expolitation-management'
        },
        {
          id: '2',
          icon: Child3,
          title: 'Allegation Management',
          path: '/safeguarding/child-protection/allegation-management'
        },
        {
          id: '3',
          icon: Child4,
          title: 'Incident Management',
          path: '/safeguarding/child-protection/incident-management'
        },
        {
          id: '4',
          icon: Child5,
          title: 'Agency Safeguarding Officer / Contact',
          path: '/safeguarding/child-protection/agency-safeguarding-officer-contact'
        },
        {
          id: '5',
          icon: Child6,
          title: 'Safeguarding - Child Advocacy',
          path: '/safeguarding/child-protection/safeguarding-child-advocacy'
        },
        {
          id: '6',
          icon: Child1,
          title: 'Contextual Safeguarding Operational Group Information Form',
          path: '/safeguarding/child-protection/contextual-safeguarding'
        },
      ]
    },
    {
      id: '2',
      title: 'Safeguarding Tools',
      icon: Tools,
      background: 'linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)',
      subArray: [
        {
          id: '1',
          icon: AssessmentTool,
          title: 'Safeguarding Assessment Tool ',
          path: '/safeguarding/safeguarding-tools/safeguarding-assessment-tool'
        },
        {
          id: '2',
          icon: CheckList,
          title: 'Safeguarding Checklist',
          path: '/safeguarding/safeguarding-tools/safeguarding-checklist'
        },
        {
          id: '3',
          icon: SafeGuardingMeasure,
          title: 'Safeguarding Measures to be Taken Before a Child is Placed',
          path: '/safeguarding/safeguarding-tools/safeguarding-measures-to-be-taken'
        },
        {
          id: '4',
          icon: SafeGuardingChild,
          title: 'Safeguarding Measures When a Child is Placed',
          path: '/safeguarding/safeguarding-tools/safeguarding-measures-child-placed'
        },
        {
          id: '5',
          icon: SafeGuardingRevision,
          title: 'Safeguarding Meetings / Policy Revision Meetings',
          path: '/safeguarding/safeguarding-tools/safeguarding-meetings'
        },
        {
          id: '6',
          icon: SafeGuardingTraning,
          title: 'Safeguarding Training ',
          path: '/safeguarding/safeguarding-tools/safeguarding-training'
        },
      ]
    },
    {
      id: '3',
      title: 'Safeguarding Policy, Guide Templates',
      icon: Policy,
      background: 'linear-gradient(90deg, #2CB764 10.76%, #0E918C 133.7%)',
      subArray: [
        {
          id: '1',
          icon: SafeGuardingPolicy,
          title: 'Agency Safeguarding Policy',
          path: '/safeguarding/policy-guide-templates/agency-policy'
        },
        {
          id: '2',
          icon: SafeGuardingTemplate,
          title: 'Safeguarding Templates',
          path: '/safeguarding/policy-guide-templates/safeguarding-template'
        },
        {
          id: '3',
          icon: SafeGuardingCaring,
          title: 'Safe Caring Policy for Looked After Children ',
          path: '/safeguarding/policy-guide-templates/safe-caring'
        },
        {
          id: '4',
          icon: SafeGuardingSupport,
          title: 'Support for Carers  → Support for parents ',
          path: '/safeguarding/policy-guide-templates/support-carers'
        },
        {
          id: '5',
          icon: SafeGuardingLegislation,
          title: 'Safeguarding Legislation',
          path: '/safeguarding/policy-guide-templates/legislation'
        },
      ]
    },
    {
      id: '4',
      title: 'Safeguarding-Third Parties',
      icon: ThirdParty,
      background: 'linear-gradient(106.35deg, #1A202E 0%, #424E68 100%)',
      subArray: [
        {
          id: '1',
          icon: Barnardos,
          title: "Barnardo's",
          path: '/safeguarding/third-parties'
        },
        {
          id: '2',
          icon: Foster,
          title: "Foster Talk",
          path: '/safeguarding/third-parties'
        },
        {
          id: '3',
          icon: Voice,
          title: "Coram Voice",
          path: '/safeguarding/third-parties'
        },
        {
          id: '4',
          icon: Services,
          title: "Emergency Duty Team",
          path: '/safeguarding/third-parties'
        },
        {
          id: '5',
          icon: ThirdSociety,
          title: "NSPCC - National Society for the Prevention of Cruelty to Children",
          path: '/safeguarding/third-parties'
        },
      ]
    }
  ]
  return (
    <Grid container spacing={2}>
      {
        SAFEGUARDING_ARRAY.map((data, i) => (
          <Grid item xs={12} md={12} lg={6} key={i}>
            <Card sx={styles.card}>
              <CardContent sx={{ p: 0 }}>
                <Box sx={styles.cardHeader(data.background)}>
                  <Typography sx={styles.title}>{data.title}</Typography>
                  <Box sx={styles.imgDiv}><Image src={data.icon} alt='icon' height={52} width={52} /></Box>
                </Box>
                <Grid container spacing={1} sx={{ px: 1, pt: 3 }} rowSpacing={2}>
                  {
                    data.subArray.map((subData, j) => (
                      <Grid item xs={12} sm={6} md={4} lg={4} key={j} minHeight={140} sx={{ cursor: 'pointer' }}>
                        <Link href={data.title === 'Safeguarding-Third Parties' ? `${subData.path}/${subData.id}` : subData.path} style={{ all: 'unset' }}>
                          <Image src={subData.icon} alt='icon' height={65} width={65} style={{ margin: '0 auto' }} />
                          <Typography sx={styles.subItem}>{subData.title}</Typography>
                        </Link>
                      </Grid>
                    ))
                  }
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default SafeGuardCard

const styles = {
  card: { p: 0, boxShadow: '2px 4px 7px rgba(253, 47, 83, 0.25)' },
  cardHeader: (background: any) => ({ background: background, display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: '8px 15px' }),
  title: { fontSize: '20px', fontWeight: 700, color: '#fff' },
  imgDiv: { height: 55, width: 55, borderRadius: 50, background: '#fff', p: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: "inset 0px 0px 4px 1px rgba(0, 0, 0, 0.25)" },
  subItem: (theme: any) => ({ color: theme.palette.mode, fontSize: '12px', fontWeight: 500, textAlign: 'center' })
}
