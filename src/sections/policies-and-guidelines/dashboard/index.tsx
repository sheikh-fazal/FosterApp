import OrganisationalPoliciesIcon from '../../../assets/svg/policy-guidelines/Organisational-Policies.svg'
import AgencyGuidelinesIcon from '../../../assets/svg/policy-guidelines/Agency-Guidlines.svg'
import GovtLegislationsIcon from '../../../assets/svg/policy-guidelines/Gov-Legislations.svg'
import HandbooksIcon from '../../../assets/svg/policy-guidelines/Handbooks.svg'
import TemplatesIcon from '../../../assets/svg/policy-guidelines/Templates.svg'
import CheckListsIcon from '../../../assets/svg/policy-guidelines/CheckLists.svg'
import CyberEssentialsIcon from '../../../assets/svg/policy-guidelines/Cyber-Essentials.svg'
import OtherPoliciesIcon from '../../../assets/svg/policy-guidelines/Other-Policies.svg'

import RecentlyAccessedActivitiesIcon from '../../../assets/svg/policy-guidelines/Recently-Accessed-Policy.svg'
import PolicyInDraftIcon from '../../../assets/svg/policy-guidelines/Policy-in-Draft.svg'
import ReminderAndNotificationsIcon from '../../../assets/svg/policy-guidelines/Reminder-and-Notifications.svg'

export const policyGuidelineCardsData = [
    {
        id: "1",
        title: "Organisational Policies",
        icon: OrganisationalPoliciesIcon,
        link: '/policies-and-guidelines/organisational-policies'
    },
    {
        id: "2",
        title: "Agency Guidelines",
        icon: AgencyGuidelinesIcon,
        link: 'policies-and-guidelines/agency-guidelines'
    },
    {
        id: "3",
        title: "Govt. Legislations and Regulations",
        icon: GovtLegislationsIcon,
        link: 'policies-and-guidelines/govt-legislations'
    },
    {
        id: "4",
        title: "Handbooks",
        icon: HandbooksIcon,
        link: 'policies-and-guidelines/handbooks'
    },
    {
        id: "5",
        title: "Templates",
        icon: TemplatesIcon,
        link: 'policies-and-guidelines/templates'
    },
    {
        id: "6",
        title: "CheckLists",
        icon: CheckListsIcon,
        link: 'policies-and-guidelines/checklists'
    },
    {
        id: "7",
        title: "Cyber Essentials",
        icon: CyberEssentialsIcon,
        link: 'policies-and-guidelines/cyber-essentials'
    },
    {
        id: "8",
        title: "Other Policies",
        icon: OtherPoliciesIcon,
        link: 'policies-and-guidelines/other-policies'
    },
]

export const ExpandableCardsData = [
    {
        title: "Recently Accessed Policy",
        color: '#F6830F',
        img: RecentlyAccessedActivitiesIcon,
        subData: [
            {
                heading: 'Tuesday, 12 May 2023',
                list: [
                    {
                        time: '12:10 PM',
                        title: 'Handbook',
                        href: '/policies-and-guidelines/handbooks',
                    },
                    {
                        time: '12:10 PM',
                        title: 'Govt. Legislations and Regulations',
                        href: '/policies-and-guidelines/govt-legislations',
                    },
                ]
            },
            {
                heading: 'Monday, 11 May 2023',
                list: [
                    {
                        time: '12:10 PM',
                        title: 'Handbook',
                        href: '/policies-and-guidelines/handbooks',
                    },
                    {
                        time: '12:10 PM',
                        title: 'Handbook',
                        href: '/policies-and-guidelines/handbooks',
                    },
                ]
            },
            {
                heading: 'Monday, 11 May 2023',
                list: [
                    {
                        time: '12:10 PM',
                        title: 'Handbook',
                        href: '/policies-and-guidelines/handbooks',
                    },
                    {
                        time: '12:10 PM',
                        title: 'Handbook',
                        href: '/policies-and-guidelines/handbooks',
                    },
                ]
            },
            {
                heading: 'Monday, 11 May 2023',
                list: [
                    {
                        time: '12:10 PM',
                        title: 'Handbook',
                        href: '/policies-and-guidelines/handbooks',
                    },
                    {
                        time: '12:10 PM',
                        title: 'Handbook',
                        href: '/policies-and-guidelines/handbooks',
                    },
                ]
            },
        ]
    },
    {
        title: "Policy in Draft",
        color: '#487399',
        img: PolicyInDraftIcon,
        subData: [
            {
                title: 'Cyber Essentials',
                href: '/policies-and-guidelines/cyber-essentials',
            },
            {
                title: 'CheckLists',
                href: '/policies-and-guidelines/checklists'
            }
        ]
    },
    {
        title: "Reminder and Notifications",
        color: '#DC3545',
        img: ReminderAndNotificationsIcon,
        subData: [
            {
                title: 'Cyber Essentials',
                href: '/policies-and-guidelines/cyber-essentials',
            },
            {
                title: 'CheckLists',
                href: '/policies-and-guidelines/checklists'
            },
            {
                title: 'Cyber Essentials',
                href: '/policies-and-guidelines/cyber-essentials',
            },
            {
                title: 'CheckLists',
                href: '/policies-and-guidelines/checklists'
            },
            {
                title: 'Cyber Essentials',
                href: '/policies-and-guidelines/cyber-essentials',
            },
            {
                title: 'CheckLists',
                href: '/policies-and-guidelines/checklists'
            },
        ]
    },
]