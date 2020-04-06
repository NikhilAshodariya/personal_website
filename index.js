const {ApolloServer, gql} = require("apollo-server");
const DataAccess = require("./server/data/DataAccess");

const typeDefs = gql`
    type Query {
        workexps: [WorkExp]
        educations: [Education]
        skills: [Skill]
        projects: [Project]
        stay: String
        phone: String
        resumeLink: String
        email: String
        profile: Profile
    }

    type Profile {
        bio: String
    }

    type Project {
        name: String
        title: String
        place: String
        startdate: String
        enddate: String
        description: String
    }

    type Skill {
        category: String
        name: String
        totaldash: String
        activedash: String
    }

    type Education {
        startdate: String
        enddate: String
        university: String
        degree: String
        gpa: String
        courses: [String]
        location: String
        description: String
    }

    type WorkExp {
        startdate: String
        enddate: String
        position: String
        company: String
        type: String
        location: String
        jobdescription: String
    }
`;

const resolvers = {
    Query: {
        stay: () => DataAccess.getBasicInfo()["stay"],
        phone: () => DataAccess.getBasicInfo()["phone"],
        resumeLink: () => DataAccess.getBasicInfo()["resumelink"],
        email: () => DataAccess.getBasicInfo()["email"],
        profile: () => DataAccess.getProfileInfo(),
        projects: () => DataAccess.getProjects(),
        skills: () => DataAccess.getSkills(),
        educations: () => DataAccess.getEducation(),
        workexps: () => DataAccess.getWorkExp(),
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
    engine: {
        apiKey: "service:personal_website:VPbQdPHyq706CjVEUsrigw",
    }
});

server.listen({ port: process.env.PORT || 4000 }).then(({url}) => {
    console.log(`🚀  Server ready at ${url} 🚀`);
});