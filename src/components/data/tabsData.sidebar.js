import {
  ConnectWithoutContactRounded,
  FaceRounded,
  HomeRounded,
  MessageRounded,
  TerminalRounded,
  TextSnippetRounded,
} from "@mui/icons-material";

const tabProps = (index) => {
  return {
    id: `sidebar-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};

export const tabsData = () => {
  return [
    { label: "صفحه اصلی", icon: <HomeRounded />, tabprops: { ...tabProps(0) } },
    { label: "درباره من", icon: <FaceRounded />, tabprops: { ...tabProps(1) } },
    {
      label: "رزومه من",
      icon: <TextSnippetRounded />,
      tabprops: { ...tabProps(2) },
    },
    {
      label: "نمونه کارها",
      icon: <TerminalRounded />,
      tabprops: { ...tabProps(3) },
    },
    {
      label: "ظرات دانشجویان",
      icon: <MessageRounded />,
      tabprops: { ...tabProps(4) },
    },
    {
      label: "ارتباط با من",
      icon: <ConnectWithoutContactRounded />,
      tabprops: { ...tabProps(5) },
    },
  ];
};
