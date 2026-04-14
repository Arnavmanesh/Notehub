import React from 'react';
import SubjectBlock from './SubjectBlock';

const subjectsData = [
    {
        title: "Mathematics for Computer & Info Science-4",
        description: "Gain a comprehensive understanding of fundamental concepts of graph theory including paths, cycles, trees, graph algorithms, graph coloring and matrix representations.",
        syllabusLink: "https://drive.google.com/file/d/155Flg0jxXeqEaPvCEVxiSUgGQoVfl3fg/view?usp=sharing",
        modelPaperLink: "https://drive.google.com/file/d/1w9-ex2s7EAh5yiTadwGvrbSU9cgT1X--/view?usp=drive_link",
        modules: [
            {
                badge: "Module 1",
                title: "Introduction to Graphs",
                description: "Basic definitions, isomorphism, subgraphs, walks, paths, circuits, and connectedness.",
                link: "https://drive.google.com/file/d/1FCJXlxXQbba6E2pRyuy24H6BVfDUKWoU/view?usp=sharing"
            },
            {
                badge: "Module 2",
                title: "Euler & Hamiltonian Graphs",
                description: "Operations on graphs, Travelling Salesman Problem, edge/vertex connectivity, and directed graphs.",
                link: "https://drive.google.com/file/d/1SsJE9JeWK0UDH4mSwPWuLneTzj4VL0W5/view?usp=drive_link"
            },
            {
                badge: "Module 3",
                title: "Trees & Shortest Path Algorithms",
                description: "Properties of trees, spanning trees, Prim's, Kruskal's, Dijkstra's, and Floyd-Warshall algorithms.",
                link: "https://drive.google.com/file/d/1svn8NlO2UzVyFWyoo3fegDrSiS7p8Iaq/view?usp=sharing"
            },
            {
                badge: "Module 4",
                title: "Matrix Representation & Coloring",
                description: "Adjacency/Incidence matrices, chromatic numbers, chromatic polynomials, and Greedy coloring algorithm.",
                link: "https://drive.google.com/file/d/1B1Wz4VcLqhZPh92U04wEVmMU23Kj-cix/view?usp=sharing"
            }
        ]
    },
    {
        title: "Database Management Systems (DBMS)",
        description: "Equip yourself with a comprehensive understanding of fundamental DBMS concepts as well as the principles and applications of both relational and NoSQL databases.",
        syllabusLink: "https://drive.google.com/file/d/11AMk0Uc09lrm6o0lUz9xslKVo9UEDbXR/view?usp=sharing",
        modelPaperLink: "https://drive.google.com/file/d/10ghl1R3XH7ApFjXSXsQ30SskPNbIJ5Lv/view?usp=sharing",
        modules: [
            { badge: "Module 1", title: "Database Concepts & ER Modelling", description: "System architecture, data models, Entity-Relationship (ER) model, attributes, keys, and structural constraints.", link: "https://drive.google.com/file/d/1jQ-5rNRDkN5pQFGLM4e0yYs84HksArhS/view?usp=sharing" },
            { badge: "Module 2", title: "Relational Model & SQL", description: "Relational database constraints, algebra, calculus, and Structured Query Language (SQL) data manipulation.", link: "https://drive.google.com/file/d/11fLI581N0YS6c5c9aCD0qUCKiLxduWZr/view?usp=drive_link" },
            { badge: "Module 3", title: "Normalization & Transactions", description: "Functional dependencies, 1NF to 3NF, concurrency control, locking techniques, and database recovery.", link: "https://drive.google.com/file/d/1gv-iaP3sRxQ60a5hfgoKVAbpvk-pvU4o/view?usp=sharing" },
            { badge: "Module 4", title: "Introduction To NoSQL", description: "CAP Theorem, BASE properties, Key value stores, Graph stores, Column Family, and Document stores.", link: "https://drive.google.com/file/d/1nP0rQOi4ThYBAUznNHZ2LWSnXOVQ1yUg/view?usp=drive_link" }
        ]
    },
    {
        title: "Operating Systems",
        description: "Learn the structure of a typical OS and its core functionalities, including a practical understanding of OS implementation nuances based on the Linux kernel.",
        syllabusLink: "https://drive.google.com/file/d/1BmEXThTYTlZ6XXIibBtzwN7SVoI_C9uf/view?usp=sharing",
        modelPaperLink: "https://drive.google.com/file/d/181ELKj_bnIk9neddKTVveujufjL_jPHD/view?usp=drive_link",
        modules: [
            { badge: "Module 1", title: "Process Concepts & Scheduling", description: "OS services, user/kernel modes, context switching, multithreading, and process scheduling algorithms (CFS).", link: "https://drive.google.com/file/d/1yamenlqqF1keXjFrrp4FNjQkyDI1qihD/view?usp=drive_link" },
            { badge: "Module 2", title: "Concurrency & Synchronization", description: "Locks, semaphores, bounded buffer problem, deadlock characterization, prevention, avoidance, and recovery.", link: "https://drive.google.com/file/d/1FeH_Ufq41cSgUQyJgd1fjJeFOMO2Lt0i/view?usp=drive_link" },
            { badge: "Module 3", title: "Memory Management & Virtual Memory", description: "Address translation, segmentation, paging, TLBs, swap space, page replacement policies, and thrashing.", link: "https://drive.google.com/file/d/1f0K-ATrtQ0ij0ojieCvyChm2sKL-WYxk/view?usp=drive_link" },
            { badge: "Module 4", title: "I/O Systems & File Directories", description: "Programmed I/O, DMA, device drivers, disk scheduling, file descriptor interface, inodes, and mounting.", link: "https://drive.google.com/file/d/1wwLkg9dHRNHgTQSKzp8y31xDC9AuLEI1/view?usp=drive_link" }
        ]
    },
    {
        title: "Computer Organization & Architecture",
        description: "Explore the principles of computer organization and basic architectural concepts using RISC, including microarchitecture, memory systems, and I/O structures.",
        syllabusLink: "https://drive.google.com/file/d/19Rkk9j5RZ_xfz8F9IWmtoIXFdD0cqVBB/view?usp=sharing",
        modelPaperLink: "https://drive.google.com/file/d/1bb9RXbOLWchmnlazTVgNMcXg-G4xX3uR/view?usp=drive_link",
        modules: [
            { badge: "Module 1", title: "Basic Structure & RISC vs CISC", description: "Functional units, memory maps, assembly language, addressing modes, and stored program concepts.", link: "https://drive.google.com/file/d/1Avh394-bbQNHnyoqOz-bfVrwDPuRk1On/view?usp=drive_link" },
            { badge: "Module 2", title: "Microarchitecture & Pipelining", description: "Single-cycle processor datapath/control, pipelined datapath, solving data/control hazards, and performance.", link: "https://drive.google.com/file/d/1gCaZqJmyqqMGYNZpkC7xBXu1RdFU4_GU/view?usp=drive_link" },
            { badge: "Module 3", title: "Memory Systems", description: "Cache concepts, mapping, write policies, virtual memory address translation, page tables, and memory protection.", link: "https://drive.google.com/file/d/1UBDFKl1Zg62iE5Q38ZAjCHsb_T0sAP33/view?usp=drive_link" },
            { badge: "Module 4", title: "Input / Output Systems", description: "External devices, I/O modules, Programmed/Interrupt Driven I/O, DMA, and Embedded Serial I/O.", link: "https://drive.google.com/file/d/1pd3TKcN0F2_vOk5cm_XNLrRU8OQA7cPH/view?usp=drive_link" }
        ]
    }
];

const Subjects = () => {
    return (
        <section id="subjects" className="subjects-wrapper">
            <div className="container">
                {subjectsData.map((subject, index) => (
                    <SubjectBlock
                        key={index}
                        title={subject.title}
                        description={subject.description}
                        syllabusLink={subject.syllabusLink}
                        modelPaperLink={subject.modelPaperLink}
                        modules={subject.modules}
                    />
                ))}
            </div>
        </section>
    );
};

export default Subjects;
