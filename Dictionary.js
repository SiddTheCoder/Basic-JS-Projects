// Simple Hardcoded Dictionary App in JS
const basicDictionary = {
    "apple": "A fruit.",
    "book": "A set of written or printed pages.",
    "cat": "A small domesticated carnivorous mammal.",
    "dog": "A domesticated carnivorous mammal.",
    "eat": "To consume food.",
    "friend": "A person you know and like.",
    "happy": "Feeling or showing pleasure.",
    "light": "Something that makes things visible.",
    "moon": "The natural satellite of the Earth.",
    "name": "A word by which a person or thing is known.",
    "water": "A colorless, transparent, odorless liquid.",
    "sun": "The star at the center of our solar system.",
    "tree": "A perennial plant with an elongated stem.",
    "house": "A building for human habitation.",
    "car": "A road vehicle powered by an engine.",
    "city": "A large town.",
    "school": "An institution for educating children.",
    "love": "An intense feeling of deep affection.",
    "dance": "To move rhythmically to music.",
    "smile": "A facial expression of happiness."
    };
    
    const technicalDictionary = {
    "algorithm": "A process or set of rules for solving a problem.",
    "bandwidth": "The maximum rate of data transfer across a network.",
    "cache": "A hardware or software component that stores data for quick access.",
    "database": "An organized collection of data.",
    "encryption": "The process of converting information into a secure format.",
    "firewall": "A network security system that monitors and controls traffic.",
    "cloud computing": "The delivery of computing services over the internet.",
    "latency": "The delay before a transfer of data begins.",
    "protocol": "A set of rules for data communication.",
    "virtualization": "The creation of a virtual version of a device or resource.",
    "API": "Application Programming Interface; a set of tools for building software.",
    "debugging": "The process of finding and fixing bugs in software.",
    "framework": "A structure for developing applications.",
    "server": "A computer that provides data to other computers.",
    "frontend": "The part of a website or application that users interact with.",
    "backend": "The server-side of an application, responsible for database interactions.",
    "repository": "A storage location for software packages or code.",
    "syntax": "The set of rules that defines the combinations of symbols.",
    "iteration": "The repetition of a process in programming.",
    "compiler": "A program that translates code from a high-level language to machine language."
    };
    
    const computerScienceTerms = {
    "abstraction": "A process of hiding complex reality while exposing only the necessary parts.",
    "algorithm": "A set of rules or steps to solve a problem.",
    "API": "Application Programming Interface; a set of protocols for building software applications.",
    "array": "A data structure that can hold more than one value at a time.",
    "binary": "A numbering system that uses only two digits, 0 and 1.",
    "bit": "The smallest unit of data in computing, representing a binary value.",
    "boolean": "A data type that can hold one of two values: true or false.",
    "cache": "A hardware or software component that stores data for quick access.",
    "cloud computing": "The delivery of computing services over the internet.",
    "compiler": "A program that translates code from a high-level language to machine code.",
    "data structure": "A particular way of organizing and storing data.",
    "debugging": "The process of identifying and removing errors from software.",
    "encryption": "The process of converting information into a secure format.",
    "framework": "A structure that provides support for developing software applications.",
    "function": "A block of code designed to perform a particular task.",
    "Git": "A version control system for tracking changes in computer files.",
    "IDE (Integrated Development Environment)": "A software application that provides comprehensive facilities to programmers.",
    "inheritance": "A mechanism in OOP where a new class derives properties from an existing class.",
    "iteration": "The repetition of a process in programming.",
    "loop": "A programming construct that repeats a block of code.",
    "middleware": "Software that connects different applications or services.",
    "object-oriented programming": "A programming paradigm based on the concept of objects.",
    "parameter": "A variable used to pass data into functions.",
    "polymorphism": "The ability of different classes to be treated as instances of the same class.",
    "repository": "A storage location for software packages or code.",
    "runtime": "The period during which a program is executing.",
    "server": "A computer that provides data to other computers.",
    "syntax": "The set of rules that defines the combinations of symbols in a programming language.",
    "variable": "A storage location identified by a name that can hold a value.",
    "web server": "A server that delivers web pages to clients.",
    "XML": "A markup language that defines rules for encoding documents.",
    "XSS": "Cross-Site Scripting; a security vulnerability that allows attackers to inject scripts."
    };
    
    const networkingTerms = {
    "bandwidth": "The maximum rate of data transfer across a network.",
    "firewall": "A security system that monitors and controls incoming and outgoing network traffic.",
    "gateway": "A network point that acts as an entrance to another network.",
    "IP address": "A unique identifier for a device on a network.",
    "LAN (Local Area Network)": "A network that connects computers within a limited area.",
    "protocol": "A set of rules governing data communication.",
    "router": "A device that forwards data packets between computer networks.",
    "VPN (Virtual Private Network)": "A service that encrypts your internet connection.",
    "SSID (Service Set Identifier)": "The name of a wireless network.",
    "packet": "A formatted unit of data carried by a packet-switched network.",
    "NAT (Network Address Translation)": "A method of remapping an IP address space into another.",
    "DHCP (Dynamic Host Configuration Protocol)": "A network management protocol used to automate the process of configuring devices.",
    "TCP (Transmission Control Protocol)": "A fundamental protocol that enables reliable communication.",
    "UDP (User Datagram Protocol)": "A communication protocol that allows data to be sent without establishing a connection.",
    "LAN switch": "A device that connects devices on a local network.",
    "WAN (Wide Area Network)": "A telecommunications network that extends over a large geographical area.",
    "packet switching": "A method of grouping data into packets for transmission.",
    "topology": "The arrangement of different elements in a network.",
    "throughput": "The amount of data moved successfully from one place to another in a given time.",
    "latency": "The delay before a transfer of data begins.",
    "OSI model": "A conceptual framework used to understand network interactions.",
    "peer-to-peer": "A decentralized communications model where each party has the same capabilities.",
    "proxy server": "A server that acts as an intermediary for requests from clients seeking resources.",
    "routing table": "A data table stored in a router that lists the routes to particular network destinations.",
    "subnetting": "Dividing a network into smaller, manageable pieces.",
    "VoIP (Voice over Internet Protocol)": "A technology that allows voice communication over the internet.",
    "physical layer": "The lowest layer of the OSI model, dealing with the physical connection.",
    "data link layer": "The layer responsible for node-to-node data transfer.",
    "network layer": "The layer responsible for data transfer between different networks.",
    "transport layer": "The layer that provides end-to-end communication services.",
    "application layer": "The layer closest to the user, providing network services."
    };
    
    const dataScienceTerms = {
    "algorithm": "A process or set of rules to solve a problem.",
    "big data": "Extremely large data sets that may be analyzed for patterns.",
    "data mining": "The practice of examining large datasets to uncover patterns.",
    "data visualization": "The graphical representation of information and data.",
    "data wrangling": "The process of cleaning and transforming raw data into a usable format.",
    "dataset": "A collection of related data records.",
    "machine learning": "A branch of AI focused on building systems that learn from data.",
    "statistical analysis": "The process of collecting and analyzing data to identify trends.",
    "predictive modeling": "Using statistics to predict outcomes.",
    "neural network": "A set of algorithms modeled after the human brain.",
    "regression": "A statistical process for estimating relationships among variables.",
    "classification": "The process of predicting the category of a data point.",
    "clustering": "The grouping of a set of objects in such a way that objects in the same group are more similar.",
    "time series analysis": "A statistical technique that deals with time series data.",
    "natural language processing": "A field of AI that focuses on the interaction between computers and humans through language.",
    "data warehouse": "A system used for reporting and data analysis.",
    "ETL (Extract, Transform, Load)": "The process of extracting data from various sources, transforming it, and loading it into a data warehouse.",
    "anomaly detection": "The identification of rare items, events, or observations.",
    "A/B testing": "A method of comparing two versions of a webpage to determine which performs better.",
    "data ethics": "The ethical implications of data collection, sharing, and usage.",
    "feature engineering": "The process of using domain knowledge to create features that make machine learning algorithms work.",
    "data governance": "The management of data availability, usability, integrity, and security.",
    "KPI (Key Performance Indicator)": "A measurable value that demonstrates how effectively a company is achieving key business objectives.",
    "data cleansing": "The process of detecting and correcting corrupt or inaccurate records from a dataset.",
    "SQL": "Structured Query Language; used for managing and manipulating databases.",
    "data lake": "A storage repository that holds vast amounts of raw data in its native format.",
    "visual analytics": "The science of analytical reasoning facilitated by visual interactive interfaces.",
    "descriptive statistics": "Statistics that summarize the characteristics of a dataset.",
    "inferential statistics": "Statistics that draw conclusions about a population based on a sample.",
    "data modeling": "The process of creating a data model to visually represent data and its relationships.",
    "dimensionality reduction": "The process of reducing the number of random variables under consideration."
    };
    
    const softwareDevelopmentTerms = {
    "agile": "A methodology for software development focused on iterative progress.",
    "CI/CD": "Continuous Integration/Continuous Deployment; practices for automating software delivery.",
    "dependency": "A software component that another component relies on.",
    "devops": "A set of practices that combines software development and IT operations.",
    "Git": "A version control system for tracking changes in code.",
    "kanban": "A scheduling system for lean manufacturing and just-in-time manufacturing.",
    "microservices": "An architectural style that structures an application as a collection of small services.",
    "MVP (Minimum Viable Product)": "A version of a product with enough features to satisfy early adopters.",
    "open source": "Software whose source code is available for modification and redistribution.",
    "refactoring": "The process of restructuring existing computer code without changing its external behavior.",
    "scrum": "An agile framework for managing complex projects.",
    "sprint": "A set period during which specific work has to be completed.",
    "test-driven development": "A software development process that relies on writing tests before coding.",
    "UI/UX design": "The process of enhancing user satisfaction by improving usability and accessibility.",
    "version control": "A system that records changes to files over time.",
    "waterfall model": "A linear and sequential approach to software development.",
    "bug": "An error or flaw in software that causes it to produce incorrect results.",
    "commit": "To save changes to a version control repository.",
    "repository": "A central location where data is stored and managed.",
    "syntax error": "An error in the syntax of a programming language.",
    "build": "The process of converting source code into a standalone form.",
    "debugging": "The process of identifying and removing bugs from software.",
    "release": "A version of software that is made available to users.",
    "artifact": "A by-product produced during software development.",
    "code review": "A systematic examination of computer source code.",
    "integration testing": "Testing the interaction between integrated components.",
    "unit testing": "Testing individual components of a software system.",
    "acceptance testing": "Testing to determine if the system meets the requirements.",
    "user story": "A short description of a feature from an end-user perspective.",
    "API documentation": "A technical document that describes the functionalities of an API.",
    "performance testing": "Testing to determine how a system performs in terms of responsiveness and stability."
    };
    
    const cybersecurityTerms = {
    "authentication": "The process of verifying the identity of a user or system.",
    "malware": "Software designed to disrupt, damage, or gain unauthorized access to a computer system.",
    "phishing": "The fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity.",
    "encryption": "The method of converting information into code to prevent unauthorized access.",
    "ransomware": "A type of malware that encrypts the victim's data and demands payment for the decryption key.",
    "firewall": "A network security device that monitors and controls incoming and outgoing traffic.",
    "vulnerability": "A weakness in a system that can be exploited by attackers.",
    "DDoS (Distributed Denial of Service)": "An attack that aims to make a service unavailable by overwhelming it with traffic.",
    "intrusion detection system": "A device or software application that monitors a network for malicious activities.",
    "pen testing": "Short for penetration testing; simulating attacks to identify vulnerabilities.",
    "social engineering": "The psychological manipulation of people into divulging confidential information.",
    "malicious software": "Any software intentionally designed to cause damage to a computer system.",
    "backdoor": "A method of bypassing normal authentication to gain access to a system.",
    "zero-day exploit": "An attack that occurs on the same day a vulnerability is discovered.",
    "security policy": "A document that outlines how to protect an organization's physical and IT assets.",
    "threat modeling": "The process of identifying and prioritizing potential threats to a system.",
    "endpoint security": "Securing endpoints on a network, often through software solutions.",
    "cyber hygiene": "Practices and steps that users of computers and devices take to maintain system health and security.",
    "patch management": "The process of managing updates for software applications.",
    "access control": "The selective restriction of access to a place or resource.",
    "information security": "The practice of protecting information from unauthorized access.",
    "two-factor authentication": "A security process that requires two different forms of identification.",
    "data breach": "An incident where unauthorized access to sensitive data occurs.",
    "cryptography": "The practice of secure communication in the presence of third parties.",
    "digital forensics": "The process of recovering and investigating material found in digital devices.",
    "malware analysis": "The study of malicious software to understand its behavior and impact.",
    "secure socket layer (SSL)": "A standard technology for establishing an encrypted link between a server and a client.",
    "network security": "The policies and practices adopted to prevent unauthorized access to networked resources.",
    "security audit": "A systematic evaluation of the security of a company's information system.",
    "incident response": "The approach to managing the aftermath of a security breach."
    };
    
    
    const mainDictionary = {
    ...basicDictionary,
    ...technicalDictionary,
    ...computerScienceTerms,
    ...networkingTerms,
    ...softwareDevelopmentTerms,
    ...dataScienceTerms,
    ...cybersecurityTerms
    };
    
    const prompt = require('prompt-sync')();
    
    const userWord = prompt('Enter the word to know its meaning : ');
    const quiz = userWord.toLocaleLowerCase()
    if(mainDictionary.hasOwnProperty(quiz)){
    const mappedValue = mainDictionary[quiz];
    console.log(`${quiz} : ${mappedValue}`)
    }
    else if (!mainDictionary.hasOwnProperty(quiz)) {
    console.log("Sorry , the word you entered is not in the dictionary")
    }
    else {
    // This block should never be reached.
    console.log("Something went wrong.");
    }
