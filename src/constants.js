import logo from '../src/navLogoUp.png';
import presi from '../src/images/TM Supritha.jpeg';
import vpe from '../src/images/TM Kartik.JPG';
import avpe from '../src/images/TM Dwija.JPG';
import vpm from '../src/images/TM Harsha.png';
import avpm from '../src/images/TM Kruthika.JPG';
import vppr from '../src/images/TM Sharan.JPG';
import avppr from '../src/images/TM Adithya K.JPG';
import avppr1 from '../src/images/TM Rahul.jpeg';
import sec from '../src/images/TM Pranav.jpeg';
import jsec1 from '../src/images/TM Sahana.JPG';
import jsec2 from '../src/images/TM Achintya.JPG';
import treas from '../src/images/TM Rashmi.JPG';
import saa from '../src/images/TM Riya.JPG';


//#region AboutData
export const AboutButtonData=
{
    defaultValue:"desc",
    data:[
    {
        text:"toastmasters international",
        value:"desc",
        checked:"checked"
    },{
        text:"our mission",
        value:"mission"
    },{
        text:"why join us",
        value:"joining"
    }
    ]
};

export const OurTeamData={
    Content:{
        Header:"Our Team",
        Description:"We pride ourselves on providing superior service but you don't just have to take our word for it."
    },
    President:{
        Name:"TM Supritha Harishankar",
        Description:"President",
        url:"https://www.linkedin.com/in/suprithahs",
        image:presi
    },
    OurTeam:[
    {
        Name:"TM Kartik Nayak",
        Description:"Vice President Education",
        url:"https://www.linkedin.com/in/kartik-nayak-2b120313b",
        image:vpe
    },
    {
        Name:"TM Dwija Bagwe",
        Description:"Assosiate Vice President Education",
        url:"https://www.linkedin.com/in/dwijab",
        image:avpe
    },
    {
        Name:"TM Harsha DSouza",
        Description:"Vice President Membership",
        url:"https://www.linkedin.com/in/harsha-dsouza-1254221a9/",
        image:vpm
    },
    {
        Name:"TM Kruthika K Sudhama",
        Description:"Assosicate Vice President Membership",
        url:"https://www.linkedin.com/in/kruthika-ksudhama-a1b4291a9",
        image:avpm
    },
    {
        Name:"TM Sharan Venkatesh",
        Description:"Vice President Public Relations",
        url:"https://www.linkedin.com/in/sharan-venkatesh-7247a016b",
        image:vppr
    },
    {
        Name:"TM Adithya Kannan",
        Description:"Assosiate Vice President Public Relations",
        url:"https://www.linkedin.com/in/adithyakannan",
        image:avppr
    },
    {
        Name:"TM Rahul Hanchate",
        Description:"Assosiate Vice President Public Relations",
        url:"https://www.linkedin.com/in/rmhanchate/",
        image:avppr1
    },
    {
        Name:"TM Pranav Krishna",
        Description:"Secretary",
        url:"https://www.linkedin.com/in/pranavkrishna99/",
        image:sec
    },
    {
        Name:"TM Sahana Bhandari",
        Description:"Joint Secretary",
        url:"https://www.linkedin.com/in/sahana-praveen-bhandari-b400741a7",
        image:jsec1
    },
    {
        Name:"TM Achintya Thantry",
        Description:"Joint Secretary",
        url:"http://www.linkedin.com/in/achintya-thantry-aa1689183",
        image:jsec2
    },
    {
        Name:"TM Rashmi Raj",
        Description:"Treasurer",
        url:"https://www.linkedin.com/in/rashmi-raj-990425182",
        image:treas
    },
    {
        Name:"TM Riya Shah",
        Description:"Sergeant At Arms",
        url:"https://www.linkedin.com/in/riya-shah-b086b7184",
        image:saa
    }




]};

