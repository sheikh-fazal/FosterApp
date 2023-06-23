import Layout from '@root/layouts';
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import AdvocacyHistory from '@root/sections/advocacy/child-advocacy/child-details/AdvocacyHistory/AdvocacyHistory';

const PAGE_TITLE = "Advocacy History";

AdvocacyPage.getLayout = function getLayout(page: any) {
    return (
        <Layout
            showTitleWithBreadcrumbs
            breadcrumbs={[
                {
                    icon: <HomeIcon />,
                    name: "Child Advocacy",
                    href: "/advocacy/child-advocacy/details",
                },
                {
                    name: "All",
                },
            ]}
            title={PAGE_TITLE}
        >
            {page}
        </Layout>
    );
};

export default function AdvocacyPage() {
    return (
        <Page title={PAGE_TITLE}>
            <AdvocacyHistory />
        </Page>
    );
}