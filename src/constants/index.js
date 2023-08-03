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
                amount : '10k'
            },
            {
                amount : '15k'
            },
            {
                amount : '10k'
            },
            {
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
                amount : '7k'
            },
            {
                amount : '9k'
            },
            {
                amount : '10k'
            },
            {
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
                amount : '8k'
            },
            {
                amount : '15k'
            },
            {
                amount : '20k'
            },
            {
                amount : '30k'
            }
        ]
    },
];