export const AboutTextData={
    filterProperty:"filterProp",
    data:[
        {
            text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."+
            " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."+
            " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."+
            " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."+
            " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,"+
            " eaque ipsa quae.",
            filterProp:"desc"
        },{
            text:
            " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."+
            " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,"+
            " eaque ipsa quae.",
            filterProp:"mission"
        },{
            text:
            " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,"+
            " eaque ipsa quae.",
            filterProp:"joining"
        },
    ]
};

export const AboutContentData={
    header:"Hello World!",
    content:
        "We are here to Acelerate your business and help you find the way. "+
        "Our creative specialists work on an international level at branding, design and development. "+
        "Both online and offline."
}
//#endregion

//#region HomePageData
export const HomeContent={
    header:"Welcome to NITK\nToastmasters",
    content:
        "NITK Toastmasters club was founded in 2017, by a group of very enthusiastic and passionate members.Since its humble beginnings,"+
        "NITK Toastmasters has grown into one of the most prominent clubs its Division and District,"+ 
        "with a member base of over 30 motivated Toastmasters. Today, NITK Toastmasters has taken every possible step to be as innovative as possible."+
        "This is reflected in our award-winning newsletters and achievements."+
        "We strive to keep learning and growing through a process of continuous feedback and try to be the best public speakers we can.",
    relativeUrl:"/about",
    urlText:"know more"
}
//#endregion

//#region EventData 
export const EventButtonData=
{
    defaultValue:"all",
    data:[
    {
        text:"all",
        value:"all",
        checked:"checked"
    },{
        text:"previous events",
        value:"previous"
    },{
        text:"upcoming events",
        value:"upcoming"
    }
    ]
};

export const EventCardData=
{
    filterProperty:"filterProp",
    data:[
    {
        Title:"Eventtitle1",
        Description:"description1",
        url:"http://localhost:3000/",
        image:logo,
        filterProp:"all"
    },
    {
        Title:"Eventtitle2",
        Description:"description2",
        url:"http://localhost:3000/",
        image:logo,
        filterProp:"previous"
    },
    {
        Title:"Eventtitle3",
        Description:"description3",
        url:"http://localhost:3000/",
        image:logo,
        filterProp:"upcoming"
    },{
        Title:"Eventtitle4",
        Description:"description1",
        url:"http://localhost:3000/",
        image:logo,
        filterProp:"all"
    },
    {
        Title:"Eventtitle5",
        Description:"description2",
        url:"http://localhost:3000/",
        image:logo,
        filterProp:"previous"
    },
    {
        Title:"Eventtitle6",
        Description:"description3",
        url:"http://localhost:3000/",
        image:logo,
        filterProp:"upcoming"
    }
]};
//#endregion

//#region NavBarData
export const NavLinkListDataBeforeMedia=[
    {
        content:"HOME",
        relativeUrl:'/'
    },{
        content:"ABOUT US",
        relativeUrl:'/about'
    }
]

export const NavLinkListDataAfterMedia=[
    {
        content:"AWARDS",
        relativeUrl:'/awards'
    },{
        content:"EVENTS",
        relativeUrl:'/events'
    },
    // {
    //     content:"RESOURCES",
    //     relativeUrl:'/resources'
    // }
]
//#endregion

//#region BlogData
export const BlogCardData=[
        {
            Title:"Blogtitle1",
            Description:"description1",
            url:"http://localhost:3000/",
            image:logo
        },
        {
            Title:"Blogtitle2",
            Description:"description2",
            url:"http://localhost:3000/",
            image:logo
        },
        {
            Title:"Blogtitle3",
            Description:"description3",
            url:"http://localhost:3000/",
            image:logo
        },
        {
            Title:"Blogtitle4",
            Description:"description4",
            url:"http://localhost:3000/",
            image:logo
        },
        {
            Title:"Blogtitle5",
            Description:"description5",
            url:"http://localhost:3000/",
            image:logo
        },
        {
            Title:"Blogtitle6",
            Description:"description6",
            url:"http://localhost:3000/",
            image:logo
        }
];
//#endregion

