import { useState } from 'react';

const useTabs = (defaultTab, insights) => {
    const [activeTab, setActiveTab] = useState(defaultTab);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const activeContent = insights[activeTab] || [];

    return { activeTab, handleTabClick, activeContent };
};

export default useTabs;

