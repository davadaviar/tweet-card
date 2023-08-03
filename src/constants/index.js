import { bookMark, like, reply, retweet } from "../assets/icons";
import { billGates, mardiguWowiek, steveJobs } from "../assets/images";

export const accountItems = [
    {
        name : 'Steve Jobs',
        username : '@stevejobs',
        createAt : '1m',
        imageProfile : `${steveJobs}`,
        tweet : 'Stay hungry. Stay foolish.',
        engagements : [
            {
                icon : `${reply}`,
                amount : '10k'
            },
            {
                icon : `${retweet}`,
                amount : '15k'
            },
            {
                icon : `${like}`,
                amount : '10k'
            },
            {
                icon : `${bookMark}`,
                amount : '20k'
            }
        ]
    },
    {
        name : 'Bill Gates',
        username : '@billgates',
        createAt : '1d',
        imageProfile : `${billGates}`,
        tweet : 'It\’s fine to celebrate success, but it is more important to heed the lessons of failure',
        engagements : [
            {
                icon : `${reply}`,
                amount : '7k'
            },
            {
                icon : `${retweet}`,
                amount : '9k'
            },
            {
                icon : `${like}`,
                amount : '10k'
            },
            {
                icon : `${bookMark}`,
                amount : '15k'
            }
        ]
    },
    {
        name : 'Bossman Mardigu',
        username : '@bossmanmardigu',
        createAt : '2m',
        imageProfile : `${mardiguWowiek}`,
        tweet : 'Pada lelaki yang sukses pasti ada wanita baik yang mendukungnya. pada lelaki yang gagal pasti banyak wanita cantik di belakangnya.',
        engagements : [
            {
                icon : `${reply}`,
                amount : '8k'
            },
            {
                icon : `${retweet}`,
                amount : '15k'
            },
            {
                icon : `${like}`,
                amount : '20k'
            },
            {
                icon : `${bookMark}`,
                amount : '30k'
            }
        ]
    },
];