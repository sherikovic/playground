import PageHeader from "../Components/PageHeader";
import SettingsTabs from "../Components/SettingsTabs";

const SettingsPage: React.FC = () => {

    return (
        <div>
            <PageHeader headerText="Settings" >
                Update your settings
            </PageHeader>
            <SettingsTabs />
        </div>
    );
};

export default SettingsPage;