//#region NewsletterData
export const NewsletterData=[
    {
        Title:"Newslettertitle1",
        Description:"description1",
        url:"http://localhost:3000/",
        image:logo
    },
    {
        Title:"Newslettertitle2",
        Description:"description2",
        url:"http://localhost:3000/",
        image:logo
    },
    {
        Title:"Newslettertitle3",
        Description:"description3",
        url:"http://localhost:3000/",
        image:logo
    },
    {
        Title:"Newslettertitle4",
        Description:"description4",
        url:"http://localhost:3000/",
        image:logo
    },
    {
        Title:"Newslettertitle5",
        Description:"description5",
        url:"http://localhost:3000/",
        image:logo
    },
    {
        Title:"Newslettertitle6",
        Description:"description6",
        url:"http://localhost:3000/",
        image:logo
}];
//#endregion

//#region PodcastData
export const PodCastData=[
    {
        Title:"Podcasttitle1",
        Description:"description1",
        url:"http://localhost:3000/",
        image:logo
    },
    {
        Title:"Podcasttitle2",
        Description:"description2",
        url:"http://localhost:3000/",
        image:logo
    },
    {
        Title:"Podcasttitle3",
        Description:"description3",
        url:"http://localhost:3000/",
        image:logo
    },
    {
        Title:"Podcasttitle4",
        Description:"description4",
        url:"http://localhost:3000/",
        image:logo
    },
    {
        Title:"Podcasttitle5",
        Description:"description5",
        url:"http://localhost:3000/",
        image:logo
    },
    {
        Title:"Podcasttitle6",
        Description:"description6",
        url:"http://localhost:3000/",
        image:logo
}];
//#endregion

//#region ResourceData
export const ResourceButtonData=
{
    defaultValue:"club",
    data:[
    {
        text:"Club Resources",
        value:"club",
        checked:"checked"
    },{
        text:"Pathways Resources",
        value:"pathways"
    },{
        text:"Contests Resources",
        value:"contests"
    },{
        text:"New Member Resources",
        value:"new"
    },{
        text:"Miscellanous",
        value:"misc"
    }
    ]
};

export const ResourceCardData=
{
        filterProperty:"filterProp",
        data:[
        {
            Title:"Resourcetitle1",
            Description:"description1",
            url:"http://localhost:3000/",
            image:logo,
            filterProp:"club"
        },
        {
            Title:"Resourcetitle2",
            Description:"description2",
            url:"http://localhost:3000/",
            image:logo,
            filterProp:"pathways"
        },
        {
            Title:"Resourcetitle3",
            Description:"description3",
            url:"http://localhost:3000/",
            image:logo,
            filterProp:"new"
        },{
            Title:"Resourcetitle4",
            Description:"description1",
            url:"http://localhost:3000/",
            image:logo,
            filterProp:"club"
        },
        {
            Title:"Resourcetitle5",
            Description:"description2",
            url:"http://localhost:3000/",
            image:logo,
            filterProp:"pathways"
        },
        {
            Title:"Resourcetitle6",
            Description:"description3",
            url:"http://localhost:3000/",
            image:logo,
            filterProp:"new"
        },
        {
            Title:"Resourcetitle7",
            Description:"description2",
            url:"http://localhost:3000/",
            image:logo,
            filterProp:"contests"
        },
        {
            Title:"Resourcetitle8",
            Description:"description3",
            url:"http://localhost:3000/",
            image:logo,
            filterProp:"misc"
        },
        {
            Title:"Resourcetitle9",
            Description:"description2",
            url:"http://localhost:3000/",
            image:logo,
            filterProp:"contests"
        },
        {
            Title:"Resourcetitle10",
            Description:"description3",
            url:"http://localhost:3000/",
            image:logo,
            filterProp:"misc"
        }
    ]
};
//#endregion