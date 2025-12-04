export const questionsData = {
    "Information & Communication": {
        "Software Engineer": [
            {
                question: "Which of the following is NOT an OOP concept?",
                options: ["Encapsulation", "Polymorphism", "Abstraction", "Compilation"],
                answer: "Compilation"
            },
            {
                question: "Which data structure uses LIFO?",
                options: ["Queue", "Stack", "Array", "Linked List"],
                answer: "Stack"
            },
            {
                question: "In SQL, which keyword is used to remove duplicates?",
                options: ["UNIQUE", "DISTINCT", "REMOVE", "CLEAR"],
                answer: "DISTINCT"
            },
            {question: "Which HTTP method is idempotent?", options: ["GET", "POST", "PATCH", "CONNECT"], answer: "GET"},
            {
                question: "What is the time complexity of binary search?",
                options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
                answer: "O(log n)"
            },
            {
                question: "REST APIs commonly use which format for data exchange?",
                options: ["PDF", "JSON", "DOCX", "XLSX"],
                answer: "JSON"
            },
            {
                question: "Which is a NoSQL database?",
                options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
                answer: "MongoDB"
            },
            {
                question: "Which sorting algorithm is NOT comparison-based?",
                options: ["Merge Sort", "Quick Sort", "Heap Sort", "Counting Sort"],
                answer: "Counting Sort"
            },
            {
                question: "In Git, which command is used to create a new branch?",
                options: ["git branch new", "git checkout branch", "git branch <name>", "git create branch"],
                answer: "git branch <name>"
            },
            {
                question: "Which language is mainly used for Android app development?",
                options: ["Swift", "Kotlin", "C#", "Ruby"],
                answer: "Kotlin"
            },
            {
                question: "Which principle encourages 'high cohesion, low coupling'?",
                options: ["DRY", "SOLID", "KISS", "YAGNI"],
                answer: "SOLID"
            },
            {
                question: "Which of these is a frontend framework?",
                options: ["Django", "React", "Laravel", "Flask"],
                answer: "React"
            },
            {
                question: "Which protocol is used to transfer web pages?",
                options: ["SMTP", "HTTP", "FTP", "POP3"],
                answer: "HTTP"
            },
            {
                question: "What does '==' mean in Java?",
                options: ["Assign", "Compare object references", "Compare content", "Concatenate strings"],
                answer: "Compare object references"
            },
            {
                question: "Which of these is NOT a programming paradigm?",
                options: ["Functional", "Procedural", "Relational", "Object-Oriented"],
                answer: "Relational"
            },

            {
                question: "A database query is slow — what’s your first step?",
                options: ["Rewrite the database engine", "Check indexes and query plan", "Increase server RAM", "Change database vendor"],
                answer: "Check indexes and query plan"
            },
            {
                question: "A critical bug appears before release — what do you do?",
                options: ["Ignore it", "Communicate, fix, and retest", "Delay indefinitely", "Release with a note"],
                answer: "Communicate, fix, and retest"
            },
            {
                question: "You’re unfamiliar with a new tech stack — your approach?",
                options: ["Reject the work", "Research & prototype", "Guess and code", "Ask to outsource"],
                answer: "Research & prototype"
            },
            {
                question: "Stakeholders give conflicting requirements — your step?",
                options: ["Choose one randomly", "Arrange a discussion to align goals", "Ignore both", "Implement both and see"],
                answer: "Arrange a discussion to align goals"
            },
            {
                question: "The server crashes at peak time — what’s first?",
                options: ["Panic", "Check logs and restart services", "Wait until traffic drops", "Call marketing"],
                answer: "Check logs and restart services"
            },
            {
                question: "You see duplicated code — what’s your approach?",
                options: ["Ignore", "Refactor into reusable function", "Copy more", "Delete all"],
                answer: "Refactor into reusable function"
            },
            {
                question: "A teammate commits insecure code — what to do?",
                options: ["Remove them from the team", "Educate and fix together", "Report to HR", "Ignore"],
                answer: "Educate and fix together"
            },
            {
                question: "A user reports a bug but you can’t reproduce it — first step?",
                options: ["Dismiss the bug", "Request detailed reproduction steps", "Rewrite the feature", "Disable it"],
                answer: "Request detailed reproduction steps"
            },
            {
                question: "Your build fails in CI — next step?",
                options: ["Restart the pipeline", "Read the error logs", "Delete the repo", "Ignore it"],
                answer: "Read the error logs"
            },
            {
                question: "Deadlines are moved up — what’s your plan?",
                options: ["Work randomly", "Reprioritize features", "Quit", "Skip testing"],
                answer: "Reprioritize features"
            },

            {
                question: "You’re given unclear requirements — what do you do?",
                options: ["Start coding immediately", "Ask clarifying questions", "Assume defaults", "Wait for someone else"],
                answer: "Ask clarifying questions"
            },
            {
                question: "How do you handle criticism in code reviews?",
                options: ["Argue", "Listen and learn", "Ignore", "Quit"],
                answer: "Listen and learn"
            },
            {
                question: "Your teammate is struggling — what’s your step?",
                options: ["Offer help", "Complain to manager", "Ignore", "Take over completely"],
                answer: "Offer help"
            },
            {
                question: "You’re asked to explain a technical detail to non-technical staff — best way?",
                options: ["Use simple analogies", "Speak in code terms", "Avoid the topic", "Show complex diagrams"],
                answer: "Use simple analogies"
            },
            {
                question: "How do you keep learning new skills?",
                options: ["Attend trainings, read docs, build projects", "Wait for instructions", "Avoid changes", "Only use old skills"],
                answer: "Attend trainings, read docs, build projects"
            },
            {
                question: "Your team is remote — how to ensure collaboration?",
                options: ["Ignore messages", "Regular check-ins and clear communication", "Only chat when urgent", "Work alone"],
                answer: "Regular check-ins and clear communication"
            },
            {
                question: "A manager assigns too many tasks — your step?",
                options: ["Accept all silently", "Discuss priorities", "Quit", "Outsource secretly"],
                answer: "Discuss priorities"
            },
            {
                question: "You’re stressed by workload — what’s best?",
                options: ["Manage time, take breaks", "Panic", "Work endlessly", "Ignore deadlines"],
                answer: "Manage time, take breaks"
            },
            {
                question: "You spot a risk early — what do you do?",
                options: ["Document and inform team", "Wait until it happens", "Ignore", "Handle alone secretly"],
                answer: "Document and inform team"
            },
            {
                question: "A client praises your work — what’s best?",
                options: ["Thank them professionally", "Ignore", "Demand more praise", "Post on social media only"],
                answer: "Thank them professionally"
            },

            {
                question: "What does 'DevOps' aim to improve?",
                options: ["Only coding speed", "Collaboration between dev & ops", "Marketing reach", "HR processes"],
                answer: "Collaboration between dev & ops"
            },
            {
                question: "Which technology is impacting software engineering heavily?",
                options: ["AI & Machine Learning", "Paper records", "Typewriters", "Fax machines"],
                answer: "AI & Machine Learning"
            },
            {
                question: "What’s the benefit of open-source software?",
                options: ["Free collaboration and transparency", "No one can see code", "Paid licenses only", "Closed development"],
                answer: "Free collaboration and transparency"
            },
            {
                question: "Which is a current software trend?",
                options: ["Monolithic-only apps", "Cloud-native microservices", "Punch cards", "Tape storage only"],
                answer: "Cloud-native microservices"
            },
            {
                question: "Why is cybersecurity important in development?",
                options: ["To protect data and systems from threats", "To slow down apps", "To make apps expensive", "To remove users"],
                answer: "To protect data and systems from threats"
            }
        ],
        "Network Administrator":
            [
                {
                    question: "Which device connects multiple networks together?",
                    options: ["Switch", "Router", "Hub", "Repeater"],
                    answer: "Router"
                },
                {
                    question: "Which protocol is used for secure web browsing?",
                    options: ["HTTP", "HTTPS", "FTP", "SMTP"],
                    answer: "HTTPS"
                },
                {question: "Which port is used by SSH by default?", options: ["21", "22", "80", "443"], answer: "22"},
                {
                    question: "In networking, what does DNS stand for?",
                    options: ["Domain Name System", "Data Network Server", "Dynamic Network Setup", "Domain Naming Software"],
                    answer: "Domain Name System"
                },
                {
                    question: "Which IP address version uses 128-bit addressing?",
                    options: ["IPv4", "IPv5", "IPv6", "IPX"],
                    answer: "IPv6"
                },
                {
                    question: "Which topology has a central hub or switch?",
                    options: ["Star", "Ring", "Mesh", "Bus"],
                    answer: "Star"
                },
                {
                    question: "Which protocol is used to send email?",
                    options: ["POP3", "SMTP", "IMAP", "HTTP"],
                    answer: "SMTP"
                },
                {
                    question: "Which OSI layer handles encryption?",
                    options: ["Physical", "Network", "Presentation", "Data Link"],
                    answer: "Presentation"
                },
                {
                    question: "What is the main function of a firewall?",
                    options: ["Store data", "Block unauthorized access", "Increase bandwidth", "Convert protocols"],
                    answer: "Block unauthorized access"
                },
                {
                    question: "Which command is used to test connectivity in a network?",
                    options: ["ping", "netstat", "ipconfig", "tracert"],
                    answer: "ping"
                },
                {
                    question: "Which protocol is used for remote desktop access?",
                    options: ["HTTP", "RDP", "FTP", "Telnet"],
                    answer: "RDP"
                },
                {
                    question: "Which cable type is immune to electromagnetic interference?",
                    options: ["Coaxial", "Twisted Pair", "Fiber Optic", "All of the above"],
                    answer: "Fiber Optic"
                },
                {
                    question: "Which protocol dynamically assigns IP addresses?",
                    options: ["DNS", "DHCP", "HTTP", "ICMP"],
                    answer: "DHCP"
                },
                {
                    question: "Which device operates at Layer 2 of the OSI model?",
                    options: ["Router", "Switch", "Hub", "Firewall"],
                    answer: "Switch"
                },
                {
                    question: "What is the range of a Class C IPv4 network?",
                    options: ["1.0.0.0 - 126.0.0.0", "128.0.0.0 - 191.255.255.255", "192.0.0.0 - 223.255.255.255", "224.0.0.0 - 239.255.255.255"],
                    answer: "192.0.0.0 - 223.255.255.255"
                },

                {
                    question: "A network is experiencing slow speeds — first step?",
                    options: ["Replace all cables", "Check bandwidth usage", "Restart all devices", "Change ISP"],
                    answer: "Check bandwidth usage"
                },
                {
                    question: "A server is unreachable — what’s your first check?",
                    options: ["Replace router", "Ping the server", "Call ISP", "Restart client PC"],
                    answer: "Ping the server"
                },
                {
                    question: "You suspect a DNS issue — what command do you use?",
                    options: ["ping", "nslookup", "ipconfig", "netstat"],
                    answer: "nslookup"
                },
                {
                    question: "A user can access local network but not the internet — possible cause?",
                    options: ["Incorrect DNS settings", "Faulty RAM", "Power outage", "Monitor issue"],
                    answer: "Incorrect DNS settings"
                },
                {
                    question: "Network cables are damaged — what’s the effect?",
                    options: ["Slow or no connectivity", "High CPU usage", "Faster connection", "Better Wi-Fi"],
                    answer: "Slow or no connectivity"
                },
                {
                    question: "VPN connection keeps dropping — what’s your first step?",
                    options: ["Restart ISP router", "Check internet stability", "Replace firewall", "Reinstall OS"],
                    answer: "Check internet stability"
                },
                {
                    question: "Switch ports are full — what to do?",
                    options: ["Buy a bigger switch", "Disable ports", "Restart switch", "Use Wi-Fi"],
                    answer: "Buy a bigger switch"
                },
                {
                    question: "You need to check all active TCP connections — which command?",
                    options: ["ping", "netstat", "ipconfig", "tracert"],
                    answer: "netstat"
                },
                {
                    question: "Wireless signal is weak — what’s a quick fix?",
                    options: ["Move closer to access point", "Change ISP", "Replace mouse", "Upgrade RAM"],
                    answer: "Move closer to access point"
                },
                {
                    question: "A router firmware is outdated — your action?",
                    options: ["Update firmware", "Ignore it", "Unplug router", "Change cables"],
                    answer: "Update firmware"
                },

                {
                    question: "You’re given unclear network requirements — what’s your step?",
                    options: ["Guess", "Ask clarifying questions", "Start setup immediately", "Ignore"],
                    answer: "Ask clarifying questions"
                },
                {
                    question: "How do you respond to feedback from colleagues?",
                    options: ["Argue", "Listen and improve", "Ignore", "Quit"],
                    answer: "Listen and improve"
                },
                {
                    question: "A team member struggles with a task — what’s your approach?",
                    options: ["Offer help", "Ignore", "Complain", "Replace them"],
                    answer: "Offer help"
                },
                {
                    question: "You need to explain network issues to non-technical staff — best approach?",
                    options: ["Use simple analogies", "Show OSI diagrams", "Use jargon", "Ignore"],
                    answer: "Use simple analogies"
                },
                {
                    question: "How do you stay updated with new networking tech?",
                    options: ["Attend trainings and read documentation", "Ignore changes", "Use only old methods", "Wait for others"],
                    answer: "Attend trainings and read documentation"
                },
                {
                    question: "Your team works remotely — how do you coordinate?",
                    options: ["Regular communication", "Ignore updates", "Only talk in emergencies", "Work solo"],
                    answer: "Regular communication"
                },
                {
                    question: "Manager assigns too much work — what do you do?",
                    options: ["Discuss priorities", "Quit", "Ignore deadlines", "Outsource secretly"],
                    answer: "Discuss priorities"
                },
                {
                    question: "You feel overwhelmed — what’s best?",
                    options: ["Manage time and take breaks", "Panic", "Avoid work", "Work endlessly"],
                    answer: "Manage time and take breaks"
                },
                {
                    question: "You detect a possible network security threat — what do you do?",
                    options: ["Report and mitigate immediately", "Ignore it", "Wait until it happens", "Handle secretly"],
                    answer: "Report and mitigate immediately"
                },
                {
                    question: "A client appreciates your work — best response?",
                    options: ["Thank them professionally", "Ignore", "Ask for a raise immediately", "Post on social media only"],
                    answer: "Thank them professionally"
                },

                {
                    question: "What does VLAN stand for?",
                    options: ["Virtual Local Area Network", "Variable LAN", "Virtual Loop Access Network", "Verified LAN"],
                    answer: "Virtual Local Area Network"
                },
                {
                    question: "Which protocol is used to synchronize time in a network?",
                    options: ["NTP", "FTP", "SMTP", "SNMP"],
                    answer: "NTP"
                },
                {
                    question: "Which tool monitors network traffic in real time?",
                    options: ["Wireshark", "Notepad", "Excel", "Word"],
                    answer: "Wireshark"
                },
                {
                    question: "Which wireless security protocol is most secure?",
                    options: ["WEP", "WPA", "WPA2", "None"],
                    answer: "WPA2"
                },
                {
                    question: "Why is network security important?",
                    options: ["To protect data and systems from threats", "To slow down connections", "To block internet", "To make networks expensive"],
                    answer: "To protect data and systems from threats"
                }
            ],
        "Data Scientist":
            [
                {
                    question: "Which of the following is NOT a supervised learning algorithm?",
                    options: ["Linear Regression", "Decision Tree", "K-Means", "Logistic Regression"],
                    answer: "K-Means"
                },
                {
                    question: "Which Python library is mainly used for data manipulation?",
                    options: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
                    answer: "Pandas"
                },
                {
                    question: "What is the purpose of train-test split?",
                    options: ["To reduce data size", "To evaluate model performance", "To clean data", "To visualize data"],
                    answer: "To evaluate model performance"
                },
                {
                    question: "Which metric is used for regression evaluation?",
                    options: ["Accuracy", "Mean Squared Error", "F1 Score", "ROC-AUC"],
                    answer: "Mean Squared Error"
                },
                {
                    question: "Which metric is used for classification evaluation?",
                    options: ["Accuracy", "Variance", "Mean", "Median"],
                    answer: "Accuracy"
                },
                {
                    question: "Which technique reduces dimensionality?",
                    options: ["PCA", "Linear Regression", "KNN", "Decision Tree"],
                    answer: "PCA"
                },
                {
                    question: "Which library is used for machine learning models in Python?",
                    options: ["Scikit-learn", "Matplotlib", "Pandas", "Seaborn"],
                    answer: "Scikit-learn"
                },
                {
                    question: "What is overfitting?",
                    options: ["Model performs poorly on training data", "Model performs well on training but poorly on test data", "Data is missing", "Data is too large"],
                    answer: "Model performs well on training but poorly on test data"
                },
                {
                    question: "Which plot shows distribution of a single variable?",
                    options: ["Histogram", "Scatter plot", "Line plot", "Box plot"],
                    answer: "Histogram"
                },
                {
                    question: "Which algorithm is used for clustering?",
                    options: ["K-Means", "Linear Regression", "Logistic Regression", "Decision Tree"],
                    answer: "K-Means"
                },
                {
                    question: "Which technique handles missing values?",
                    options: ["Imputation", "Clustering", "PCA", "Normalization"],
                    answer: "Imputation"
                },
                {
                    question: "Which method scales data to a range?",
                    options: ["Normalization", "Encoding", "Regression", "Classification"],
                    answer: "Normalization"
                },
                {
                    question: "Which plot shows relationship between two variables?",
                    options: ["Scatter plot", "Histogram", "Bar chart", "Pie chart"],
                    answer: "Scatter plot"
                },
                {
                    question: "Which library is used for data visualization in Python?",
                    options: ["Matplotlib", "NumPy", "Scikit-learn", "Pandas"],
                    answer: "Matplotlib"
                },
                {
                    question: "Which algorithm is used for text classification?",
                    options: ["Naive Bayes", "K-Means", "PCA", "Linear Regression"],
                    answer: "Naive Bayes"
                },

                {
                    question: "Your model accuracy is low — first step?",
                    options: ["Check data quality", "Change algorithm randomly", "Delete features", "Increase iterations"],
                    answer: "Check data quality"
                },
                {
                    question: "You encounter class imbalance — solution?",
                    options: ["Resampling techniques", "Ignore it", "Drop dataset", "Increase learning rate"],
                    answer: "Resampling techniques"
                },
                {
                    question: "Data contains outliers — what’s your step?",
                    options: ["Detect and handle outliers", "Ignore them", "Double data size", "Change labels"],
                    answer: "Detect and handle outliers"
                },
                {
                    question: "Feature correlation is high — what to do?",
                    options: ["Remove redundant features", "Add more features", "Ignore it", "Change labels"],
                    answer: "Remove redundant features"
                },
                {
                    question: "Model takes long to train — solution?",
                    options: ["Reduce features or use simpler model", "Use more epochs blindly", "Delete test set", "Add noise"],
                    answer: "Reduce features or use simpler model"
                },
                {
                    question: "Validation score drops — what’s likely?",
                    options: ["Overfitting", "Underfitting", "Good model", "Large dataset"],
                    answer: "Overfitting"
                },
                {
                    question: "New dataset comes in — what to do?",
                    options: ["Retrain model or update incrementally", "Ignore data", "Delete old data", "Normalize labels"],
                    answer: "Retrain model or update incrementally"
                },
                {
                    question: "You detect multicollinearity — what to do?",
                    options: ["Remove correlated features", "Add features", "Ignore it", "Normalize data"],
                    answer: "Remove correlated features"
                },
                {
                    question: "Test accuracy is high but training accuracy low — issue?",
                    options: ["Underfitting", "Overfitting", "Class imbalance", "Data missing"],
                    answer: "Underfitting"
                },
                {
                    question: "You need to explain model predictions — method?",
                    options: ["SHAP/LIME", "Clustering", "PCA", "Normalization"],
                    answer: "SHAP/LIME"
                },

                {
                    question: "Unclear data requirements — your step?",
                    options: ["Ask clarifying questions", "Guess and proceed", "Start model training", "Ignore"],
                    answer: "Ask clarifying questions"
                },
                {
                    question: "How do you handle feedback in analysis?",
                    options: ["Listen and learn", "Ignore", "Argue", "Quit"],
                    answer: "Listen and learn"
                },
                {
                    question: "Team member struggles with analysis — what to do?",
                    options: ["Offer help", "Take over completely", "Ignore", "Complain"],
                    answer: "Offer help"
                },
                {
                    question: "Explain technical results to non-technical team — approach?",
                    options: ["Use simple analogies", "Show all formulas", "Use jargon", "Ignore"],
                    answer: "Use simple analogies"
                },
                {
                    question: "How to keep updated with new ML techniques?",
                    options: ["Read papers, take courses, experiment", "Ignore updates", "Use only old methods", "Wait for team"],
                    answer: "Read papers, take courses, experiment"
                },
                {
                    question: "Team is remote — ensure collaboration?",
                    options: ["Regular check-ins and communication", "Ignore messages", "Work solo", "Only chat in emergencies"],
                    answer: "Regular check-ins and communication"
                },
                {
                    question: "Manager assigns too many tasks — what to do?",
                    options: ["Discuss priorities", "Quit", "Ignore deadlines", "Outsource secretly"],
                    answer: "Discuss priorities"
                },
                {
                    question: "Feeling stressed by workload — solution?",
                    options: ["Manage time and take breaks", "Panic", "Work endlessly", "Avoid tasks"],
                    answer: "Manage time and take breaks"
                },
                {
                    question: "Data breach risk detected — what to do?",
                    options: ["Report and mitigate immediately", "Ignore", "Wait", "Handle alone"],
                    answer: "Report and mitigate immediately"
                },
                {
                    question: "Client appreciates analysis — best response?",
                    options: ["Thank them professionally", "Ignore", "Ask for bonus immediately", "Post on social media only"],
                    answer: "Thank them professionally"
                },

                {
                    question: "Which technique prevents overfitting in neural networks?",
                    options: ["Dropout", "PCA", "Normalization", "Encoding"],
                    answer: "Dropout"
                },
                {
                    question: "Which algorithm is used for recommendation systems?",
                    options: ["Collaborative Filtering", "Linear Regression", "Decision Tree", "K-Means"],
                    answer: "Collaborative Filtering"
                },
                {
                    question: "Which type of learning uses rewards?",
                    options: ["Reinforcement Learning", "Supervised Learning", "Unsupervised Learning", "Regression"],
                    answer: "Reinforcement Learning"
                },
                {
                    question: "Which plot is best for categorical comparison?",
                    options: ["Bar chart", "Scatter plot", "Histogram", "Line chart"],
                    answer: "Bar chart"
                },
                {
                    question: "Why is data cleaning important?",
                    options: ["To improve model accuracy", "To slow down training", "To delete data", "To increase dataset size"],
                    answer: "To improve model accuracy"
                }
            ],
        "UI/UX Designer":
            [
                {
                    "question": "Which principle focuses on keeping design elements uniform across an interface?",
                    "options": ["Contrast", "Consistency", "Alignment", "Hierarchy"],
                    "answer": "Consistency"
                },
                {
                    "question": "What is the main goal of UX design?",
                    "options": ["To make interfaces look colorful", "To enhance user satisfaction", "To reduce development cost", "To automate tasks"],
                    "answer": "To enhance user satisfaction"
                },
                {
                    "question": "Which tool is widely used for creating vector-based UI designs?",
                    "options": ["Photoshop", "Figma", "Excel", "Illustrator"],
                    "answer": "Figma"
                },
                {
                    "question": "Which of the following improves accessibility?",
                    "options": ["Low color contrast", "Small fonts", "Alt text for images", "Overloaded layouts"],
                    "answer": "Alt text for images"
                },
                {
                    "question": "Which file format is commonly used for scalable icons in UI design?",
                    "options": ["JPG", "SVG", "PNG", "BMP"],
                    "answer": "SVG"
                },
                {
                    "question": "Which design principle relates to placing related elements close together?",
                    "options": ["Proximity", "Contrast", "Balance", "Alignment"],
                    "answer": "Proximity"
                },
                {
                    "question": "What is the main purpose of a wireframe?",
                    "options": ["To add animations", "To define layout structure", "To code the backend", "To host the site"],
                    "answer": "To define layout structure"
                },
                {
                    "question": "Which color model is primarily used for digital designs?",
                    "options": ["CMYK", "RGB", "HSB", "Pantone"],
                    "answer": "RGB"
                },
                {
                    "question": "The 'F-pattern' in design refers to:",
                    "options": ["User reading behavior", "Form alignment", "Font styling", "File format"],
                    "answer": "User reading behavior"
                },
                {
                    "question": "Which usability principle focuses on giving users clear information on system status?",
                    "options": ["User control", "Error prevention", "Visibility of system status", "Consistency"],
                    "answer": "Visibility of system status"
                }
            ],

        "Cybersecurity Analyst": [
            {
                "question": "Which of the following is a primary goal of cybersecurity?",
                "options": ["Confidentiality, Integrity, Availability", "Speed, Cost, Performance", "Encryption, Compression, Optimization", "Detection, Prevention, Recovery"],
                "answer": "Confidentiality, Integrity, Availability"
            },
            {
                "question": "What is the main purpose of a firewall?",
                "options": ["To block spam emails", "To prevent unauthorized access to or from a network", "To encrypt files", "To manage bandwidth usage"],
                "answer": "To prevent unauthorized access to or from a network"
            },
            {
                "question": "Which attack involves overwhelming a system with traffic to make it unavailable?",
                "options": ["Phishing", "Man-in-the-middle", "Denial of Service", "SQL Injection"],
                "answer": "Denial of Service"
            },
            {
                "question": "Which protocol is used to securely browse websites?",
                "options": ["HTTP", "FTP", "HTTPS", "SMTP"],
                "answer": "HTTPS"
            },
            {
                "question": "Which type of malware restricts access to files until a ransom is paid?",
                "options": ["Spyware", "Ransomware", "Adware", "Trojan Horse"],
                "answer": "Ransomware"
            },
            {
                "question": "What is two-factor authentication (2FA)?",
                "options": ["Using two passwords", "A security process requiring two types of verification", "Changing your password twice a month", "Using the same password for two accounts"],
                "answer": "A security process requiring two types of verification"
            },
            {
                "question": "Which tool is commonly used for network packet analysis?",
                "options": ["Wireshark", "Photoshop", "Excel", "Git"],
                "answer": "Wireshark"
            },
            {
                "question": "In cybersecurity, what does 'phishing' mean?",
                "options": ["Stealing passwords by hacking servers", "Tricking users into revealing sensitive information", "Encrypting data for security", "Scanning a network for vulnerabilities"],
                "answer": "Tricking users into revealing sensitive information"
            },
            {
                "question": "Which of the following is an example of social engineering?",
                "options": ["Brute-force attack", "Sending fake emails to obtain information", "SQL injection", "DoS attack"],
                "answer": "Sending fake emails to obtain information"
            },
            {
                "question": "What does VPN stand for?",
                "options": ["Virtual Protected Node", "Very Private Network", "Virtual Private Network", "Verified Public Network"],
                "answer": "Virtual Private Network"
            },
            {
                "question": "Which security principle ensures that data is not altered during transmission?",
                "options": ["Availability", "Integrity", "Confidentiality", "Authentication"],
                "answer": "Integrity"
            },
            {
                "question": "Which is a strong password example?",
                "options": ["password123", "John1990", "Q$8r!T2@Lm", "abc123"],
                "answer": "Q$8r!T2@Lm"
            },
            {
                "question": "Which type of attack exploits vulnerabilities in web applications to inject malicious SQL code?",
                "options": ["Cross-site scripting", "SQL Injection", "Phishing", "DoS"],
                "answer": "SQL Injection"
            },
            {
                "question": "What is the purpose of encryption?",
                "options": ["To speed up data transfer", "To prevent data loss", "To protect data confidentiality", "To compress data"],
                "answer": "To protect data confidentiality"
            },
            {
                "question": "Which of the following is NOT a type of malware?",
                "options": ["Worm", "Trojan", "Firewall", "Spyware"],
                "answer": "Firewall"
            },
            {
                "question": "What is penetration testing?",
                "options": ["A way to repair broken systems", "A security test that simulates an attack", "An automated backup process", "A type of antivirus scan"],
                "answer": "A security test that simulates an attack"
            },
            {
                "question": "Which term refers to secretly monitoring a user's computer activity?",
                "options": ["Spyware", "Trojan Horse", "Phishing", "Adware"],
                "answer": "Spyware"
            },
            {
                "question": "Which standard is used for wireless security?",
                "options": ["WPA2", "HTTPS", "SSL", "TLS"],
                "answer": "WPA2"
            },
            {
                "question": "What is the first step in incident response?",
                "options": ["Eradication", "Containment", "Preparation", "Recovery"],
                "answer": "Preparation"
            },
            {
                "question": "What does 'zero-day' refer to?",
                "options": ["A software license", "An unpatched software vulnerability", "A backup schedule", "A network protocol"],
                "answer": "An unpatched software vulnerability"
            },
            {
                "question": "Which device is used to detect and alert about network intrusions?",
                "options": ["Firewall", "Intrusion Detection System", "Router", "Switch"],
                "answer": "Intrusion Detection System"
            },
            {
                "question": "Which is the safest way to store passwords?",
                "options": ["Plain text file", "Password manager", "Browser autofill", "Emailing to yourself"],
                "answer": "Password manager"
            },
            {
                "question": "What is the purpose of hashing in cybersecurity?",
                "options": ["Encrypt files", "Verify data integrity", "Speed up internet", "Reduce file size"],
                "answer": "Verify data integrity"
            },
            {
                "question": "What is the term for pretending to be someone else online to steal information?",
                "options": ["Spoofing", "Sniffing", "Phishing", "Spamming"],
                "answer": "Spoofing"
            },
            {
                "question": "Which of the following is NOT a common cyber threat?",
                "options": ["Phishing", "Malware", "DDoS", "Compiler"],
                "answer": "Compiler"
            },
            {
                "question": "Which framework is widely used for cybersecurity in organizations?",
                "options": ["NIST", "ISO 9001", "Agile", "ITIL"],
                "answer": "NIST"
            },
            {
                "question": "What is the main function of an antivirus program?",
                "options": ["To backup files", "To scan and remove malicious software", "To encrypt network traffic", "To speed up a computer"],
                "answer": "To scan and remove malicious software"
            },
            {
                "question": "Which protocol is used for secure file transfer?",
                "options": ["FTP", "SFTP", "SMTP", "POP3"],
                "answer": "SFTP"
            },
            {
                "question": "What is multi-factor authentication?",
                "options": ["Using a password twice", "Using multiple methods to verify identity", "Logging in from multiple devices", "Changing passwords often"],
                "answer": "Using multiple methods to verify identity"
            },
            {
                "question": "Which security attack involves injecting scripts into web pages?",
                "options": ["XSS", "SQL Injection", "Phishing", "Brute Force"],
                "answer": "XSS"
            },
            {
                "question": "Which type of malware disguises itself as legitimate software?",
                "options": ["Trojan Horse", "Worm", "Spyware", "Ransomware"],
                "answer": "Trojan Horse"
            },
            {
                "question": "Which cybersecurity concept involves granting users only the access they need?",
                "options": ["Privilege escalation", "Least privilege", "Access denial", "Full access"],
                "answer": "Least privilege"
            },
            {
                "question": "Which log is crucial for investigating security incidents?",
                "options": ["System log", "Event log", "Transaction log", "All of the above"],
                "answer": "All of the above"
            },
            {
                "question": "What is social engineering primarily based on?",
                "options": ["Technical vulnerabilities", "Human psychology", "Network protocols", "Encryption flaws"],
                "answer": "Human psychology"
            },
            {
                "question": "Which of these is a common phishing indicator?",
                "options": ["Typos in the email", "Official company logos", "Secure HTTPS link", "Professional language"],
                "answer": "Typos in the email"
            },
            {
                "question": "Which port is commonly used for HTTPS?",
                "options": ["21", "25", "80", "443"],
                "answer": "443"
            },
            {
                "question": "What does IDS stand for?",
                "options": ["Internet Data Service", "Intrusion Detection System", "Internal Defense System", "Information Data Security"],
                "answer": "Intrusion Detection System"
            },
            {
                "question": "Which of the following is a brute-force attack?",
                "options": ["Trying all possible passwords until one works", "Injecting code into a database", "Sending mass emails", "Overloading a server"],
                "answer": "Trying all possible passwords until one works"
            }, {
                "question": "Which attack involves overwhelming a system with traffic to make it unavailable?",
                "options": ["SQL Injection", "Phishing", "DDoS", "Brute Force"],
                "answer": "DDoS"
            },
            {
                "question": "Which of the following is an example of malware?",
                "options": ["Firewall", "Trojan", "Router", "Proxy"],
                "answer": "Trojan"
            },
            {
                "question": "Which encryption method uses the same key for encryption and decryption?",
                "options": ["Asymmetric", "Public Key", "Symmetric", "Hashing"],
                "answer": "Symmetric"
            },
            {
                "question": "What does the CIA triad stand for in cybersecurity?",
                "options": ["Confidentiality, Integrity, Availability", "Control, Integrity, Access", "Confidentiality, Identification, Authorization", "Control, Identification, Accuracy"],
                "answer": "Confidentiality, Integrity, Availability"
            },
            {
                "question": "Phishing attacks primarily target:",
                "options": ["Passwords and sensitive information", "Software bugs", "Server hardware", "Network speed"],
                "answer": "Passwords and sensitive information"
            },
            {
                "question": "What is the main purpose of penetration testing?",
                "options": ["To detect network latency", "To find vulnerabilities before attackers do", "To upgrade system hardware", "To improve software design"],
                "answer": "To find vulnerabilities before attackers do"
            },
            {
                "question": "Which protocol is used to securely browse websites?",
                "options": ["HTTP", "HTTPS", "FTP", "SMTP"],
                "answer": "HTTPS"
            },
            {
                "question": "Which tool is used for network packet analysis?",
                "options": ["Wireshark", "Photoshop", "Blender", "Excel"],
                "answer": "Wireshark"
            },
            {
                "question": "Ransomware is a type of malware that:",
                "options": ["Steals data silently", "Demands payment to restore access", "Deletes files immediately", "Monitors user activity"],
                "answer": "Demands payment to restore access"
            },
            {
                "question": "What does 2FA stand for?",
                "options": ["Two-Factor Authentication", "Two-Firewall Access", "Two-Frequency Analysis", "Two-File Authorization"],
                "answer": "Two-Factor Authentication"
            },
            {
                "question": "Which type of attack tricks the user into clicking a malicious link?",
                "options": ["Man-in-the-Middle", "Phishing", "Brute Force", "Keylogging"],
                "answer": "Phishing"
            },
            {
                "question": "What is the purpose of a honeypot in cybersecurity?",
                "options": ["To store backup files", "To attract attackers and study their behavior", "To increase internet speed", "To encrypt user data"],
                "answer": "To attract attackers and study their behavior"
            },
            {
                "question": "Which of the following is a hashing algorithm?",
                "options": ["AES", "RSA", "SHA-256", "DES"],
                "answer": "SHA-256"
            },
            {
                "question": "What is social engineering?",
                "options": ["Manipulating people to give up confidential information", "Using software to crack passwords", "Encrypting data", "Analyzing network traffic"],
                "answer": "Manipulating people to give up confidential information"
            },
            {
                "question": "Which security model focuses on data classification levels?",
                "options": ["Bell-LaPadula", "Agile", "Waterfall", "Scrum"],
                "answer": "Bell-LaPadula"
            },
            {
                "question": "What is the first step in incident response?",
                "options": ["Eradication", "Containment", "Identification", "Recovery"],
                "answer": "Identification"
            },
            {
                "question": "Which of these is a common wireless security protocol?",
                "options": ["WPA2", "FTP", "SMTP", "POP3"],
                "answer": "WPA2"
            },
            {
                "question": "Brute force attacks involve:",
                "options": ["Guessing all possible passwords", "Intercepting network traffic", "Injecting SQL commands", "Spoofing emails"],
                "answer": "Guessing all possible passwords"
            },
            {
                "question": "What does VPN stand for?",
                "options": ["Virtual Private Network", "Variable Process Node", "Verified Protocol Network", "Virtual Processing Net"],
                "answer": "Virtual Private Network"
            },
            {
                "question": "Which file type is most likely to contain a macro virus?",
                "options": [".exe", ".docm", ".jpg", ".mp4"],
                "answer": ".docm"
            },
            {
                "question": "What is zero-day vulnerability?",
                "options": ["A known bug with no fix", "A flaw discovered by attackers before vendors know about it", "A flaw that appears after a system update", "A hardware failure"],
                "answer": "A flaw discovered by attackers before vendors know about it"
            },
            {
                "question": "Which of these attacks involves injecting code into a website?",
                "options": ["Cross-Site Scripting", "Phishing", "Ransomware", "DDoS"],
                "answer": "Cross-Site Scripting"
            },
            {
                "question": "Which is the safest password?",
                "options": ["password123", "qwerty", "Tr0ub4dor&3", "abc123"],
                "answer": "Tr0ub4dor&3"
            },
            {
                "question": "What is the main function of an IDS?",
                "options": ["Detect intrusions", "Encrypt data", "Store logs", "Backup files"],
                "answer": "Detect intrusions"
            },
            {
                "question": "Which type of malware disguises itself as legitimate software?",
                "options": ["Worm", "Trojan", "Rootkit", "Adware"],
                "answer": "Trojan"
            },
            {
                "question": "What does SQL injection target?",
                "options": ["Databases", "Web servers", "Email servers", "Firewalls"],
                "answer": "Databases"
            },
            {
                "question": "Which standard is used for securing credit card transactions online?",
                "options": ["PCI DSS", "ISO 27001", "GDPR", "HIPAA"],
                "answer": "PCI DSS"
            },
            {
                "question": "What is the main goal of data encryption?",
                "options": ["Increase storage space", "Prevent unauthorized access", "Speed up transmission", "Backup files"],
                "answer": "Prevent unauthorized access"
            },
            {
                "question": "Which cybersecurity framework is widely used in the U.S.?",
                "options": ["NIST", "Scrum", "Agile", "TOGAF"],
                "answer": "NIST"
            },
            {
                "question": "What is the purpose of multi-factor authentication?",
                "options": ["Require more than one verification method", "Speed up login", "Encrypt data", "Detect malware"],
                "answer": "Require more than one verification method"
            },
            {
                "question": "Which term refers to disguising communication to look legitimate?",
                "options": ["Spoofing", "Sniffing", "Phishing", "Flooding"],
                "answer": "Spoofing"
            },
            {
                "question": "A rootkit is designed to:",
                "options": ["Gain unauthorized root access and hide its presence", "Increase CPU speed", "Delete old files", "Monitor internet speed"],
                "answer": "Gain unauthorized root access and hide its presence"
            },
            {
                "question": "What does GDPR regulate?",
                "options": ["Data privacy in the EU", "Network security in the U.S.", "Payment processing worldwide", "Software licensing"],
                "answer": "Data privacy in the EU"
            },
            {
                "question": "What is a digital certificate used for?",
                "options": ["To prove ownership of a public key", "To store passwords", "To back up data", "To increase speed"],
                "answer": "To prove ownership of a public key"
            },
            {
                "question": "Which port does HTTPS use by default?",
                "options": ["443", "80", "25", "21"],
                "answer": "443"
            },
            {
                "question": "What is the difference between IDS and IPS?",
                "options": ["IDS detects attacks, IPS prevents them", "IDS encrypts data, IPS decrypts it", "IDS is hardware, IPS is software", "IDS stores logs, IPS deletes them"],
                "answer": "IDS detects attacks, IPS prevents them"
            },
            {
                "question": "What is an air gap in cybersecurity?",
                "options": ["A network physically isolated from unsecured networks", "A space in a firewall", "A VPN tunnel", "An unused IP range"],
                "answer": "A network physically isolated from unsecured networks"
            },
            {
                "question": "Which of the following is a biometric authentication method?",
                "options": ["Fingerprint", "Password", "PIN", "Security question"],
                "answer": "Fingerprint"
            },
            {
                "question": "What is the main advantage of using a VPN?",
                "options": ["Faster internet", "Bypassing geographic restrictions and securing traffic", "Free access to websites", "No need for antivirus"],
                "answer": "Bypassing geographic restrictions and securing traffic"
            }
        ],
        "DevOps Engineer": [
            {
                "question": "Which of the following best describes DevOps?",
                "options": ["A programming language", "A methodology to combine software development and IT operations", "A database management system", "A testing tool"],
                "answer": "A methodology to combine software development and IT operations"
            },
            {
                "question": "Which tool is commonly used for containerization?",
                "options": ["Jenkins", "Docker", "Git", "Maven"],
                "answer": "Docker"
            },
            {
                "question": "In DevOps, CI stands for:",
                "options": ["Continuous Integration", "Continuous Implementation", "Central Integration", "Continuous Information"],
                "answer": "Continuous Integration"
            },
            {
                "question": "What is the main benefit of Continuous Delivery?",
                "options": ["Faster releases to production", "Slower deployment cycles", "Reduced automation", "Less testing"],
                "answer": "Faster releases to production"
            },
            {
                "question": "Which of the following is a popular CI/CD tool?",
                "options": ["Jenkins", "Photoshop", "MySQL", "Android Studio"],
                "answer": "Jenkins"
            },
            {
                "question": "Git is primarily used for:",
                "options": ["Code compilation", "Version control", "Load testing", "Network monitoring"],
                "answer": "Version control"
            },
            {
                "question": "Which command creates a new Git branch?",
                "options": ["git create branch", "git branch new", "git branch <branch_name>", "git make branch"],
                "answer": "git branch <branch_name>"
            },
            {
                "question": "Which tool is commonly used for infrastructure as code (IaC)?",
                "options": ["Terraform", "Photoshop", "Kubernetes", "Excel"],
                "answer": "Terraform"
            },
            {
                "question": "Kubernetes is mainly used for:",
                "options": ["Container orchestration", "Database backups", "Code compilation", "Network security"],
                "answer": "Container orchestration"
            },
            {
                "question": "YAML is most commonly used in DevOps for:",
                "options": ["Writing unit tests", "Configuration files", "Data encryption", "User authentication"],
                "answer": "Configuration files"
            },
            {
                "question": "Which AWS service is used for CI/CD pipelines?",
                "options": ["AWS EC2", "AWS CodePipeline", "AWS S3", "AWS Lambda"],
                "answer": "AWS CodePipeline"
            },
            {
                "question": "Which of the following is an example of a monitoring tool?",
                "options": ["Nagios", "GitHub", "Terraform", "Ansible"],
                "answer": "Nagios"
            },
            {
                "question": "The main goal of DevOps is to:",
                "options": ["Increase software development time", "Improve collaboration between development and operations teams", "Reduce automation in deployment", "Eliminate all testing"],
                "answer": "Improve collaboration between development and operations teams"
            },
            {
                "question": "Which of the following is NOT a DevOps tool?",
                "options": ["Ansible", "Jenkins", "Docker", "Microsoft Word"],
                "answer": "Microsoft Word"
            },
            {
                "question": "Which is a container orchestration platform?",
                "options": ["Docker Compose", "Kubernetes", "GitLab", "Jenkins"],
                "answer": "Kubernetes"
            },
            {
                "question": "Which command is used to clone a Git repository?",
                "options": ["git copy", "git clone", "git pull", "git fork"],
                "answer": "git clone"
            },
            {
                "question": "Blue-Green Deployment is used to:",
                "options": ["Reduce downtime during deployment", "Speed up compilation", "Create multiple test cases", "Encrypt source code"],
                "answer": "Reduce downtime during deployment"
            },
            {
                "question": "Which of the following is an IaC tool?",
                "options": ["Jenkins", "Ansible", "Excel", "Photoshop"],
                "answer": "Ansible"
            },
            {
                "question": "In DevOps, CD stands for:",
                "options": ["Continuous Deployment / Continuous Delivery", "Centralized Development", "Code Distribution", "Continuous Debugging"],
                "answer": "Continuous Deployment / Continuous Delivery"
            },
            {
                "question": "Which is NOT a CI/CD tool?",
                "options": ["Travis CI", "GitLab CI", "CircleCI", "Microsoft Paint"],
                "answer": "Microsoft Paint"
            },
            {
                "question": "What does “pipeline” mean in DevOps?",
                "options": ["A water flow system", "Automated process for building, testing, and deploying code", "Database schema", "A network cable"],
                "answer": "Automated process for building, testing, and deploying code"
            },
            {
                "question": "Which type of testing is most automated in DevOps?",
                "options": ["Unit testing", "Manual testing", "Exploratory testing", "Acceptance testing"],
                "answer": "Unit testing"
            },
            {
                "question": "Which tool is used for log management in DevOps?",
                "options": ["ELK Stack", "Photoshop", "Kubernetes", "Terraform"],
                "answer": "ELK Stack"
            },
            {
                "question": "Which cloud platform is widely used in DevOps?",
                "options": ["AWS", "MS Excel", "Photoshop", "Windows Media Player"],
                "answer": "AWS"
            },
            {
                "question": "Infrastructure as Code (IaC) helps to:",
                "options": ["Automate infrastructure provisioning", "Manually configure servers", "Increase typing speed", "Encrypt files"],
                "answer": "Automate infrastructure provisioning"
            },
            {
                "question": "Which of the following is a configuration management tool?",
                "options": ["Chef", "Docker", "Git", "Jenkins"],
                "answer": "Chef"
            },
            {
                "question": "Which command shows the status of a Git repository?",
                "options": ["git status", "git show", "git log", "git branch"],
                "answer": "git status"
            },
            {
                "question": "Continuous Monitoring ensures:",
                "options": ["Issues are detected quickly in production", "Faster coding", "More manual testing", "Less logging"],
                "answer": "Issues are detected quickly in production"
            },
            {
                "question": "Canary deployment is:",
                "options": ["Gradual release to a small subset of users", "Full deployment to all users", "Backup deployment", "Rollback strategy"],
                "answer": "Gradual release to a small subset of users"
            },
            {
                "question": "Which scripting language is commonly used in DevOps?",
                "options": ["Python", "HTML", "CSS", "Photoshop scripting"],
                "answer": "Python"
            },
            {
                "question": "What is the main benefit of containerization?",
                "options": ["Environment consistency across platforms", "Slower deployment", "More hardware required", "No automation"],
                "answer": "Environment consistency across platforms"
            },
            {
                "question": "Which tool automates software build and deployment?",
                "options": ["Jenkins", "Photoshop", "Excel", "Notepad"],
                "answer": "Jenkins"
            },
            {
                "question": "Git pull command is used to:",
                "options": ["Update local repo from remote", "Delete a repository", "Create a new branch", "Merge two repos offline"],
                "answer": "Update local repo from remote"
            },
            {
                "question": "Which orchestration tool manages multiple Docker containers?",
                "options": ["Kubernetes", "Chef", "Git", "Terraform"],
                "answer": "Kubernetes"
            },
            {
                "question": "What is the purpose of load balancing in DevOps?",
                "options": ["Distribute traffic to servers", "Encrypt data", "Compile code", "Monitor logs"],
                "answer": "Distribute traffic to servers"
            },
            {
                "question": "Which tool is used for automated testing?",
                "options": ["Selenium", "Photoshop", "Excel", "Docker"],
                "answer": "Selenium"
            },
            {
                "question": "Infrastructure testing ensures:",
                "options": ["Servers and configurations work correctly", "Code styling is proper", "Manual writing is done", "Encryption keys are ignored"],
                "answer": "Servers and configurations work correctly"
            },
            {
                "question": "Which DevOps practice reduces deployment risk?",
                "options": ["Incremental or staged deployment", "Full deployment without testing", "Manual server changes", "Ignoring monitoring"],
                "answer": "Incremental or staged deployment"
            },
            {
                "question": "Rollback strategy in deployment is used to:",
                "options": ["Revert to previous stable version", "Deploy faster", "Test code manually", "Encrypt data"],
                "answer": "Revert to previous stable version"
            }
        ],
        "Machine Learning Engineer": [
            {
                "question": "Which of the following is NOT a supervised learning algorithm?",
                "options": ["Linear Regression", "Decision Tree", "K-Means", "Logistic Regression"],
                "answer": "K-Means"
            },
            {
                "question": "Which Python library is mainly used for data manipulation?",
                "options": ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
                "answer": "Pandas"
            },
            {
                "question": "What is the purpose of train-test split?",
                "options": ["To reduce data size", "To evaluate model performance", "To clean data", "To visualize data"],
                "answer": "To evaluate model performance"
            },
            {
                "question": "Which metric is used for regression evaluation?",
                "options": ["Accuracy", "Mean Squared Error", "F1 Score", "ROC-AUC"],
                "answer": "Mean Squared Error"
            },
            {
                "question": "Which metric is used for classification evaluation?",
                "options": ["Accuracy", "Variance", "Mean", "Median"],
                "answer": "Accuracy"
            },
            {
                "question": "Which technique reduces dimensionality?",
                "options": ["PCA", "Linear Regression", "KNN", "Decision Tree"],
                "answer": "PCA"
            },
            {
                "question": "Which library is used for machine learning models in Python?",
                "options": ["Scikit-learn", "Matplotlib", "Pandas", "Seaborn"],
                "answer": "Scikit-learn"
            },
            {
                "question": "What is overfitting?",
                "options": ["Model performs poorly on training data", "Model performs well on training but poorly on test data", "Data is missing", "Data is too large"],
                "answer": "Model performs well on training but poorly on test data"
            },
            {
                "question": "Which plot shows distribution of a single variable?",
                "options": ["Histogram", "Scatter plot", "Line plot", "Box plot"],
                "answer": "Histogram"
            },
            {
                "question": "Which algorithm is used for clustering?",
                "options": ["K-Means", "Linear Regression", "Logistic Regression", "Decision Tree"],
                "answer": "K-Means"
            },
            {
                "question": "Which technique handles missing values?",
                "options": ["Imputation", "Clustering", "PCA", "Normalization"],
                "answer": "Imputation"
            },
            {
                "question": "Which method scales data to a range?",
                "options": ["Normalization", "Encoding", "Regression", "Classification"],
                "answer": "Normalization"
            },
            {
                "question": "Which plot shows relationship between two variables?",
                "options": ["Scatter plot", "Histogram", "Bar chart", "Pie chart"],
                "answer": "Scatter plot"
            },
            {
                "question": "Which library is used for data visualization in Python?",
                "options": ["Matplotlib", "NumPy", "Scikit-learn", "Pandas"],
                "answer": "Matplotlib"
            },
            {
                "question": "Which algorithm is used for text classification?",
                "options": ["Naive Bayes", "K-Means", "PCA", "Linear Regression"],
                "answer": "Naive Bayes"
            },
            {
                "question": "Your model accuracy is low — first step?",
                "options": ["Check data quality", "Change algorithm randomly", "Delete features", "Increase iterations"],
                "answer": "Check data quality"
            },
            {
                "question": "You encounter class imbalance — solution?",
                "options": ["Resampling techniques", "Ignore it", "Drop dataset", "Increase learning rate"],
                "answer": "Resampling techniques"
            },
            {
                "question": "Data contains outliers — what’s your step?",
                "options": ["Detect and handle outliers", "Ignore them", "Double data size", "Change labels"],
                "answer": "Detect and handle outliers"
            },
            {
                "question": "Feature correlation is high — what to do?",
                "options": ["Remove redundant features", "Add more features", "Ignore it", "Change labels"],
                "answer": "Remove redundant features"
            },
            {
                "question": "Model takes long to train — solution?",
                "options": ["Reduce features or use simpler model", "Use more epochs blindly", "Delete test set", "Add noise"],
                "answer": "Reduce features or use simpler model"
            },
            {
                "question": "Validation score drops — what’s likely?",
                "options": ["Overfitting", "Underfitting", "Good model", "Large dataset"],
                "answer": "Overfitting"
            },
            {
                "question": "New dataset comes in — what to do?",
                "options": ["Retrain model or update incrementally", "Ignore data", "Delete old data", "Normalize labels"],
                "answer": "Retrain model or update incrementally"
            },
            {
                "question": "You detect multicollinearity — what to do?",
                "options": ["Remove correlated features", "Add features", "Ignore it", "Normalize data"],
                "answer": "Remove correlated features"
            },
            {
                "question": "Test accuracy is high but training accuracy low — issue?",
                "options": ["Underfitting", "Overfitting", "Class imbalance", "Data missing"],
                "answer": "Underfitting"
            },
            {
                "question": "You need to explain model predictions — method?",
                "options": ["SHAP/LIME", "Clustering", "PCA", "Normalization"],
                "answer": "SHAP/LIME"
            },
            {
                "question": "Unclear data requirements — your step?",
                "options": ["Ask clarifying questions", "Guess and proceed", "Start model training", "Ignore"],
                "answer": "Ask clarifying questions"
            },
            {
                "question": "How do you handle feedback in analysis?",
                "options": ["Listen and learn", "Ignore", "Argue", "Quit"],
                "answer": "Listen and learn"
            },
            {
                "question": "Team member struggles with analysis — what to do?",
                "options": ["Offer help", "Take over completely", "Ignore", "Complain"],
                "answer": "Offer help"
            },
            {
                "question": "Explain technical results to non-technical team — approach?",
                "options": ["Use simple analogies", "Show all formulas", "Use jargon", "Ignore"],
                "answer": "Use simple analogies"
            },
            {
                "question": "How to keep updated with new ML techniques?",
                "options": ["Read papers, take courses, experiment", "Ignore updates", "Use only old methods", "Wait for team"],
                "answer": "Read papers, take courses, experiment"
            },
            {
                "question": "Team is remote — ensure collaboration?",
                "options": ["Regular check-ins and communication", "Ignore messages", "Work solo", "Only chat in emergencies"],
                "answer": "Regular check-ins and communication"
            },
            {
                "question": "Manager assigns too many tasks — what to do?",
                "options": ["Discuss priorities", "Quit", "Ignore deadlines", "Outsource secretly"],
                "answer": "Discuss priorities"
            },
            {
                "question": "Feeling stressed by workload — solution?",
                "options": ["Manage time and take breaks", "Panic", "Work endlessly", "Avoid tasks"],
                "answer": "Manage time and take breaks"
            },
            {
                "question": "Data breach risk detected — what to do?",
                "options": ["Report and mitigate immediately", "Ignore", "Wait", "Handle alone"],
                "answer": "Report and mitigate immediately"
            },
            {
                "question": "Client appreciates analysis — best response?",
                "options": ["Thank them professionally", "Ignore", "Ask for bonus immediately", "Post on social media only"],
                "answer": "Thank them professionally"
            },
            {
                "question": "Which technique prevents overfitting in neural networks?",
                "options": ["Dropout", "PCA", "Normalization", "Encoding"],
                "answer": "Dropout"
            },
            {
                "question": "Which algorithm is used for recommendation systems?",
                "options": ["Collaborative Filtering", "Linear Regression", "Decision Tree", "K-Means"],
                "answer": "Collaborative Filtering"
            },
            {
                "question": "Which type of learning uses rewards?",
                "options": ["Reinforcement Learning", "Supervised Learning", "Unsupervised Learning", "Regression"],
                "answer": "Reinforcement Learning"
            },
            {
                "question": "Which plot is best for categorical comparison?",
                "options": ["Bar chart", "Scatter plot", "Histogram", "Line chart"],
                "answer": "Bar chart"
            },
            {
                "question": "Why is data cleaning important?",
                "options": ["To improve model accuracy", "To slow down training", "To delete data", "To increase dataset size"],
                "answer": "To improve model accuracy"
            }
        ],

    },
    "Engineering": {
        "Mechanical Engineer": [
            {
                "question": "Which law states that pressure is transmitted equally in all directions in a fluid?",
                "options": ["Pascal’s Law", "Boyle’s Law", "Charles’s Law", "Newton’s Law"],
                "answer": "Pascal’s Law"
            },
            {
                "question": "Which material has the highest thermal conductivity?",
                "options": ["Copper", "Aluminum", "Steel", "Brass"],
                "answer": "Copper"
            },
            {
                "question": "Which type of stress causes change in volume only?",
                "options": ["Volumetric Stress", "Shear Stress", "Tensile Stress", "Compressive Stress"],
                "answer": "Volumetric Stress"
            },
            {
                "question": "Which of these is a unit of power?",
                "options": ["Watt", "Joule", "Newton", "Pascal"],
                "answer": "Watt"
            },
            {
                "question": "What is the function of a flywheel in an engine?",
                "options": ["Store energy", "Reduce fuel", "Ignite fuel", "Control emissions"],
                "answer": "Store energy"
            },
            {
                "question": "In a stress-strain curve, the point where the material starts to deform plastically is called?",
                "options": ["Yield Point", "Elastic Limit", "Ultimate Stress", "Breaking Point"],
                "answer": "Yield Point"
            },
            {
                "question": "Which process is used to increase the hardness of steel?",
                "options": ["Quenching", "Annealing", "Tempering", "Normalizing"],
                "answer": "Quenching"
            },
            {
                "question": "What type of engine is commonly used in automobiles?",
                "options": ["Internal Combustion Engine", "External Combustion Engine", "Steam Engine", "Gas Turbine"],
                "answer": "Internal Combustion Engine"
            },
            {
                "question": "Which law governs the relationship between pressure and volume of a gas at constant temperature?",
                "options": ["Boyle’s Law", "Charles’s Law", "Pascal’s Law", "Hooke’s Law"],
                "answer": "Boyle’s Law"
            },
            {
                "question": "What does CNC stand for?",
                "options": ["Computer Numerical Control", "Centralized Network Control", "Calculated Numeric Coding", "Control Numbered Circuit"],
                "answer": "Computer Numerical Control"
            },

            {
                "question": "Which component stores kinetic energy in a mechanical system?",
                "options": ["Flywheel", "Pulley", "Gear", "Crankshaft"],
                "answer": "Flywheel"
            },
            {
                "question": "Which thermodynamic cycle is used in diesel engines?",
                "options": ["Diesel Cycle", "Otto Cycle", "Rankine Cycle", "Carnot Cycle"],
                "answer": "Diesel Cycle"
            },
            {
                "question": "In gears, the contact point between the two teeth is called?",
                "options": ["Pitch Point", "Addendum", "Dedendum", "Flank"],
                "answer": "Pitch Point"
            },
            {
                "question": "What is the main purpose of a governor in an engine?",
                "options": ["Control speed", "Increase torque", "Fuel mixing", "Ignition timing"],
                "answer": "Control speed"
            },
            {
                "question": "Which of these is NOT a casting defect?",
                "options": ["Cold shut", "Blowhole", "Shrinkage", "Tempering"],
                "answer": "Tempering"
            },
            {
                "question": "What is the unit of viscosity?",
                "options": ["Pascal-second", "N/m²", "Joule", "Newton"],
                "answer": "Pascal-second"
            },
            {
                "question": "Which of the following is a non-ferrous metal?",
                "options": ["Aluminum", "Cast Iron", "Steel", "Wrought Iron"],
                "answer": "Aluminum"
            },
            {
                "question": "Which tool is used to measure angles?",
                "options": ["Protractor", "Vernier Caliper", "Micrometer", "Feeler Gauge"],
                "answer": "Protractor"
            },
            {
                "question": "Which process removes material to shape a component?",
                "options": ["Milling", "Casting", "Forging", "Welding"],
                "answer": "Milling"
            },
            {
                "question": "Which heat treatment process softens metal?",
                "options": ["Annealing", "Quenching", "Tempering", "Hardening"],
                "answer": "Annealing"
            },

            {
                "question": "Which fluid property resists motion?",
                "options": ["Viscosity", "Density", "Surface Tension", "Specific Gravity"],
                "answer": "Viscosity"
            },
            {
                "question": "Which of the following is a renewable energy source?",
                "options": ["Solar", "Coal", "Diesel", "Natural Gas"],
                "answer": "Solar"
            },
            {
                "question": "Which instrument is used to measure pressure?",
                "options": ["Manometer", "Thermometer", "Tachometer", "Hygrometer"],
                "answer": "Manometer"
            },
            {
                "question": "What does CAD stand for?",
                "options": ["Computer-Aided Design", "Calculated Analysis Design", "Central Architecture Drawing", "Control and Draft"],
                "answer": "Computer-Aided Design"
            },
            {
                "question": "Which law states the relationship between force, mass, and acceleration?",
                "options": ["Newton's Second Law", "Newton’s First Law", "Hooke’s Law", "Pascal’s Law"],
                "answer": "Newton's Second Law"
            },
            {
                "question": "What is the typical efficiency of an IC engine?",
                "options": ["30-35%", "60-70%", "80-90%", "100%"],
                "answer": "30-35%"
            },
            {
                "question": "In a four-stroke engine, how many times does the piston move during one power cycle?",
                "options": ["4", "2", "6", "8"],
                "answer": "4"
            },
            {
                "question": "Which manufacturing process joins two metals using heat?",
                "options": ["Welding", "Casting", "Forging", "Milling"],
                "answer": "Welding"
            },
            {
                "question": "Which gas is used in refrigeration systems?",
                "options": ["Freon", "Oxygen", "Hydrogen", "Carbon Dioxide"],
                "answer": "Freon"
            },
            {
                "question": "What does the Reynolds number indicate?",
                "options": ["Flow type (laminar or turbulent)", "Heat transfer rate", "Friction loss", "Pressure difference"],
                "answer": "Flow type (laminar or turbulent)"
            },

            {
                "question": "Which part transmits power between engine and gearbox?",
                "options": ["Clutch", "Crankshaft", "Flywheel", "Differential"],
                "answer": "Clutch"
            },
            {
                "question": "Which mechanism converts rotary motion into linear motion?",
                "options": ["Cam and Follower", "Gearbox", "Differential", "Crankshaft"],
                "answer": "Cam and Follower"
            },
            {
                "question": "Which is NOT a part of a steam power plant?",
                "options": ["Carburetor", "Boiler", "Turbine", "Condenser"],
                "answer": "Carburetor"
            },
            {
                "question": "Which test checks internal cracks in metal?",
                "options": ["Ultrasonic Testing", "Tensile Testing", "Charpy Test", "Hardness Test"],
                "answer": "Ultrasonic Testing"
            },
            {
                "question": "In mechanical advantage, which device is typically used?",
                "options": ["Lever", "Spring", "Flywheel", "Valve"],
                "answer": "Lever"
            },
            {
                "question": "Which formula represents Hooke’s Law?",
                "options": ["Stress = E × Strain", "F = ma", "PV = nRT", "W = Fd"],
                "answer": "Stress = E × Strain"
            },
            {
                "question": "Which valve controls the amount of fuel-air mixture entering the engine?",
                "options": ["Throttle Valve", "Relief Valve", "Gate Valve", "Ball Valve"],
                "answer": "Throttle Valve"
            },
            {
                "question": "Which metal is used in aircraft structures due to high strength-to-weight ratio?",
                "options": ["Titanium", "Lead", "Iron", "Zinc"],
                "answer": "Titanium"
            },
            {
                "question": "Which software is commonly used for 3D mechanical modeling?",
                "options": ["SolidWorks", "Excel", "Notepad++", "Photoshop"],
                "answer": "SolidWorks"
            },
            {
                "question": "What is the primary cause of mechanical vibrations?",
                "options": ["Unbalanced forces", "Low pressure", "Excess lubrication", "High temperature"],
                "answer": "Unbalanced forces"
            }
        ],
        "Civil Engineer": [
            {
                "question": "What is the standard compressive strength of M20 concrete?",
                "options": ["20 MPa", "25 MPa", "30 MPa", "15 MPa"],
                "answer": "20 MPa"
            },
            {
                "question": "Which test is used to determine the consistency of cement?",
                "options": ["Vicat Test", "Slump Test", "Impact Test", "Soundness Test"],
                "answer": "Vicat Test"
            },
            {
                "question": "What is the function of a retaining wall?",
                "options": ["To retain soil", "To retain water", "To retain air", "To retain concrete"],
                "answer": "To retain soil"
            },
            {
                "question": "Which instrument is used to measure horizontal angles in surveying?",
                "options": ["Theodolite", "Dumpy Level", "Planimeter", "Clinometer"],
                "answer": "Theodolite"
            },
            {
                "question": "Which type of cement is used in underwater construction?",
                "options": ["Quick Setting Cement", "Portland Pozzolana Cement", "Rapid Hardening Cement", "Hydrophobic Cement"],
                "answer": "Quick Setting Cement"
            },
            {
                "question": "Which IS code is used for plain and reinforced concrete?",
                "options": ["IS 456", "IS 800", "IS 875", "IS 1893"],
                "answer": "IS 456"
            },
            {
                "question": "What does the slump test measure?",
                "options": ["Workability", "Strength", "Durability", "Porosity"],
                "answer": "Workability"
            },
            {
                "question": "Which is the most common type of foundation?",
                "options": ["Isolated Footing", "Raft Foundation", "Pile Foundation", "Well Foundation"],
                "answer": "Isolated Footing"
            },
            {
                "question": "Which of the following is a live load?",
                "options": ["Furniture", "Columns", "Walls", "Slabs"],
                "answer": "Furniture"
            },
            {
                "question": "What is the function of admixtures in concrete?",
                "options": ["To modify properties", "To increase weight", "To act as filler", "To increase aggregate content"],
                "answer": "To modify properties"
            },

            {
                "question": "What is the main ingredient in Portland cement?",
                "options": ["Lime", "Alumina", "Silica", "Iron Oxide"],
                "answer": "Lime"
            },
            {
                "question": "Which survey uses aerial photography?",
                "options": ["Photogrammetric Survey", "Topographic Survey", "Cadastral Survey", "Hydrographic Survey"],
                "answer": "Photogrammetric Survey"
            },
            {
                "question": "What does BOD stand for in environmental engineering?",
                "options": ["Biochemical Oxygen Demand", "Biological Oxygen Depletion", "Basic Oxygen Demand", "Bounded Oxygen Drop"],
                "answer": "Biochemical Oxygen Demand"
            },
            {
                "question": "Which structure is used to dissipate energy at dam outlets?",
                "options": ["Stilling Basin", "Check Dam", "Spillway", "Weir"],
                "answer": "Stilling Basin"
            },
            {
                "question": "What is the minimum water-cement ratio for ordinary concrete?",
                "options": ["0.4", "0.5", "0.6", "0.3"],
                "answer": "0.5"
            },
            {
                "question": "Which test determines the hardness of aggregates?",
                "options": ["Los Angeles Abrasion Test", "Impact Test", "Slump Test", "Soundness Test"],
                "answer": "Los Angeles Abrasion Test"
            },
            {
                "question": "Which element is primarily responsible for corrosion in steel?",
                "options": ["Oxygen", "Carbon", "Nitrogen", "Sulphur"],
                "answer": "Oxygen"
            },
            {
                "question": "What is the purpose of a camber in roads?",
                "options": ["Drainage", "Increase friction", "Prevent slipping", "Strengthen base"],
                "answer": "Drainage"
            },
            {
                "question": "Which method is used to purify water in treatment plants?",
                "options": ["Filtration", "Distillation", "Osmosis", "Evaporation"],
                "answer": "Filtration"
            },
            {
                "question": "What is the unit of permeability?",
                "options": ["m/s", "m²", "kg/m³", "N/m²"],
                "answer": "m/s"
            },

            {
                "question": "Which type of brick is best for construction?",
                "options": ["Class A", "Class B", "Class C", "Class D"],
                "answer": "Class A"
            },
            {
                "question": "Which of these is NOT a non-destructive test?",
                "options": ["Tensile Test", "Ultrasonic Test", "Rebound Hammer Test", "Radiography Test"],
                "answer": "Tensile Test"
            },
            {
                "question": "What is the function of a pile foundation?",
                "options": ["Transfer load to deep strata", "Prevent water seepage", "Act as a footing", "Support walls"],
                "answer": "Transfer load to deep strata"
            },
            {
                "question": "What causes efflorescence in bricks?",
                "options": ["Salts", "Cement", "Sand", "Lime"],
                "answer": "Salts"
            },
            {
                "question": "What is the standard height of a floor in residential buildings?",
                "options": ["3 m", "2.5 m", "4 m", "2 m"],
                "answer": "3 m"
            },
            {
                "question": "What is the permissible limit of fluoride in drinking water?",
                "options": ["1.0 mg/L", "2.0 mg/L", "0.5 mg/L", "1.5 mg/L"],
                "answer": "1.0 mg/L"
            },
            {
                "question": "Which fluid property affects the flow in open channels?",
                "options": ["Viscosity", "Density", "Elasticity", "Transparency"],
                "answer": "Viscosity"
            },
            {
                "question": "Which test is used to measure workability of concrete?",
                "options": ["Slump Cone Test", "Compaction Factor Test", "Vee Bee Test", "All of these"],
                "answer": "All of these"
            },
            {
                "question": "Which of the following is a type of beam?",
                "options": ["Cantilever", "Arch", "Column", "Footing"],
                "answer": "Cantilever"
            },
            {
                "question": "What is the function of stirrups in beams?",
                "options": ["Resist shear", "Resist bending", "Support load", "Increase span"],
                "answer": "Resist shear"
            },

            {
                "question": "Which of these is a superplasticizer?",
                "options": ["Sulphonated Melamine", "Gypsum", "Lime", "Silica"],
                "answer": "Sulphonated Melamine"
            },
            {
                "question": "What is the minimum cover for reinforcement in footing?",
                "options": ["50 mm", "25 mm", "40 mm", "20 mm"],
                "answer": "50 mm"
            },
            {
                "question": "Which force acts on retaining walls?",
                "options": ["Lateral Earth Pressure", "Axial Load", "Wind Load", "Torsion"],
                "answer": "Lateral Earth Pressure"
            },
            {
                "question": "Which of the following is a coarse aggregate?",
                "options": ["Gravel", "Sand", "Silt", "Clay"],
                "answer": "Gravel"
            },
            {
                "question": "Which soil has the highest permeability?",
                "options": ["Gravel", "Clay", "Silt", "Loam"],
                "answer": "Gravel"
            },
            {
                "question": "Which test is used for determining the liquid limit of soil?",
                "options": ["Casagrande Test", "Proctor Test", "Pycnometer Test", "Permeability Test"],
                "answer": "Casagrande Test"
            },
            {
                "question": "Which structure is built across rivers to control flow?",
                "options": ["Weir", "Dam", "Aqueduct", "Retaining Wall"],
                "answer": "Dam"
            },
            {
                "question": "What does IS 800 refer to?",
                "options": ["Steel Structures", "Concrete Mix Design", "Seismic Design", "Water Quality"],
                "answer": "Steel Structures"
            },
            {
                "question": "Which survey measures the elevation of land?",
                "options": ["Levelling", "Compass Survey", "Chain Survey", "Tacheometric Survey"],
                "answer": "Levelling"
            },
            {
                "question": "What is the purpose of expansion joints in concrete structures?",
                "options": ["To allow thermal expansion", "To increase load", "To reduce cost", "To increase stiffness"],
                "answer": "To allow thermal expansion"
            }
        ],
        "Electrical Engineer": [
            {
                "question": "What is the unit of electrical resistance?",
                "options": ["Ohm", "Watt", "Volt", "Ampere"],
                "answer": "Ohm"
            },
            {
                "question": "Which device stores electrical energy?",
                "options": ["Capacitor", "Resistor", "Inductor", "Transformer"],
                "answer": "Capacitor"
            },
            {
                "question": "Which law states that the current through a conductor is directly proportional to the voltage?",
                "options": ["Ohm’s Law", "Faraday’s Law", "Kirchhoff’s Law", "Lenz’s Law"],
                "answer": "Ohm’s Law"
            },
            {
                "question": "Which instrument measures electric current?",
                "options": ["Ammeter", "Voltmeter", "Wattmeter", "Galvanometer"],
                "answer": "Ammeter"
            },
            {
                "question": "What is the typical frequency of AC supply in India?",
                "options": ["50 Hz", "60 Hz", "100 Hz", "25 Hz"],
                "answer": "50 Hz"
            },
            {
                "question": "Which component converts AC to DC?",
                "options": ["Rectifier", "Inverter", "Transformer", "Relay"],
                "answer": "Rectifier"
            },
            {
                "question": "Which of the following is a passive component?",
                "options": ["Resistor", "Transistor", "Op-Amp", "Thyristor"],
                "answer": "Resistor"
            },
            {
                "question": "What does LED stand for?",
                "options": ["Light Emitting Diode", "Low Energy Device", "Linear Electric Device", "Light Emission Detector"],
                "answer": "Light Emitting Diode"
            },
            {
                "question": "Which law deals with magnetic fields induced by electric current?",
                "options": ["Ampere’s Law", "Coulomb’s Law", "Ohm’s Law", "Gauss’s Law"],
                "answer": "Ampere’s Law"
            },
            {
                "question": "Which material is commonly used as an electrical conductor?",
                "options": ["Copper", "Plastic", "Glass", "Rubber"],
                "answer": "Copper"
            },

            {
                "question": "What is the SI unit of electric charge?",
                "options": ["Coulomb", "Volt", "Farad", "Henry"],
                "answer": "Coulomb"
            },
            {
                "question": "Which device is used to protect electrical circuits from overcurrent?",
                "options": ["Fuse", "Capacitor", "Transistor", "Switch"],
                "answer": "Fuse"
            },
            {
                "question": "Which of these is an active component?",
                "options": ["Transistor", "Resistor", "Inductor", "Capacitor"],
                "answer": "Transistor"
            },
            {
                "question": "What does a transformer do?",
                "options": ["Changes voltage", "Stores energy", "Generates power", "Converts AC to DC"],
                "answer": "Changes voltage"
            },
            {
                "question": "Which type of current flows only in one direction?",
                "options": ["Direct Current", "Alternating Current", "Sinusoidal Current", "Induced Current"],
                "answer": "Direct Current"
            },
            {
                "question": "Which device is used to detect faults in a circuit?",
                "options": ["Multimeter", "Resistor", "Capacitor", "Battery"],
                "answer": "Multimeter"
            },
            {
                "question": "What does the term 'short circuit' refer to?",
                "options": ["Low resistance path", "Open circuit", "Overvoltage", "Grounding issue"],
                "answer": "Low resistance path"
            },
            {
                "question": "Which energy conversion takes place in an electric motor?",
                "options": ["Electrical to Mechanical", "Mechanical to Electrical", "Thermal to Mechanical", "Chemical to Electrical"],
                "answer": "Electrical to Mechanical"
            },
            {
                "question": "What is the function of an inverter?",
                "options": ["Convert DC to AC", "Convert AC to DC", "Store energy", "Amplify voltage"],
                "answer": "Convert DC to AC"
            },
            {
                "question": "What is the unit of inductance?",
                "options": ["Henry", "Farad", "Ohm", "Coulomb"],
                "answer": "Henry"
            },

            {
                "question": "Which instrument is used to measure electric potential difference?",
                "options": ["Voltmeter", "Ammeter", "Multimeter", "Galvanometer"],
                "answer": "Voltmeter"
            },
            {
                "question": "Which law is used in analyzing closed electrical circuits?",
                "options": ["Kirchhoff's Laws", "Faraday's Law", "Gauss's Law", "Lenz’s Law"],
                "answer": "Kirchhoff's Laws"
            },
            {
                "question": "Which element opposes changes in current?",
                "options": ["Inductor", "Capacitor", "Resistor", "Transformer"],
                "answer": "Inductor"
            },
            {
                "question": "What is the function of a diode?",
                "options": ["Allow current in one direction", "Increase resistance", "Store charge", "Reduce voltage"],
                "answer": "Allow current in one direction"
            },
            {
                "question": "Which motor is commonly used in ceiling fans?",
                "options": ["Single Phase Induction Motor", "DC Motor", "Universal Motor", "Synchronous Motor"],
                "answer": "Single Phase Induction Motor"
            },
            {
                "question": "Which type of current is supplied to households?",
                "options": ["Alternating Current", "Direct Current", "Pulsating DC", "Steady Current"],
                "answer": "Alternating Current"
            },
            {
                "question": "Which of the following is a step-up device?",
                "options": ["Transformer", "Rectifier", "Inductor", "Capacitor"],
                "answer": "Transformer"
            },
            {
                "question": "What is the power factor of a purely resistive circuit?",
                "options": ["1", "0", "0.5", "0.707"],
                "answer": "1"
            },
            {
                "question": "Which device is used in electric meters to measure energy?",
                "options": ["Energy Meter", "Multimeter", "Voltmeter", "Relay"],
                "answer": "Energy Meter"
            },
            {
                "question": "Which is the most common type of electrical wiring in homes?",
                "options": ["Conduit wiring", "Cleat wiring", "Casing and Capping", "Batten wiring"],
                "answer": "Conduit wiring"
            },

            {
                "question": "Which parameter does a capacitor oppose?",
                "options": ["Voltage change", "Current change", "Frequency", "Power"],
                "answer": "Voltage change"
            },
            {
                "question": "Which phenomenon explains electromagnetic induction?",
                "options": ["Faraday's Law", "Ohm's Law", "Gauss's Law", "Kirchhoff’s Law"],
                "answer": "Faraday's Law"
            },
            {
                "question": "Which unit is used to measure electrical energy?",
                "options": ["kWh", "kW", "Joule", "Watt"],
                "answer": "kWh"
            },
            {
                "question": "What is the effect of temperature on resistance in a conductor?",
                "options": ["Increases", "Decreases", "Remains same", "Fluctuates"],
                "answer": "Increases"
            },
            {
                "question": "Which electrical machine has the same construction as a generator?",
                "options": ["Motor", "Transformer", "Rectifier", "Inverter"],
                "answer": "Motor"
            },
            {
                "question": "What is the frequency of AC power in the US?",
                "options": ["60 Hz", "50 Hz", "100 Hz", "25 Hz"],
                "answer": "60 Hz"
            },
            {
                "question": "Which device protects a circuit from earth fault?",
                "options": ["Earth Leakage Circuit Breaker", "MCB", "Fuse", "Relay"],
                "answer": "Earth Leakage Circuit Breaker"
            },
            {
                "question": "What is the role of a relay in a circuit?",
                "options": ["Automatic switching", "Current limiting", "Power boosting", "Voltage detection"],
                "answer": "Automatic switching"
            },
            {
                "question": "Which logic gate outputs true only when both inputs are true?",
                "options": ["AND", "OR", "NOT", "XOR"],
                "answer": "AND"
            },
            {
                "question": "What type of signal is used in analog electronics?",
                "options": ["Continuous", "Discrete", "Digital", "Pulse"],
                "answer": "Continuous"
            }
        ],
        "Industrial Engineer": [
            {
                "question": "What is the main objective of industrial engineering?",
                "options": ["Improve productivity", "Design buildings", "Test software", "Develop medicines"],
                "answer": "Improve productivity"
            },
            {
                "question": "Which tool is used for time study?",
                "options": ["Stopwatch", "Caliper", "Thermometer", "Anemometer"],
                "answer": "Stopwatch"
            },
            {
                "question": "What is Six Sigma primarily used for?",
                "options": ["Quality improvement", "Product design", "Marketing", "Accounting"],
                "answer": "Quality improvement"
            },
            {
                "question": "Which chart is used in work study to analyze motion?",
                "options": ["Therblig Chart", "Gantt Chart", "PERT Chart", "Pie Chart"],
                "answer": "Therblig Chart"
            },
            {
                "question": "What does JIT stand for in manufacturing?",
                "options": ["Just In Time", "Joint Industrial Technique", "Job In Transition", "Jump Into Technology"],
                "answer": "Just In Time"
            },
            {
                "question": "Which layout is best suited for mass production?",
                "options": ["Product layout", "Process layout", "Fixed-position layout", "Combination layout"],
                "answer": "Product layout"
            },
            {
                "question": "What is the purpose of a Gantt chart?",
                "options": ["Project scheduling", "Inventory management", "Product costing", "Ergonomic analysis"],
                "answer": "Project scheduling"
            },
            {
                "question": "What does TQM stand for?",
                "options": ["Total Quality Management", "Technical Quality Measure", "Total Quantity Measure", "Time Quality Monitoring"],
                "answer": "Total Quality Management"
            },
            {
                "question": "Which principle is NOT part of lean manufacturing?",
                "options": ["Maximize waste", "Value stream mapping", "Continuous improvement", "Pull system"],
                "answer": "Maximize waste"
            },
            {
                "question": "What is the primary function of an ergonomic study?",
                "options": ["Improve human-machine interaction", "Design machines", "Develop code", "Increase salary"],
                "answer": "Improve human-machine interaction"
            },

            {
                "question": "Which inventory system triggers reordering when stock hits a certain level?",
                "options": ["Reorder point system", "Just-in-case system", "Push system", "Batch system"],
                "answer": "Reorder point system"
            },
            {
                "question": "What does MTBF stand for in maintenance?",
                "options": ["Mean Time Between Failures", "Most Tested Best Function", "Maintenance Time Before Failure", "Machine Test Base Function"],
                "answer": "Mean Time Between Failures"
            },
            {
                "question": "In supply chain, what is the 'bullwhip effect'?",
                "options": ["Demand distortion along the chain", "Improved inventory control", "Faster delivery times", "Increased machine speed"],
                "answer": "Demand distortion along the chain"
            },
            {
                "question": "Which of the following is a non-value-adding activity?",
                "options": ["Inspection", "Assembly", "Welding", "Machining"],
                "answer": "Inspection"
            },
            {
                "question": "Which technique is used for forecasting?",
                "options": ["Moving average", "Six Sigma", "Kaizen", "ERP"],
                "answer": "Moving average"
            },
            {
                "question": "What does PERT stand for?",
                "options": ["Program Evaluation and Review Technique", "Project Efficiency and Resource Test", "Product Enhancement and Review Technique", "Process Evaluation and Resource Tracking"],
                "answer": "Program Evaluation and Review Technique"
            },
            {
                "question": "Which law is related to motion economy?",
                "options": ["Gilbreth’s Law", "Newton’s Law", "Hooke’s Law", "Ohm’s Law"],
                "answer": "Gilbreth’s Law"
            },
            {
                "question": "What is the main function of statistical process control?",
                "options": ["Monitor quality", "Design parts", "Assemble products", "Reduce lead time"],
                "answer": "Monitor quality"
            },
            {
                "question": "What does SMED stand for?",
                "options": ["Single Minute Exchange of Dies", "Standard Machine Efficiency Design", "Simple Material Equipment Design", "Supply Management and Equipment Design"],
                "answer": "Single Minute Exchange of Dies"
            },
            {
                "question": "What is Kaizen?",
                "options": ["Continuous improvement", "Inventory control", "Machine design", "Work scheduling"],
                "answer": "Continuous improvement"
            },

            {
                "question": "What is the function of ABC analysis?",
                "options": ["Inventory categorization", "Product design", "Workplace safety", "Process simulation"],
                "answer": "Inventory categorization"
            },
            {
                "question": "Which method is used to optimize multiple conflicting objectives?",
                "options": ["Linear programming", "Brainstorming", "Job rotation", "Value engineering"],
                "answer": "Linear programming"
            },
            {
                "question": "Which of the following is a performance metric in manufacturing?",
                "options": ["OEE", "OOP", "SQL", "GDP"],
                "answer": "OEE"
            },
            {
                "question": "What does ERP stand for?",
                "options": ["Enterprise Resource Planning", "Energy Resource Production", "Economic Resource Platform", "Equipment Resource Provider"],
                "answer": "Enterprise Resource Planning"
            },
            {
                "question": "Which of the following is a push system?",
                "options": ["MRP", "Kanban", "JIT", "Pull card system"],
                "answer": "MRP"
            },
            {
                "question": "Which chart helps in identifying root causes?",
                "options": ["Fishbone diagram", "Bar chart", "Line graph", "Histogram"],
                "answer": "Fishbone diagram"
            },
            {
                "question": "What does TPM stand for in maintenance?",
                "options": ["Total Productive Maintenance", "Time Product Management", "Technical Performance Measure", "Total Plant Monitoring"],
                "answer": "Total Productive Maintenance"
            },
            {
                "question": "Which law relates to batch size and setup time?",
                "options": ["Economic Batch Quantity", "Murphy’s Law", "Poisson’s Law", "Bayes’ Law"],
                "answer": "Economic Batch Quantity"
            },
            {
                "question": "Which concept focuses on removing waste in production?",
                "options": ["Lean Manufacturing", "Agile", "Waterfall", "Benchmarking"],
                "answer": "Lean Manufacturing"
            },
            {
                "question": "What does 5S stand for?",
                "options": ["Sort, Set in order, Shine, Standardize, Sustain", "Select, Set, Save, Secure, Standard", "Schedule, Set, Shine, Support, Sustain", "Standardize, Store, Shine, Save, Simplify"],
                "answer": "Sort, Set in order, Shine, Standardize, Sustain"
            },

            {
                "question": "What is the main goal of line balancing?",
                "options": ["Minimize idle time", "Increase electricity", "Reduce raw materials", "Increase employee count"],
                "answer": "Minimize idle time"
            },
            {
                "question": "Which of the following is NOT a quality control tool?",
                "options": ["Sankey diagram", "Histogram", "Control chart", "Pareto chart"],
                "answer": "Sankey diagram"
            },
            {
                "question": "Which system is used for scheduling in job shops?",
                "options": ["Gantt Chart", "CPM", "MRP", "EOQ"],
                "answer": "Gantt Chart"
            },
            {
                "question": "Which term is used for idle time due to poor planning?",
                "options": ["Downtime", "Uptime", "Throughput", "Takt time"],
                "answer": "Downtime"
            },
            {
                "question": "What is the meaning of takt time?",
                "options": ["Customer demand rate", "Inventory level", "Machine efficiency", "Worker fatigue time"],
                "answer": "Customer demand rate"
            },
            {
                "question": "Which maintenance strategy involves repairing after failure?",
                "options": ["Reactive maintenance", "Preventive maintenance", "Predictive maintenance", "Total maintenance"],
                "answer": "Reactive maintenance"
            },
            {
                "question": "What is the aim of value engineering?",
                "options": ["Reduce cost without compromising function", "Increase labor cost", "Add expensive features", "Slow production"],
                "answer": "Reduce cost without compromising function"
            },
            {
                "question": "What is a bottleneck in production?",
                "options": ["The slowest process limiting output", "The fastest machine", "The quality check station", "The packaging area"],
                "answer": "The slowest process limiting output"
            },
            {
                "question": "Which strategy focuses on production flexibility?",
                "options": ["Agile manufacturing", "Mass production", "Batch processing", "Craft production"],
                "answer": "Agile manufacturing"
            },
            {
                "question": "Which factor is NOT part of productivity?",
                "options": ["Color of uniforms", "Output", "Input", "Efficiency"],
                "answer": "Color of uniforms"
            }
        ],
        "Environmental Engineer": [
            {
                "question": "What does EIA stand for?",
                "options": ["Environmental Impact Assessment", "Environmental Improvement Analysis", "Ecological Integrity Assessment", "Environmental Index Allocation"],
                "answer": "Environmental Impact Assessment"
            },
            {
                "question": "Which gas is the primary cause of global warming?",
                "options": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
                "answer": "Carbon dioxide"
            },
            {
                "question": "Which water treatment process removes suspended particles?",
                "options": ["Filtration", "Chlorination", "Sedimentation", "Aeration"],
                "answer": "Sedimentation"
            },
            {
                "question": "What is the permissible limit of arsenic in drinking water as per WHO?",
                "options": ["0.01 mg/L", "0.05 mg/L", "0.1 mg/L", "0.5 mg/L"],
                "answer": "0.01 mg/L"
            },
            {
                "question": "Which of the following is a greenhouse gas?",
                "options": ["Methane", "Argon", "Neon", "Helium"],
                "answer": "Methane"
            },
            {
                "question": "What does BOD indicate in wastewater?",
                "options": ["Organic pollution level", "Hardness", "Toxicity", "Acidity"],
                "answer": "Organic pollution level"
            },
            {
                "question": "Which pollutant is responsible for ozone layer depletion?",
                "options": ["CFCs", "CO2", "CH4", "NO2"],
                "answer": "CFCs"
            },
            {
                "question": "Which of these is a non-renewable energy source?",
                "options": ["Coal", "Solar", "Wind", "Hydropower"],
                "answer": "Coal"
            },
            {
                "question": "Which law governs air pollution control in India?",
                "options": ["Air Act, 1981", "Water Act, 1974", "Environment Act, 1986", "Pollution Control Act, 1990"],
                "answer": "Air Act, 1981"
            },
            {
                "question": "What is the main cause of acid rain?",
                "options": ["SO2 and NOx", "CO2 and CO", "CH4 and H2S", "O3 and CFC"],
                "answer": "SO2 and NOx"
            },

            {
                "question": "Which technique is used to treat hazardous waste?",
                "options": ["Incineration", "Landfilling", "Composting", "Flocculation"],
                "answer": "Incineration"
            },
            {
                "question": "Which is the primary air pollutant from vehicles?",
                "options": ["Carbon monoxide", "Sulphur dioxide", "Ammonia", "Ozone"],
                "answer": "Carbon monoxide"
            },
            {
                "question": "What is eutrophication?",
                "options": ["Excess nutrients in water bodies", "Ozone depletion", "Acidification of soil", "Air quality index"],
                "answer": "Excess nutrients in water bodies"
            },
            {
                "question": "What is the unit of noise level?",
                "options": ["Decibel", "Hz", "Newton", "Lux"],
                "answer": "Decibel"
            },
            {
                "question": "Which treatment is considered primary in wastewater treatment?",
                "options": ["Sedimentation", "Chlorination", "Filtration", "Aeration"],
                "answer": "Sedimentation"
            },
            {
                "question": "What does DO stand for in water quality?",
                "options": ["Dissolved Oxygen", "Dry Oxygen", "Decomposed Organics", "Destructive Oxidant"],
                "answer": "Dissolved Oxygen"
            },
            {
                "question": "Which of the following is a biological treatment method?",
                "options": ["Activated Sludge Process", "Filtration", "Sedimentation", "Chlorination"],
                "answer": "Activated Sludge Process"
            },
            {
                "question": "Which indicator is used for measuring acidity of water?",
                "options": ["pH", "TDS", "BOD", "Turbidity"],
                "answer": "pH"
            },
            {
                "question": "What is the major source of water pollution in urban areas?",
                "options": ["Domestic sewage", "Radioactive waste", "Agricultural runoff", "Industrial waste"],
                "answer": "Domestic sewage"
            },
            {
                "question": "Which protocol is related to the reduction of greenhouse gases?",
                "options": ["Kyoto Protocol", "Montreal Protocol", "Basel Convention", "Stockholm Convention"],
                "answer": "Kyoto Protocol"
            },

            {
                "question": "Which is the most effective method for solid waste disposal?",
                "options": ["Sanitary landfill", "Open dumping", "Incineration", "Composting"],
                "answer": "Sanitary landfill"
            },
            {
                "question": "What is the primary pollutant in photochemical smog?",
                "options": ["Ozone", "Sulphur dioxide", "Lead", "Carbon monoxide"],
                "answer": "Ozone"
            },
            {
                "question": "Which of these is a biodegradable pollutant?",
                "options": ["Food waste", "Plastic", "Glass", "Metals"],
                "answer": "Food waste"
            },
            {
                "question": "Which device is used to remove particulates from flue gases?",
                "options": ["Electrostatic precipitator", "Scrubber", "Compressor", "Catalytic converter"],
                "answer": "Electrostatic precipitator"
            },
            {
                "question": "What is the pH range of acidic water?",
                "options": ["0–6.9", "7–8", "8–14", "Exactly 7"],
                "answer": "0–6.9"
            },
            {
                "question": "What is the term for maximum amount of a pollutant that a body of water can receive?",
                "options": ["TMDL", "BOD", "COD", "MLD"],
                "answer": "TMDL"
            },
            {
                "question": "Which of the following is NOT a renewable energy source?",
                "options": ["Natural gas", "Biogas", "Wind", "Geothermal"],
                "answer": "Natural gas"
            },
            {
                "question": "What does PM2.5 refer to?",
                "options": ["Particulate matter smaller than 2.5 microns", "Power management system", "Pollutant measurement", "Pollution model"],
                "answer": "Particulate matter smaller than 2.5 microns"
            },
            {
                "question": "Which of these can reduce NOx emissions?",
                "options": ["Selective Catalytic Reduction", "Electrostatic Precipitation", "Filtration", "Biological treatment"],
                "answer": "Selective Catalytic Reduction"
            },
            {
                "question": "What is the main goal of sustainable development?",
                "options": ["Meet current needs without compromising future generations", "Rapid industrialization", "Urban expansion", "Cost reduction"],
                "answer": "Meet current needs without compromising future generations"
            },

            {
                "question": "Which international agreement targets ozone depletion?",
                "options": ["Montreal Protocol", "Kyoto Protocol", "Paris Agreement", "Rio Declaration"],
                "answer": "Montreal Protocol"
            },
            {
                "question": "Which water pollutant is associated with blue baby syndrome?",
                "options": ["Nitrate", "Chloride", "Fluoride", "Lead"],
                "answer": "Nitrate"
            },
            {
                "question": "What does COD represent in wastewater analysis?",
                "options": ["Chemical Oxygen Demand", "Carbon Output Determination", "Chlorine Oxide Density", "Contamination of Discharge"],
                "answer": "Chemical Oxygen Demand"
            },
            {
                "question": "Which of the following is used in disinfection of drinking water?",
                "options": ["Chlorine", "Iron", "Sodium", "Nitrogen"],
                "answer": "Chlorine"
            },
            {
                "question": "Which gas causes acid rain along with SO2?",
                "options": ["NOx", "CO2", "O3", "CH4"],
                "answer": "NOx"
            },
            {
                "question": "Which of these is a point source of pollution?",
                "options": ["Discharge pipe", "Urban runoff", "Agricultural field", "Atmospheric deposition"],
                "answer": "Discharge pipe"
            },
            {
                "question": "What is the main goal of wastewater treatment?",
                "options": ["Remove contaminants", "Produce energy", "Increase water hardness", "Add nutrients"],
                "answer": "Remove contaminants"
            },
            {
                "question": "Which act in India is responsible for environment protection?",
                "options": ["Environment Protection Act, 1986", "Water Act, 1974", "Air Act, 1981", "Forest Act, 1927"],
                "answer": "Environment Protection Act, 1986"
            },
            {
                "question": "What is the function of an anaerobic digester?",
                "options": ["Biogas production", "Aeration", "Filtration", "Chlorination"],
                "answer": "Biogas production"
            },
            {
                "question": "Which parameter indicates turbidity in water?",
                "options": ["NTU", "mg/L", "ppm", "pH"],
                "answer": "NTU"
            }
        ],
        "Biomedical Engineer": [
            {
                "question": "What is the main function of an ECG machine?",
                "options": ["Measure electrical activity of the heart", "Measure blood pressure", "Measure body temperature", "Measure brain activity"],
                "answer": "Measure electrical activity of the heart"
            },
            {
                "question": "Which imaging technique uses magnetic fields and radio waves?",
                "options": ["MRI", "CT", "X-ray", "Ultrasound"],
                "answer": "MRI"
            },
            {
                "question": "What does a pacemaker regulate?",
                "options": ["Heart rhythm", "Blood sugar", "Brain activity", "Oxygen levels"],
                "answer": "Heart rhythm"
            },
            {
                "question": "Which biomedical device is used to assist hearing?",
                "options": ["Cochlear Implant", "Pacemaker", "ECG", "Defibrillator"],
                "answer": "Cochlear Implant"
            },
            {
                "question": "Which test measures brain activity?",
                "options": ["EEG", "ECG", "EMG", "X-ray"],
                "answer": "EEG"
            },
            {
                "question": "What does MRI stand for?",
                "options": ["Magnetic Resonance Imaging", "Medical Radiology Interface", "Magneto-Radio Imaging", "Magnetic Radiation Integration"],
                "answer": "Magnetic Resonance Imaging"
            },
            {
                "question": "Which sensor is commonly used in wearable health devices?",
                "options": ["Pulse Oximeter", "Gyroscope", "Accelerometer", "Barometer"],
                "answer": "Pulse Oximeter"
            },
            {
                "question": "Which material is commonly used in orthopedic implants?",
                "options": ["Titanium", "Iron", "Aluminum", "Lead"],
                "answer": "Titanium"
            },
            {
                "question": "Which device is used to shock the heart during cardiac arrest?",
                "options": ["Defibrillator", "Pacemaker", "ECG", "CT Scanner"],
                "answer": "Defibrillator"
            },
            {
                "question": "Which biomedical technique helps visualize bones?",
                "options": ["X-ray", "MRI", "EEG", "ECG"],
                "answer": "X-ray"
            },

            {
                "question": "Which component converts electrical signals into sound in hearing aids?",
                "options": ["Speaker", "Amplifier", "Microphone", "Transmitter"],
                "answer": "Speaker"
            },
            {
                "question": "What is the function of an infusion pump?",
                "options": ["Deliver fluids into a patient’s body", "Measure blood glucose", "Monitor heart rate", "Image internal organs"],
                "answer": "Deliver fluids into a patient’s body"
            },
            {
                "question": "Which of the following measures oxygen saturation?",
                "options": ["Pulse Oximeter", "ECG", "MRI", "Ultrasound"],
                "answer": "Pulse Oximeter"
            },
            {
                "question": "Which part of the body is scanned in a mammogram?",
                "options": ["Breast", "Brain", "Heart", "Lung"],
                "answer": "Breast"
            },
            {
                "question": "Which bio-signal is measured during EMG?",
                "options": ["Muscle Activity", "Heart Activity", "Brain Activity", "Lung Function"],
                "answer": "Muscle Activity"
            },
            {
                "question": "What is the primary use of a CT scanner?",
                "options": ["Cross-sectional imaging", "Monitoring heart rate", "Blood pressure measurement", "Visualizing electrical activity"],
                "answer": "Cross-sectional imaging"
            },
            {
                "question": "Which device filters waste from the blood when kidneys fail?",
                "options": ["Dialysis Machine", "ECG", "Ventilator", "Pacemaker"],
                "answer": "Dialysis Machine"
            },
            {
                "question": "Which software is commonly used for biomedical image processing?",
                "options": ["MATLAB", "Excel", "Photoshop", "AutoCAD"],
                "answer": "MATLAB"
            },
            {
                "question": "Which field combines biology, medicine, and engineering?",
                "options": ["Biomedical Engineering", "Genetic Engineering", "Mechanical Engineering", "Electrical Engineering"],
                "answer": "Biomedical Engineering"
            },
            {
                "question": "What type of data does an EEG machine collect?",
                "options": ["Electrical signals from the brain", "Heart rhythm", "Muscle strength", "Blood glucose level"],
                "answer": "Electrical signals from the brain"
            },

            {
                "question": "What is the purpose of sterilization in medical devices?",
                "options": ["Eliminate microorganisms", "Enhance conductivity", "Increase flexibility", "Improve signal strength"],
                "answer": "Eliminate microorganisms"
            },
            {
                "question": "Which biomedical device supports breathing?",
                "options": ["Ventilator", "Pacemaker", "Ultrasound", "Defibrillator"],
                "answer": "Ventilator"
            },
            {
                "question": "What does EMG stand for?",
                "options": ["Electromyography", "Electromechanical Gauge", "Electronic Medical Guide", "Emergency Medical Generator"],
                "answer": "Electromyography"
            },
            {
                "question": "Which unit is used to measure bioelectric signals?",
                "options": ["Millivolt", "Ampere", "Ohm", "Watt"],
                "answer": "Millivolt"
            },
            {
                "question": "Which organ is commonly examined using an ultrasound?",
                "options": ["Liver", "Heart", "Brain", "Skin"],
                "answer": "Liver"
            },
            {
                "question": "Which law governs ion movement in nerve signals?",
                "options": ["Nernst Equation", "Ohm’s Law", "Boyle’s Law", "Kirchhoff’s Law"],
                "answer": "Nernst Equation"
            },
            {
                "question": "Which type of sensor is used to detect body movement?",
                "options": ["Accelerometer", "Pulse Sensor", "Thermistor", "Photodiode"],
                "answer": "Accelerometer"
            },
            {
                "question": "Which biomedical instrument measures blood pressure?",
                "options": ["Sphygmomanometer", "ECG", "Thermometer", "Stethoscope"],
                "answer": "Sphygmomanometer"
            },
            {
                "question": "What is the function of a prosthetic limb?",
                "options": ["Replace a lost body part", "Assist in digestion", "Improve vision", "Regulate heartbeat"],
                "answer": "Replace a lost body part"
            },
            {
                "question": "Which technique is used in 3D printing of tissues?",
                "options": ["Bioprinting", "Photolithography", "Laser Cutting", "Electrospinning"],
                "answer": "Bioprinting"
            },

            {
                "question": "What does the term 'biosignal' refer to?",
                "options": ["Physiological electrical signals", "Network data", "Blood type", "Genetic sequence"],
                "answer": "Physiological electrical signals"
            },
            {
                "question": "Which device is used for non-invasive imaging of soft tissues?",
                "options": ["MRI", "X-ray", "EEG", "Defibrillator"],
                "answer": "MRI"
            },
            {
                "question": "Which component of a medical imaging system detects radiation?",
                "options": ["Detector", "Amplifier", "Transducer", "Sensor"],
                "answer": "Detector"
            },
            {
                "question": "Which polymer is widely used in biomedical implants?",
                "options": ["Silicone", "PVC", "Polyethylene", "Teflon"],
                "answer": "Silicone"
            },
            {
                "question": "What is the function of a catheter?",
                "options": ["Deliver or remove fluids", "Measure pulse rate", "Detect muscle activity", "Monitor heart rhythm"],
                "answer": "Deliver or remove fluids"
            },
            {
                "question": "Which instrument is used to measure body temperature?",
                "options": ["Thermometer", "Oximeter", "Glucometer", "Sphygmomanometer"],
                "answer": "Thermometer"
            },
            {
                "question": "What is the role of a biomedical engineer?",
                "options": ["Design medical devices", "Conduct surgery", "Diagnose patients", "Prescribe medicine"],
                "answer": "Design medical devices"
            },
            {
                "question": "Which of the following is used for non-invasive blood glucose monitoring?",
                "options": ["Near-Infrared Spectroscopy", "X-ray", "EEG", "CT Scan"],
                "answer": "Near-Infrared Spectroscopy"
            },
            {
                "question": "Which field applies engineering principles to the human body?",
                "options": ["Biomechanics", "Mechatronics", "Aeronautics", "Civil Engineering"],
                "answer": "Biomechanics"
            },
            {
                "question": "Which sensor is used in wearable ECG monitors?",
                "options": ["Electrode", "Photodiode", "Thermistor", "Accelerometer"],
                "answer": "Electrode"
            }
        ],
    },

    "Business": {
        "Business Analyst": [
            {
                "question": "What is the primary role of a business analyst?",
                "options": ["Identify business needs and recommend solutions", "Write code", "Design user interfaces", "Manage projects"],
                "answer": "Identify business needs and recommend solutions"
            },
            {
                "question": "Which document captures stakeholder needs and expectations?",
                "options": ["Business Requirements Document (BRD)", "Test Plan", "Technical Specification", "Wireframe"],
                "answer": "Business Requirements Document (BRD)"
            },
            {
                "question": "What is a 'use case' used for?",
                "options": ["Describing system-user interactions", "Testing performance", "Budget forecasting", "Managing risks"],
                "answer": "Describing system-user interactions"
            },
            {
                "question": "Which diagram is used to model workflows?",
                "options": ["Activity Diagram", "ER Diagram", "Wireframe", "Pie Chart"],
                "answer": "Activity Diagram"
            },
            {
                "question": "What is a common technique to gather requirements?",
                "options": ["Interviews", "Coding", "Simulation", "Stress Testing"],
                "answer": "Interviews"
            },
            {
                "question": "Which technique is used to understand current processes?",
                "options": ["AS-IS Analysis", "TO-BE Modeling", "PESTLE Analysis", "SWOT Analysis"],
                "answer": "AS-IS Analysis"
            },
            {
                "question": "What does 'scope creep' refer to?",
                "options": ["Uncontrolled changes in project scope", "Decrease in budget", "Scope estimation error", "Late delivery"],
                "answer": "Uncontrolled changes in project scope"
            },
            {
                "question": "What is a 'stakeholder'?",
                "options": ["Anyone affected by the project", "Only end users", "Only investors", "Only the project manager"],
                "answer": "Anyone affected by the project"
            },
            {
                "question": "Which of the following is a functional requirement?",
                "options": ["System should allow users to login", "System must respond within 1 second", "System should be scalable", "System should be secure"],
                "answer": "System should allow users to login"
            },
            {
                "question": "What is a 'gap analysis' used for?",
                "options": ["Identifying differences between current and desired state", "Writing test cases", "Financial reporting", "Managing team conflict"],
                "answer": "Identifying differences between current and desired state"
            },

            {
                "question": "Which tool is commonly used to create process diagrams?",
                "options": ["Microsoft Visio", "Notepad", "Excel", "PowerPoint"],
                "answer": "Microsoft Visio"
            },
            {
                "question": "What is the purpose of a feasibility study?",
                "options": ["Evaluate if a solution is viable", "Define the project scope", "Design the user interface", "Analyze test results"],
                "answer": "Evaluate if a solution is viable"
            },
            {
                "question": "What does UML stand for?",
                "options": ["Unified Modeling Language", "User Machine Language", "Universal Method of Learning", "Unified Metrics Log"],
                "answer": "Unified Modeling Language"
            },
            {
                "question": "What is a 'persona' in business analysis?",
                "options": ["Fictional character representing a user type", "System requirement", "Database table", "Test case"],
                "answer": "Fictional character representing a user type"
            },
            {
                "question": "What does MoSCoW stand for?",
                "options": ["Must have, Should have, Could have, Won’t have", "More software, Cost of Work", "Method of System Coding", "Modified Score of Work"],
                "answer": "Must have, Should have, Could have, Won’t have"
            },
            {
                "question": "Which phase comes after requirements gathering?",
                "options": ["Analysis", "Testing", "Deployment", "Maintenance"],
                "answer": "Analysis"
            },
            {
                "question": "What is the main purpose of a wireframe?",
                "options": ["Visualize layout of a UI", "Track defects", "Calculate ROI", "Analyze business risks"],
                "answer": "Visualize layout of a UI"
            },
            {
                "question": "What is a TO-BE process model?",
                "options": ["Future desired process", "Current process", "Rejected process", "Faulty process"],
                "answer": "Future desired process"
            },
            {
                "question": "What is a key activity in the initiation phase of a project?",
                "options": ["Define objectives", "Code the system", "Execute tests", "Deploy application"],
                "answer": "Define objectives"
            },
            {
                "question": "Which tool is best for managing requirements?",
                "options": ["JIRA", "AutoCAD", "Photoshop", "SAP BI"],
                "answer": "JIRA"
            },

            {
                "question": "Which technique helps identify the root cause of a problem?",
                "options": ["5 Whys", "Brainstorming", "Benchmarking", "Interview"],
                "answer": "5 Whys"
            },
            {
                "question": "What does a SWOT analysis evaluate?",
                "options": ["Strengths, Weaknesses, Opportunities, Threats", "Software Width Of Technology", "Short Wins On Testing", "System Working On Time"],
                "answer": "Strengths, Weaknesses, Opportunities, Threats"
            },
            {
                "question": "Which document outlines 'what' the system should do?",
                "options": ["Functional Requirements Specification", "Test Plan", "System Design Document", "Architecture Blueprint"],
                "answer": "Functional Requirements Specification"
            },
            {
                "question": "What is a common output of requirement validation?",
                "options": ["Approved requirements", "System design", "Data model", "Test script"],
                "answer": "Approved requirements"
            },
            {
                "question": "What is a KPI?",
                "options": ["Key Performance Indicator", "Known Project Issue", "Key Programming Insight", "Knowledge Process Inventory"],
                "answer": "Key Performance Indicator"
            },
            {
                "question": "What is prototyping used for?",
                "options": ["Validating user interface concepts", "Writing production code", "Deploying final systems", "Data backups"],
                "answer": "Validating user interface concepts"
            },
            {
                "question": "Which of the following is a non-functional requirement?",
                "options": ["System should be available 24/7", "System should calculate interest", "User can update profile", "User can delete account"],
                "answer": "System should be available 24/7"
            },
            {
                "question": "What is meant by 'elicitation'?",
                "options": ["Gathering requirements", "Testing code", "Writing SQL", "Designing architecture"],
                "answer": "Gathering requirements"
            },
            {
                "question": "Which stakeholder has the final say on requirements approval?",
                "options": ["Project Sponsor", "Tester", "Developer", "HR"],
                "answer": "Project Sponsor"
            },
            {
                "question": "Which tool is used for business data visualization?",
                "options": ["Tableau", "Eclipse", "GitHub", "Jenkins"],
                "answer": "Tableau"
            },

            {
                "question": "What does BPMN stand for?",
                "options": ["Business Process Model and Notation", "Business Planning Management Network", "Budget Planning Model Note", "Business Process Management Node"],
                "answer": "Business Process Model and Notation"
            },
            {
                "question": "What is a use of stakeholder analysis?",
                "options": ["Identify influence and interest", "Track employee time", "Model databases", "Generate invoices"],
                "answer": "Identify influence and interest"
            },
            {
                "question": "Which format is used for structured interviews?",
                "options": ["Predefined question set", "Open discussion", "Coding test", "Bug report"],
                "answer": "Predefined question set"
            },
            {
                "question": "What is a Fishbone diagram used for?",
                "options": ["Finding root causes of problems", "Planning schedules", "Analyzing finances", "Modeling user behavior"],
                "answer": "Finding root causes of problems"
            },
            {
                "question": "What is a backlog in Agile methodology?",
                "options": ["List of prioritized work items", "Team attendance record", "List of employees", "Project constraints document"],
                "answer": "List of prioritized work items"
            },
            {
                "question": "What is the primary goal of a requirements workshop?",
                "options": ["Collaborative requirement gathering", "Team bonding", "UI testing", "Performance tuning"],
                "answer": "Collaborative requirement gathering"
            },
            {
                "question": "Which tool supports Agile user story management?",
                "options": ["JIRA", "Photoshop", "SolidWorks", "SAP ERP"],
                "answer": "JIRA"
            },
            {
                "question": "What does RACI stand for?",
                "options": ["Responsible, Accountable, Consulted, Informed", "Relevant, Actionable, Clear, Inclusive", "Results, Analytics, Communication, Integrity", "Resource Allocation and Cost Indicator"],
                "answer": "Responsible, Accountable, Consulted, Informed"
            },
            {
                "question": "What is a user story?",
                "options": ["Short description of functionality from a user's perspective", "Detailed technical specification", "Data table", "Performance benchmark"],
                "answer": "Short description of functionality from a user's perspective"
            },
            {
                "question": "What is the main objective of requirement traceability?",
                "options": ["Ensure all requirements are met", "Monitor system uptime", "Create user manuals", "Design hardware"],
                "answer": "Ensure all requirements are met"
            }
        ],
        "Project Manager": [
            {
                "question": "What is the primary purpose of a project charter?",
                "options": ["Authorize the project", "Define project budget", "Assign team members", "Schedule tasks"],
                "answer": "Authorize the project"
            },
            {
                "question": "Which methodology follows iterative and incremental development?",
                "options": ["Agile", "Waterfall", "Lean", "Six Sigma"],
                "answer": "Agile"
            },
            {
                "question": "What does the acronym 'WBS' stand for?",
                "options": ["Work Breakdown Structure", "Work Based Scheduling", "Weighted Budget Summary", "Work Benefit System"],
                "answer": "Work Breakdown Structure"
            },
            {
                "question": "Which chart is commonly used for scheduling and tracking project activities?",
                "options": ["Gantt Chart", "Pie Chart", "Histogram", "Flowchart"],
                "answer": "Gantt Chart"
            },
            {
                "question": "What is the critical path in project management?",
                "options": ["Longest sequence of tasks", "Shortest path in scheduling", "Tasks with zero float", "All tasks with dependencies"],
                "answer": "Longest sequence of tasks"
            },
            {
                "question": "Which document details the project scope and deliverables?",
                "options": ["Scope Statement", "Risk Register", "Project Plan", "Communication Plan"],
                "answer": "Scope Statement"
            },
            {
                "question": "What is a stakeholder?",
                "options": ["Anyone affected by the project", "Only the project team", "The project manager", "Only clients"],
                "answer": "Anyone affected by the project"
            },
            {
                "question": "Which tool is used for identifying risks?",
                "options": ["Risk Register", "SWOT Analysis", "PERT Chart", "Gantt Chart"],
                "answer": "SWOT Analysis"
            },
            {
                "question": "What does 'scope creep' mean?",
                "options": ["Uncontrolled changes in project scope", "Project scope completed early", "Scope is too large", "Scope reduced"],
                "answer": "Uncontrolled changes in project scope"
            },
            {
                "question": "Which process involves defining, preparing, and coordinating all plan components?",
                "options": ["Project Planning", "Project Execution", "Project Monitoring", "Project Closing"],
                "answer": "Project Planning"
            },

            {
                "question": "Which technique estimates project duration by calculating optimistic, pessimistic, and most likely time?",
                "options": ["PERT", "CPM", "Gantt Chart", "SWOT"],
                "answer": "PERT"
            },
            {
                "question": "What is the main focus of Six Sigma?",
                "options": ["Reducing defects", "Cost control", "Team management", "Scheduling"],
                "answer": "Reducing defects"
            },
            {
                "question": "Which of these is a common project management software?",
                "options": ["MS Project", "AutoCAD", "Photoshop", "MATLAB"],
                "answer": "MS Project"
            },
            {
                "question": "What does the acronym 'RACI' stand for?",
                "options": ["Responsible, Accountable, Consulted, Informed", "Risk Analysis Control Index", "Resource Allocation and Control", "Rate, Assess, Check, Implement"],
                "answer": "Responsible, Accountable, Consulted, Informed"
            },
            {
                "question": "Which project management phase involves monitoring and controlling project work?",
                "options": ["Execution", "Initiation", "Planning", "Closing"],
                "answer": "Execution"
            },
            {
                "question": "What is a 'deliverable' in project management?",
                "options": ["A tangible or intangible output", "A project risk", "A team member", "A project milestone"],
                "answer": "A tangible or intangible output"
            },
            {
                "question": "What does the term 'milestone' refer to?",
                "options": ["Significant event or point in the project", "A task with long duration", "A type of project risk", "Budget constraint"],
                "answer": "Significant event or point in the project"
            },
            {
                "question": "Which document records lessons learned during a project?",
                "options": ["Project Closure Report", "Risk Register", "Project Charter", "Work Breakdown Structure"],
                "answer": "Project Closure Report"
            },
            {
                "question": "What is 'earned value management' used for?",
                "options": ["Performance measurement", "Resource allocation", "Risk analysis", "Communication"],
                "answer": "Performance measurement"
            },
            {
                "question": "What is the triple constraint in project management?",
                "options": ["Scope, Time, Cost", "Quality, Risk, Resources", "Stakeholders, Budget, Schedule", "Communication, Quality, Risk"],
                "answer": "Scope, Time, Cost"
            },

            {
                "question": "Which leadership style is most effective for project teams?",
                "options": ["Situational", "Autocratic", "Laissez-faire", "Transactional"],
                "answer": "Situational"
            },
            {
                "question": "What does 'float' or 'slack' mean in scheduling?",
                "options": ["Time a task can be delayed without affecting project", "Extra budget", "Unused resources", "Late project start"],
                "answer": "Time a task can be delayed without affecting project"
            },
            {
                "question": "Which of the following is NOT a project phase?",
                "options": ["Marketing", "Initiation", "Planning", "Closing"],
                "answer": "Marketing"
            },
            {
                "question": "What is a 'risk mitigation strategy'?",
                "options": ["Plan to reduce risk impact", "Ignore the risk", "Transfer the risk to client", "Create more risks"],
                "answer": "Plan to reduce risk impact"
            },
            {
                "question": "Which document defines how project communications will be managed?",
                "options": ["Communication Plan", "Risk Register", "Stakeholder Register", "Quality Plan"],
                "answer": "Communication Plan"
            },
            {
                "question": "What is the primary role of a project sponsor?",
                "options": ["Provide resources and support", "Manage project tasks", "Develop project schedule", "Control quality"],
                "answer": "Provide resources and support"
            },
            {
                "question": "What is 'crashing' in project management?",
                "options": ["Reducing project duration by adding resources", "Increasing budget", "Delaying project milestones", "Ignoring risks"],
                "answer": "Reducing project duration by adding resources"
            },
            {
                "question": "Which method is used for conflict resolution by forcing a decision?",
                "options": ["Competing", "Collaborating", "Avoiding", "Accommodating"],
                "answer": "Competing"
            },
            {
                "question": "Which tool helps visualize project stakeholder influence?",
                "options": ["Power-Interest Grid", "RACI Matrix", "SWOT Analysis", "Gantt Chart"],
                "answer": "Power-Interest Grid"
            },
            {
                "question": "What is the main output of the project initiation phase?",
                "options": ["Project Charter", "Work Breakdown Structure", "Project Schedule", "Risk Register"],
                "answer": "Project Charter"
            },

            {
                "question": "Which of the following is a qualitative risk analysis technique?",
                "options": ["Risk probability and impact matrix", "Monte Carlo simulation", "Earned value analysis", "Critical path method"],
                "answer": "Risk probability and impact matrix"
            },
            {
                "question": "What is the best way to manage a distributed project team?",
                "options": ["Regular communication and collaboration tools", "Ignore time zone differences", "Avoid meetings", "Limit communication"],
                "answer": "Regular communication and collaboration tools"
            },
            {
                "question": "Which document lists all identified project risks?",
                "options": ["Risk Register", "Stakeholder Register", "Project Charter", "Quality Management Plan"],
                "answer": "Risk Register"
            },
            {
                "question": "What is the purpose of a project baseline?",
                "options": ["Benchmark for measuring project performance", "Plan for stakeholder engagement", "List of project deliverables", "Budget approval document"],
                "answer": "Benchmark for measuring project performance"
            },
            {
                "question": "Which of the following best describes a project milestone?",
                "options": ["Key event marking progress", "Long-duration task", "Budget expense", "Risk"],
                "answer": "Key event marking progress"
            },
            {
                "question": "What is the main goal of stakeholder management?",
                "options": ["Ensure stakeholder needs and expectations are met", "Reduce project scope", "Increase project budget", "Limit communication"],
                "answer": "Ensure stakeholder needs and expectations are met"
            },
            {
                "question": "Which is a common method to gather project requirements?",
                "options": ["Interviews", "Gantt charts", "SWOT analysis", "Earned value"],
                "answer": "Interviews"
            },
            {
                "question": "What is the focus of the project closing phase?",
                "options": ["Formal acceptance and documentation", "Task scheduling", "Risk mitigation", "Team management"],
                "answer": "Formal acceptance and documentation"
            },
            {
                "question": "What is a project ‘issue’?",
                "options": ["An active problem requiring resolution", "Planned risk", "Project milestone", "Budget allocation"],
                "answer": "An active problem requiring resolution"
            },
            {
                "question": "Which analysis helps identify internal and external project factors?",
                "options": ["SWOT Analysis", "PERT", "Critical Path", "Fishbone Diagram"],
                "answer": "SWOT Analysis"
            }
        ],
        "Marketing Manager": [
            {
                "question": "What is the primary purpose of market segmentation?",
                "options": ["Divide market into groups", "Increase sales force", "Launch new products", "Reduce production costs"],
                "answer": "Divide market into groups"
            },
            {
                "question": "Which marketing mix element focuses on pricing strategy?",
                "options": ["Price", "Product", "Place", "Promotion"],
                "answer": "Price"
            },
            {
                "question": "What does SWOT stand for in marketing?",
                "options": ["Strengths, Weaknesses, Opportunities, Threats", "Sales, Wants, Objectives, Tactics", "Strategy, Work, Operations, Targets", "Strengths, Work, Options, Tools"],
                "answer": "Strengths, Weaknesses, Opportunities, Threats"
            },
            {
                "question": "Which method is used to collect primary market data?",
                "options": ["Surveys", "Industry reports", "Competitor analysis", "Internal sales data"],
                "answer": "Surveys"
            },
            {
                "question": "What is brand equity?",
                "options": ["Value of a brand", "Marketing budget", "Customer database", "Sales revenue"],
                "answer": "Value of a brand"
            },
            {
                "question": "Which of the following is NOT a part of the marketing funnel?",
                "options": ["Awareness", "Consideration", "Closure", "Production"],
                "answer": "Production"
            },
            {
                "question": "What is the purpose of a Unique Selling Proposition (USP)?",
                "options": ["Differentiate product from competitors", "Reduce production cost", "Increase social media followers", "Manage customer complaints"],
                "answer": "Differentiate product from competitors"
            },
            {
                "question": "Which digital marketing channel is best for direct engagement?",
                "options": ["Social Media", "Print Advertising", "TV Commercials", "Billboards"],
                "answer": "Social Media"
            },
            {
                "question": "What does CPC stand for in online advertising?",
                "options": ["Cost Per Click", "Customer Purchase Cost", "Campaign Performance Check", "Cost Per Conversion"],
                "answer": "Cost Per Click"
            },
            {
                "question": "Which strategy involves offering products at a low price initially?",
                "options": ["Penetration Pricing", "Skimming Pricing", "Premium Pricing", "Bundle Pricing"],
                "answer": "Penetration Pricing"
            },

            {
                "question": "What is market positioning?",
                "options": ["How a product is perceived in the market", "Product pricing strategy", "Customer loyalty program", "Advertising method"],
                "answer": "How a product is perceived in the market"
            },
            {
                "question": "Which tool is commonly used for analyzing competitors?",
                "options": ["Competitive Analysis", "PESTLE Analysis", "Gap Analysis", "Financial Audit"],
                "answer": "Competitive Analysis"
            },
            {
                "question": "What is the focus of content marketing?",
                "options": ["Create valuable content", "Increase direct sales", "Manage customer complaints", "Design product packaging"],
                "answer": "Create valuable content"
            },
            {
                "question": "Which metric indicates the percentage of visitors who leave after viewing only one page?",
                "options": ["Bounce Rate", "Conversion Rate", "Engagement Rate", "Click-Through Rate"],
                "answer": "Bounce Rate"
            },
            {
                "question": "What does SEO stand for?",
                "options": ["Search Engine Optimization", "Sales Engagement Opportunity", "Social Event Organization", "Service Experience Outcome"],
                "answer": "Search Engine Optimization"
            },
            {
                "question": "What is a key characteristic of B2B marketing?",
                "options": ["Longer sales cycles", "Impulse buying", "Mass marketing", "Low-value transactions"],
                "answer": "Longer sales cycles"
            },
            {
                "question": "Which marketing strategy focuses on satisfying customer needs?",
                "options": ["Customer-centric Marketing", "Product-centric Marketing", "Sales-centric Marketing", "Competitor-centric Marketing"],
                "answer": "Customer-centric Marketing"
            },
            {
                "question": "What is a 'lead' in marketing?",
                "options": ["Potential customer", "Finished product", "Sales report", "Market segment"],
                "answer": "Potential customer"
            },
            {
                "question": "Which social media platform is best suited for B2B marketing?",
                "options": ["LinkedIn", "Instagram", "Snapchat", "Pinterest"],
                "answer": "LinkedIn"
            },
            {
                "question": "What is the primary goal of influencer marketing?",
                "options": ["Leverage influence to promote products", "Increase production efficiency", "Reduce marketing budget", "Manage customer data"],
                "answer": "Leverage influence to promote products"
            },

            {
                "question": "Which of the following is a direct marketing technique?",
                "options": ["Email campaigns", "TV advertising", "Billboards", "Public relations"],
                "answer": "Email campaigns"
            },
            {
                "question": "What does CRM stand for?",
                "options": ["Customer Relationship Management", "Cost Revenue Management", "Customer Retention Method", "Campaign Review Meeting"],
                "answer": "Customer Relationship Management"
            },
            {
                "question": "What is the AIDA model in marketing?",
                "options": ["Awareness, Interest, Desire, Action", "Analyze, Implement, Develop, Assess", "Attract, Identify, Deliver, Advertise", "Assess, Investigate, Decide, Act"],
                "answer": "Awareness, Interest, Desire, Action"
            },
            {
                "question": "Which pricing strategy charges the highest price initially and lowers over time?",
                "options": ["Price Skimming", "Penetration Pricing", "Cost Plus Pricing", "Competitive Pricing"],
                "answer": "Price Skimming"
            },
            {
                "question": "Which of these is a common KPI for social media marketing?",
                "options": ["Engagement Rate", "Gross Profit", "Employee Turnover", "Inventory Levels"],
                "answer": "Engagement Rate"
            },
            {
                "question": "What is meant by 'brand loyalty'?",
                "options": ["Customers repeatedly buy the same brand", "Customers switch brands often", "Brand’s financial value", "Brand’s advertising budget"],
                "answer": "Customers repeatedly buy the same brand"
            },
            {
                "question": "Which tool helps visualize customer journey?",
                "options": ["Customer Journey Map", "Sales Funnel", "SWOT Analysis", "Gantt Chart"],
                "answer": "Customer Journey Map"
            },
            {
                "question": "What is a unique feature of guerrilla marketing?",
                "options": ["Low-cost, creative tactics", "High budget, traditional ads", "Focus on product features", "Long-term campaigns"],
                "answer": "Low-cost, creative tactics"
            },
            {
                "question": "Which method measures the success of an email marketing campaign?",
                "options": ["Open Rate", "Bounce Rate", "Click-Through Rate", "All of these"],
                "answer": "All of these"
            },
            {
                "question": "Which analysis examines external macro-environmental factors?",
                "options": ["PESTLE Analysis", "SWOT Analysis", "Gap Analysis", "Competitive Analysis"],
                "answer": "PESTLE Analysis"
            },

            {
                "question": "What is the main objective of product lifecycle management?",
                "options": ["Manage product from launch to decline", "Increase sales force", "Develop new advertising", "Reduce production costs"],
                "answer": "Manage product from launch to decline"
            },
            {
                "question": "Which term describes the total sales generated from marketing activities?",
                "options": ["Revenue", "Market Share", "Profit Margin", "Cost of Goods Sold"],
                "answer": "Revenue"
            },
            {
                "question": "Which type of marketing focuses on building long-term customer relationships?",
                "options": ["Relationship Marketing", "Transactional Marketing", "Direct Marketing", "Guerrilla Marketing"],
                "answer": "Relationship Marketing"
            },
            {
                "question": "Which of the following is a pull marketing strategy?",
                "options": ["Advertising to create demand", "Discounts to clear inventory", "Personal selling", "Trade shows"],
                "answer": "Advertising to create demand"
            },
            {
                "question": "What is the role of public relations in marketing?",
                "options": ["Manage brand image", "Set product prices", "Design packaging", "Manage inventory"],
                "answer": "Manage brand image"
            },
            {
                "question": "Which technique helps in identifying customer needs?",
                "options": ["Market Research", "Production Planning", "Financial Auditing", "Inventory Management"],
                "answer": "Market Research"
            },
            {
                "question": "What does 'conversion rate' mean?",
                "options": ["Percentage of visitors who take desired action", "Number of ads displayed", "Total revenue", "Customer satisfaction score"],
                "answer": "Percentage of visitors who take desired action"
            },
            {
                "question": "Which marketing channel is best for visual product promotion?",
                "options": ["Instagram", "Email", "Text Messaging", "Radio"],
                "answer": "Instagram"
            },
            {
                "question": "What is the primary focus of direct marketing?",
                "options": ["Direct communication with target customers", "Mass advertising", "Brand development", "Product design"],
                "answer": "Direct communication with target customers"
            },
            {
                "question": "What is a key benefit of influencer marketing?",
                "options": ["Authentic endorsements", "Low cost", "High control over messaging", "Guaranteed sales"],
                "answer": "Authentic endorsements"
            }
        ],
        "Accountant": [
            {
                "question": "What is the primary purpose of accounting?",
                "options": ["Record financial transactions", "Design products", "Manage human resources", "Develop software"],
                "answer": "Record financial transactions"
            },
            {
                "question": "Which financial statement shows a company’s assets, liabilities, and equity?",
                "options": ["Balance Sheet", "Income Statement", "Cash Flow Statement", "Statement of Retained Earnings"],
                "answer": "Balance Sheet"
            },
            {
                "question": "What does GAAP stand for?",
                "options": ["Generally Accepted Accounting Principles", "General Accounting and Auditing Procedures", "Government Approved Accounting Policies", "Global Accounting Application Process"],
                "answer": "Generally Accepted Accounting Principles"
            },
            {
                "question": "Which account type increases with a debit?",
                "options": ["Assets", "Liabilities", "Revenue", "Equity"],
                "answer": "Assets"
            },
            {
                "question": "Which accounting principle requires expenses to be recorded in the period they are incurred?",
                "options": ["Matching Principle", "Revenue Recognition Principle", "Cost Principle", "Conservatism Principle"],
                "answer": "Matching Principle"
            },
            {
                "question": "What is depreciation?",
                "options": ["Allocation of an asset’s cost over its useful life", "An increase in asset value", "Revenue earned from sales", "Payment of dividends"],
                "answer": "Allocation of an asset’s cost over its useful life"
            },
            {
                "question": "Which financial statement shows profitability over a period?",
                "options": ["Income Statement", "Balance Sheet", "Cash Flow Statement", "Statement of Changes in Equity"],
                "answer": "Income Statement"
            },
            {
                "question": "What type of account is 'Accounts Payable'?",
                "options": ["Liability", "Asset", "Equity", "Revenue"],
                "answer": "Liability"
            },
            {
                "question": "What is the accounting equation?",
                "options": ["Assets = Liabilities + Equity", "Assets = Revenue + Expenses", "Liabilities = Assets + Equity", "Equity = Assets + Liabilities"],
                "answer": "Assets = Liabilities + Equity"
            },
            {
                "question": "What does FIFO stand for in inventory accounting?",
                "options": ["First In, First Out", "Fast Inventory For Operations", "Final In, Final Out", "First Inventory Financial Order"],
                "answer": "First In, First Out"
            },

            {
                "question": "Which of the following is a current asset?",
                "options": ["Cash", "Building", "Equipment", "Land"],
                "answer": "Cash"
            },
            {
                "question": "What is accrual accounting?",
                "options": ["Recording revenues and expenses when they occur, regardless of cash flow", "Recording only when cash is received or paid", "Only recording cash transactions", "Ignoring expenses"],
                "answer": "Recording revenues and expenses when they occur, regardless of cash flow"
            },
            {
                "question": "Which account is increased with a credit?",
                "options": ["Revenue", "Assets", "Expenses", "Drawings"],
                "answer": "Revenue"
            },
            {
                "question": "What is the purpose of a trial balance?",
                "options": ["Ensure total debits equal total credits", "Calculate net income", "Prepare tax returns", "Manage payroll"],
                "answer": "Ensure total debits equal total credits"
            },
            {
                "question": "Which financial statement reports cash inflows and outflows?",
                "options": ["Cash Flow Statement", "Income Statement", "Balance Sheet", "Equity Statement"],
                "answer": "Cash Flow Statement"
            },
            {
                "question": "What does 'liquidity' measure?",
                "options": ["Ability to meet short-term obligations", "Profitability", "Long-term growth", "Stock price"],
                "answer": "Ability to meet short-term obligations"
            },
            {
                "question": "What is a ledger?",
                "options": ["Book of final accounts", "Financial statement", "Tax report", "Payroll document"],
                "answer": "Book of final accounts"
            },
            {
                "question": "Which is an example of a fixed asset?",
                "options": ["Machinery", "Inventory", "Accounts Receivable", "Cash"],
                "answer": "Machinery"
            },
            {
                "question": "What is a 'chart of accounts'?",
                "options": ["List of all accounts used by a company", "Summary of transactions", "Financial report", "Audit document"],
                "answer": "List of all accounts used by a company"
            },
            {
                "question": "Which method of inventory valuation assumes the most recent purchases are sold first?",
                "options": ["LIFO", "FIFO", "Weighted Average", "Specific Identification"],
                "answer": "LIFO"
            },

            {
                "question": "What is goodwill in accounting?",
                "options": ["Intangible asset representing brand value or reputation", "Tangible asset like machinery", "Cash on hand", "A liability"],
                "answer": "Intangible asset representing brand value or reputation"
            },
            {
                "question": "What is the purpose of depreciation expense?",
                "options": ["Match cost of asset to revenue it helps generate", "Increase profits", "Reduce taxes illegally", "Report cash flow"],
                "answer": "Match cost of asset to revenue it helps generate"
            },
            {
                "question": "Which document authorizes a payment?",
                "options": ["Invoice", "Purchase Order", "Receipt", "Journal Entry"],
                "answer": "Invoice"
            },
            {
                "question": "What is a 'dividend'?",
                "options": ["Distribution of profit to shareholders", "Company debt", "Expense", "Revenue"],
                "answer": "Distribution of profit to shareholders"
            },
            {
                "question": "Which of the following is NOT a financial statement?",
                "options": ["Sales Forecast", "Income Statement", "Balance Sheet", "Cash Flow Statement"],
                "answer": "Sales Forecast"
            },
            {
                "question": "What does an audit involve?",
                "options": ["Independent examination of financial statements", "Sales promotion", "Financial planning", "Product development"],
                "answer": "Independent examination of financial statements"
            },
            {
                "question": "Which account is classified under equity?",
                "options": ["Common Stock", "Accounts Payable", "Inventory", "Prepaid Expenses"],
                "answer": "Common Stock"
            },
            {
                "question": "What is an expense?",
                "options": ["Outflow of resources to generate revenue", "Income earned", "Asset increase", "Equity increase"],
                "answer": "Outflow of resources to generate revenue"
            },
            {
                "question": "What is the purpose of a journal entry?",
                "options": ["Record individual financial transactions", "Prepare tax returns", "Generate invoices", "Create budgets"],
                "answer": "Record individual financial transactions"
            },
            {
                "question": "Which accounting concept assumes the business will continue to operate?",
                "options": ["Going Concern", "Matching Principle", "Conservatism", "Materiality"],
                "answer": "Going Concern"
            },

            {
                "question": "Which is an example of a liability?",
                "options": ["Bank loan", "Equipment", "Cash", "Retained earnings"],
                "answer": "Bank loan"
            },
            {
                "question": "What is accounts receivable?",
                "options": ["Money owed by customers", "Money owed to suppliers", "Cash in bank", "Owner's equity"],
                "answer": "Money owed by customers"
            },
            {
                "question": "What is the double-entry system?",
                "options": ["Every transaction affects at least two accounts", "Accounting done twice", "Only revenues are recorded", "Only expenses are recorded"],
                "answer": "Every transaction affects at least two accounts"
            },
            {
                "question": "Which accounting period is commonly used?",
                "options": ["Fiscal Year", "Leap Year", "Calendar Year", "Quarter"],
                "answer": "Fiscal Year"
            },
            {
                "question": "Which principle advises to choose the least optimistic estimate when uncertain?",
                "options": ["Conservatism", "Consistency", "Materiality", "Matching"],
                "answer": "Conservatism"
            },
            {
                "question": "What is the formula for net income?",
                "options": ["Revenue - Expenses", "Assets - Liabilities", "Assets + Liabilities", "Cash Inflows - Cash Outflows"],
                "answer": "Revenue - Expenses"
            },
            {
                "question": "Which document records detailed transactions in chronological order?",
                "options": ["Journal", "Ledger", "Trial Balance", "Balance Sheet"],
                "answer": "Journal"
            },
            {
                "question": "What is an intangible asset?",
                "options": ["Non-physical asset like patents or trademarks", "Cash", "Equipment", "Inventory"],
                "answer": "Non-physical asset like patents or trademarks"
            },
            {
                "question": "What does ROI stand for?",
                "options": ["Return on Investment", "Rate of Interest", "Revenue over Income", "Record of Inventory"],
                "answer": "Return on Investment"
            },
            {
                "question": "What is a prepaid expense?",
                "options": ["Payment made in advance for goods or services", "Expense incurred but not yet paid", "Revenue earned in advance", "Loan payable"],
                "answer": "Payment made in advance for goods or services"
            }
        ],
        "Financial Analyst": [
            {
                "question": "What is the primary role of a financial analyst?",
                "options": ["Evaluate investment opportunities", "Manage employee payroll", "Design marketing campaigns", "Develop software"],
                "answer": "Evaluate investment opportunities"
            },
            {
                "question": "What does ROI stand for?",
                "options": ["Return on Investment", "Rate of Interest", "Revenue over Income", "Record of Inventory"],
                "answer": "Return on Investment"
            },
            {
                "question": "Which financial statement shows a company's revenues and expenses?",
                "options": ["Income Statement", "Balance Sheet", "Cash Flow Statement", "Statement of Retained Earnings"],
                "answer": "Income Statement"
            },
            {
                "question": "What does EBITDA stand for?",
                "options": ["Earnings Before Interest, Taxes, Depreciation, and Amortization", "Earnings Before Income Taxes and Debt Adjustment", "Equity Before Interest and Taxes", "Earnings Based on Internal Trading Analysis"],
                "answer": "Earnings Before Interest, Taxes, Depreciation, and Amortization"
            },
            {
                "question": "Which ratio measures a company's ability to pay short-term obligations?",
                "options": ["Current Ratio", "Debt to Equity Ratio", "Return on Assets", "Price to Earnings Ratio"],
                "answer": "Current Ratio"
            },
            {
                "question": "What is a discounted cash flow (DCF) analysis used for?",
                "options": ["Valuing an investment based on its future cash flows", "Calculating tax liabilities", "Managing inventory levels", "Preparing budgets"],
                "answer": "Valuing an investment based on its future cash flows"
            },
            {
                "question": "What does the term 'market capitalization' mean?",
                "options": ["Total value of a company's outstanding shares", "Total revenue in a year", "Company's debt level", "Net income after tax"],
                "answer": "Total value of a company's outstanding shares"
            },
            {
                "question": "What is beta in finance?",
                "options": ["Measure of a stock's volatility compared to the market", "Interest rate on bonds", "Company's profit margin", "Stock price"],
                "answer": "Measure of a stock's volatility compared to the market"
            },
            {
                "question": "Which financial model estimates the cost of equity?",
                "options": ["Capital Asset Pricing Model (CAPM)", "Discounted Cash Flow (DCF)", "Dividend Discount Model (DDM)", "Monte Carlo Simulation"],
                "answer": "Capital Asset Pricing Model (CAPM)"
            },
            {
                "question": "What does the price-to-earnings (P/E) ratio indicate?",
                "options": ["Valuation of a company relative to its earnings", "Debt level", "Profit margin", "Cash flow"],
                "answer": "Valuation of a company relative to its earnings"
            },

            {
                "question": "Which of the following is considered a liquidity ratio?",
                "options": ["Quick Ratio", "Debt to Equity Ratio", "Return on Investment", "Gross Margin"],
                "answer": "Quick Ratio"
            },
            {
                "question": "What is a common use of financial forecasting?",
                "options": ["Predicting future financial performance", "Auditing financial statements", "Tax preparation", "Employee training"],
                "answer": "Predicting future financial performance"
            },
            {
                "question": "What does leverage refer to in finance?",
                "options": ["Use of borrowed funds to increase investment potential", "Company's cash reserves", "Employee bonuses", "Market share"],
                "answer": "Use of borrowed funds to increase investment potential"
            },
            {
                "question": "Which financial statement provides information about cash inflows and outflows?",
                "options": ["Cash Flow Statement", "Balance Sheet", "Income Statement", "Statement of Retained Earnings"],
                "answer": "Cash Flow Statement"
            },
            {
                "question": "What is the primary objective of portfolio diversification?",
                "options": ["Reduce investment risk", "Maximize taxes", "Increase debt", "Limit asset types"],
                "answer": "Reduce investment risk"
            },
            {
                "question": "What does EBIT stand for?",
                "options": ["Earnings Before Interest and Taxes", "Earnings Before Income Tax", "Equity Based Investment Trust", "Earnings Before Inflation and Taxes"],
                "answer": "Earnings Before Interest and Taxes"
            },
            {
                "question": "Which type of analysis compares financial ratios to industry benchmarks?",
                "options": ["Benchmarking", "Variance Analysis", "Trend Analysis", "Horizontal Analysis"],
                "answer": "Benchmarking"
            },
            {
                "question": "What is the role of working capital management?",
                "options": ["Manage short-term assets and liabilities", "Increase long-term debt", "Prepare financial statements", "Conduct audits"],
                "answer": "Manage short-term assets and liabilities"
            },
            {
                "question": "Which is an example of a fixed cost?",
                "options": ["Rent", "Raw materials", "Sales commission", "Utilities"],
                "answer": "Rent"
            },
            {
                "question": "What is meant by capital budgeting?",
                "options": ["Process of planning and managing long-term investments", "Daily cash handling", "Payroll management", "Tax filing"],
                "answer": "Process of planning and managing long-term investments"
            },

            {
                "question": "What is the difference between systematic and unsystematic risk?",
                "options": ["Systematic risk affects the entire market; unsystematic risk is specific to a company", "Systematic risk is company-specific; unsystematic risk affects the entire market", "Both are the same", "Neither affects investments"],
                "answer": "Systematic risk affects the entire market; unsystematic risk is specific to a company"
            },
            {
                "question": "What is the purpose of a sensitivity analysis?",
                "options": ["Assess impact of changes in variables on outcomes", "Calculate net income", "Prepare tax returns", "Manage payroll"],
                "answer": "Assess impact of changes in variables on outcomes"
            },
            {
                "question": "Which method is commonly used for valuing a company based on future dividends?",
                "options": ["Dividend Discount Model", "CAPM", "Discounted Cash Flow", "Price/Earnings Ratio"],
                "answer": "Dividend Discount Model"
            },
            {
                "question": "What is the primary benefit of financial ratios?",
                "options": ["Facilitate comparison and analysis of financial statements", "Calculate taxes", "Record transactions", "Manage budgets"],
                "answer": "Facilitate comparison and analysis of financial statements"
            },
            {
                "question": "What is the meaning of the debt-to-equity ratio?",
                "options": ["Measures company's financial leverage", "Company's profitability", "Liquidity status", "Revenue growth"],
                "answer": "Measures company's financial leverage"
            },
            {
                "question": "What is meant by capital structure?",
                "options": ["Mix of debt and equity financing", "Company’s cash flow", "Revenue sources", "Inventory management"],
                "answer": "Mix of debt and equity financing"
            },
            {
                "question": "What does the term 'amortization' refer to?",
                "options": ["Spreading the cost of an intangible asset over time", "Payment of dividends", "Recording revenue", "Calculating taxes"],
                "answer": "Spreading the cost of an intangible asset over time"
            },
            {
                "question": "Which investment is generally considered the least risky?",
                "options": ["Government bonds", "Stocks", "Real estate", "Commodities"],
                "answer": "Government bonds"
            },
            {
                "question": "What is the main focus of ratio analysis?",
                "options": ["Evaluate financial performance", "Create marketing strategies", "Design products", "Manage employees"],
                "answer": "Evaluate financial performance"
            },
            {
                "question": "What is the primary goal of financial risk management?",
                "options": ["Identify, analyze, and mitigate financial risks", "Increase revenues", "Reduce taxes", "Manage employees"],
                "answer": "Identify, analyze, and mitigate financial risks"
            },
            {
                "question": "Which financial instrument represents ownership in a company?",
                "options": ["Stock", "Bond", "Option", "Derivative"],
                "answer": "Stock"
            },
            {
                "question": "What is the significance of the weighted average cost of capital (WACC)?",
                "options": ["Average rate a company pays to finance its assets", "Interest rate on bank loans", "Dividend yield", "Stock price"],
                "answer": "Average rate a company pays to finance its assets"
            },
            {
                "question": "What does liquidity risk mean?",
                "options": ["Risk of being unable to meet short-term financial demands", "Risk of losing market share", "Risk of product failure", "Risk of employee turnover"],
                "answer": "Risk of being unable to meet short-term financial demands"
            },
            {
                "question": "What is financial modeling?",
                "options": ["Creating a numerical representation of a company's financial performance", "Managing payroll", "Preparing tax returns", "Marketing analysis"],
                "answer": "Creating a numerical representation of a company's financial performance"
            },
            {
                "question": "Which metric is used to assess profitability?",
                "options": ["Net Profit Margin", "Current Ratio", "Debt to Equity", "Inventory Turnover"],
                "answer": "Net Profit Margin"
            },
            {
                "question": "What is the purpose of a cash flow forecast?",
                "options": ["Predict future cash inflows and outflows", "Calculate net income", "Prepare tax returns", "Manage employees"],
                "answer": "Predict future cash inflows and outflows"
            },
            {
                "question": "Which type of analysis compares financial results over different periods?",
                "options": ["Trend Analysis", "Ratio Analysis", "Variance Analysis", "Benchmarking"],
                "answer": "Trend Analysis"
            },
            {
                "question": "What does 'capital gain' mean?",
                "options": ["Profit from selling an asset at a higher price than purchase", "Dividend payment", "Interest income", "Depreciation expense"],
                "answer": "Profit from selling an asset at a higher price than purchase"
            },
            {
                "question": "Which of the following is NOT a typical duty of a financial analyst?",
                "options": ["Conduct marketing campaigns", "Prepare financial reports", "Analyze financial data", "Assist in budgeting"],
                "answer": "Conduct marketing campaigns"
            }
        ],
        "Sales Manager": [
            {
                "question": "What is the primary role of a sales manager?",
                "options": ["Lead the sales team", "Design products", "Manage production", "Handle customer service"],
                "answer": "Lead the sales team"
            },
            {
                "question": "Which technique is used to identify potential customers?",
                "options": ["Prospecting", "Advertising", "Market research", "Branding"],
                "answer": "Prospecting"
            },
            {
                "question": "What does CRM stand for?",
                "options": ["Customer Relationship Management", "Cost Revenue Management", "Customer Retention Method", "Campaign Review Meeting"],
                "answer": "Customer Relationship Management"
            },
            {
                "question": "Which of the following is a key performance indicator (KPI) for sales?",
                "options": ["Sales volume", "Employee turnover", "Market share", "Customer satisfaction"],
                "answer": "Sales volume"
            },
            {
                "question": "What is a sales funnel?",
                "options": ["Stages of customer buying process", "Company’s revenue source", "Product lifecycle", "Marketing strategy"],
                "answer": "Stages of customer buying process"
            },
            {
                "question": "Which sales technique involves personalized communication?",
                "options": ["Consultative selling", "Cold calling", "Mass marketing", "Advertising"],
                "answer": "Consultative selling"
            },
            {
                "question": "What is upselling?",
                "options": ["Encouraging customers to buy a higher-end product", "Reducing product price", "Offering discounts", "Bundling products"],
                "answer": "Encouraging customers to buy a higher-end product"
            },
            {
                "question": "Which metric shows the percentage of leads that become customers?",
                "options": ["Conversion rate", "Bounce rate", "Engagement rate", "Open rate"],
                "answer": "Conversion rate"
            },
            {
                "question": "What is the main goal of a sales forecast?",
                "options": ["Predict future sales", "Measure customer satisfaction", "Track employee performance", "Manage inventory"],
                "answer": "Predict future sales"
            },
            {
                "question": "Which sales method involves meeting the customer face-to-face?",
                "options": ["Direct selling", "Telemarketing", "Email marketing", "Social media marketing"],
                "answer": "Direct selling"
            },

            {
                "question": "What is the benefit of territory management in sales?",
                "options": ["Efficient allocation of sales resources", "Product design", "Pricing strategy", "Advertising campaign"],
                "answer": "Efficient allocation of sales resources"
            },
            {
                "question": "What is the purpose of a sales script?",
                "options": ["Guide sales conversations", "Design marketing materials", "Track inventory", "Plan advertising"],
                "answer": "Guide sales conversations"
            },
            {
                "question": "Which of the following is NOT a sales closing technique?",
                "options": ["Assumptive close", "Urgency close", "Complaining close", "Summary close"],
                "answer": "Complaining close"
            },
            {
                "question": "What does 'lead nurturing' involve?",
                "options": ["Building relationships with prospects", "Cold calling", "Advertising", "Discounting products"],
                "answer": "Building relationships with prospects"
            },
            {
                "question": "Which tool helps track sales activities and customer interactions?",
                "options": ["CRM software", "Accounting software", "Project management software", "Inventory software"],
                "answer": "CRM software"
            },
            {
                "question": "What is the main focus of B2B sales?",
                "options": ["Building long-term relationships", "Impulse buying", "Mass marketing", "Social media campaigns"],
                "answer": "Building long-term relationships"
            },
            {
                "question": "What does quota mean in sales?",
                "options": ["Target sales goal", "Customer feedback", "Product price", "Advertising budget"],
                "answer": "Target sales goal"
            },
            {
                "question": "Which of the following is a common challenge in sales management?",
                "options": ["High employee turnover", "Low product quality", "Excess inventory", "Slow production"],
                "answer": "High employee turnover"
            },
            {
                "question": "What is cold calling?",
                "options": ["Calling potential customers without prior contact", "Follow-up call", "Customer support call", "Sales team meeting"],
                "answer": "Calling potential customers without prior contact"
            },
            {
                "question": "Which type of sales is conducted online?",
                "options": ["E-commerce", "Telemarketing", "Direct selling", "Retail selling"],
                "answer": "E-commerce"
            },

            {
                "question": "What is cross-selling?",
                "options": ["Selling related products to an existing customer", "Selling products at a discount", "Selling products in bulk", "Selling through multiple channels"],
                "answer": "Selling related products to an existing customer"
            },
            {
                "question": "Which stage comes after prospecting in the sales process?",
                "options": ["Approach", "Closing", "Follow-up", "Presentation"],
                "answer": "Approach"
            },
            {
                "question": "What does a sales pipeline visualize?",
                "options": ["Progress of sales opportunities", "Company revenue", "Employee productivity", "Marketing campaigns"],
                "answer": "Progress of sales opportunities"
            },
            {
                "question": "Which skill is critical for a sales manager?",
                "options": ["Communication", "Programming", "Graphic design", "Accounting"],
                "answer": "Communication"
            },
            {
                "question": "What is the main objective of sales training?",
                "options": ["Improve selling skills", "Manage inventory", "Develop products", "Handle customer complaints"],
                "answer": "Improve selling skills"
            },
            {
                "question": "Which sales strategy focuses on solving customer problems?",
                "options": ["Solution selling", "Hard selling", "Product selling", "Price selling"],
                "answer": "Solution selling"
            },
            {
                "question": "What is a key advantage of sales automation?",
                "options": ["Increase efficiency", "Reduce product cost", "Improve product design", "Enhance brand image"],
                "answer": "Increase efficiency"
            },
            {
                "question": "What does KPI stand for?",
                "options": ["Key Performance Indicator", "Knowledge Product Inventory", "Key Price Index", "Known Product Information"],
                "answer": "Key Performance Indicator"
            },
            {
                "question": "Which sales method uses referrals from existing customers?",
                "options": ["Referral selling", "Cold calling", "Telemarketing", "Direct mail"],
                "answer": "Referral selling"
            },
            {
                "question": "What is the best way to handle customer objections?",
                "options": ["Listen and respond thoughtfully", "Ignore objections", "Change the topic", "Lower the price immediately"],
                "answer": "Listen and respond thoughtfully"
            },

            {
                "question": "Which is an example of a sales promotion?",
                "options": ["Discount", "Brand logo", "Product packaging", "Corporate social responsibility"],
                "answer": "Discount"
            },
            {
                "question": "What is the purpose of a sales territory?",
                "options": ["Divide sales regions among team members", "Manage marketing campaigns", "Develop new products", "Track expenses"],
                "answer": "Divide sales regions among team members"
            },
            {
                "question": "What is the follow-up stage in sales?",
                "options": ["Maintaining contact after sale", "Initial contact", "Product demonstration", "Closing the sale"],
                "answer": "Maintaining contact after sale"
            },
            {
                "question": "Which of the following is a customer acquisition strategy?",
                "options": ["Lead generation", "Product development", "Inventory management", "Accounting"],
                "answer": "Lead generation"
            },
            {
                "question": "What is the importance of sales forecasting?",
                "options": ["Plan resources and targets", "Design product packaging", "Create marketing campaigns", "Manage customer service"],
                "answer": "Plan resources and targets"
            },
            {
                "question": "Which software is commonly used by sales managers?",
                "options": ["Salesforce", "Photoshop", "AutoCAD", "SAP"],
                "answer": "Salesforce"
            },
            {
                "question": "What is a common way to motivate a sales team?",
                "options": ["Incentives and commissions", "Reduce working hours", "Increase product prices", "Cut marketing budget"],
                "answer": "Incentives and commissions"
            },
            {
                "question": "What is the main focus of consultative selling?",
                "options": ["Understanding customer needs", "Hard selling", "Price negotiation", "Mass advertising"],
                "answer": "Understanding customer needs"
            },
            {
                "question": "Which report helps sales managers track team performance?",
                "options": ["Sales report", "Financial report", "Marketing report", "Inventory report"],
                "answer": "Sales report"
            },
            {
                "question": "What is the role of territory sales manager?",
                "options": ["Manage sales in a specific geographic area", "Design marketing campaigns", "Develop new products", "Handle customer complaints"],
                "answer": "Manage sales in a specific geographic area"
            }
        ],
        "HR Manager": [
            {
                "question": "What is the primary role of an HR Manager?",
                "options": ["Manage employee relations and organizational culture", "Develop software", "Prepare financial reports", "Design marketing strategies"],
                "answer": "Manage employee relations and organizational culture"
            },
            {
                "question": "What does the acronym KPI stand for in HR?",
                "options": ["Key Performance Indicator", "Knowledge Process Improvement", "Key Project Initiative", "Known Productivity Index"],
                "answer": "Key Performance Indicator"
            },
            {
                "question": "Which act governs workplace discrimination in the US?",
                "options": ["Title VII of the Civil Rights Act", "Fair Labor Standards Act", "Occupational Safety and Health Act", "Family and Medical Leave Act"],
                "answer": "Title VII of the Civil Rights Act"
            },
            {
                "question": "What is the purpose of onboarding?",
                "options": ["Integrate new employees into the organization", "Evaluate employee performance", "Conduct exit interviews", "Manage payroll"],
                "answer": "Integrate new employees into the organization"
            },
            {
                "question": "Which HR function deals with attracting and hiring candidates?",
                "options": ["Recruitment", "Training and Development", "Compensation", "Employee Relations"],
                "answer": "Recruitment"
            },
            {
                "question": "What is a common tool used for evaluating employee performance?",
                "options": ["Performance Appraisal", "Market Analysis", "Risk Assessment", "Financial Forecasting"],
                "answer": "Performance Appraisal"
            },
            {
                "question": "Which law mandates minimum wage and overtime pay in the US?",
                "options": ["Fair Labor Standards Act (FLSA)", "Employee Retirement Income Security Act", "Civil Rights Act", "National Labor Relations Act"],
                "answer": "Fair Labor Standards Act (FLSA)"
            },
            {
                "question": "What is employee engagement?",
                "options": ["Level of employee commitment and motivation", "Number of training hours", "Salary and benefits", "Workplace safety protocols"],
                "answer": "Level of employee commitment and motivation"
            },
            {
                "question": "Which type of interview involves asking candidates the same set of questions?",
                "options": ["Structured Interview", "Unstructured Interview", "Group Interview", "Stress Interview"],
                "answer": "Structured Interview"
            },
            {
                "question": "What does HRIS stand for?",
                "options": ["Human Resource Information System", "Human Relations International Society", "Hiring Resource Integrated Software", "Human Resource Investment Strategy"],
                "answer": "Human Resource Information System"
            },

            {
                "question": "What is the primary objective of training and development?",
                "options": ["Improve employee skills and knowledge", "Hire new employees", "Manage payroll", "Handle legal compliance"],
                "answer": "Improve employee skills and knowledge"
            },
            {
                "question": "Which term describes an agreement between employer and employee about working conditions?",
                "options": ["Employment Contract", "Non-Disclosure Agreement", "Performance Plan", "Code of Conduct"],
                "answer": "Employment Contract"
            },
            {
                "question": "What is the purpose of a job description?",
                "options": ["Outline duties and responsibilities of a position", "Describe company history", "Set financial goals", "Plan marketing activities"],
                "answer": "Outline duties and responsibilities of a position"
            },
            {
                "question": "Which type of employee benefits include health insurance and retirement plans?",
                "options": ["Fringe Benefits", "Salary", "Bonuses", "Commissions"],
                "answer": "Fringe Benefits"
            },
            {
                "question": "What is 'succession planning'?",
                "options": ["Preparing for future leadership needs", "Setting salary levels", "Conducting performance reviews", "Organizing team events"],
                "answer": "Preparing for future leadership needs"
            },
            {
                "question": "Which law requires employers to provide reasonable accommodations for disabilities?",
                "options": ["Americans with Disabilities Act (ADA)", "Family and Medical Leave Act", "Equal Pay Act", "Occupational Safety and Health Act"],
                "answer": "Americans with Disabilities Act (ADA)"
            },
            {
                "question": "What is the primary purpose of employee relations?",
                "options": ["Maintain positive employer-employee relationships", "Manage company finances", "Develop marketing campaigns", "Design products"],
                "answer": "Maintain positive employer-employee relationships"
            },
            {
                "question": "What does 'turnover rate' measure?",
                "options": ["Percentage of employees leaving the organization", "New hires per month", "Training hours completed", "Employee satisfaction score"],
                "answer": "Percentage of employees leaving the organization"
            },
            {
                "question": "Which HR process involves identifying skill gaps and planning training?",
                "options": ["Training Needs Analysis", "Performance Review", "Recruitment", "Payroll Management"],
                "answer": "Training Needs Analysis"
            },
            {
                "question": "What is 'employee retention'?",
                "options": ["Strategies to keep employees from leaving", "Hiring new staff", "Evaluating job candidates", "Calculating salaries"],
                "answer": "Strategies to keep employees from leaving"
            },

            {
                "question": "Which method is commonly used to conduct job evaluations?",
                "options": ["Point Factor Method", "SWOT Analysis", "Financial Ratio Analysis", "Time and Motion Study"],
                "answer": "Point Factor Method"
            },
            {
                "question": "What is the primary role of labor unions?",
                "options": ["Represent employee interests in negotiations", "Manage recruitment", "Design training programs", "Prepare financial reports"],
                "answer": "Represent employee interests in negotiations"
            },
            {
                "question": "What is a common disciplinary process step?",
                "options": ["Verbal Warning", "Salary Increase", "Training", "Promotion"],
                "answer": "Verbal Warning"
            },
            {
                "question": "What is the significance of the Equal Employment Opportunity (EEO) laws?",
                "options": ["Prevent workplace discrimination", "Set salary levels", "Manage employee benefits", "Organize team-building events"],
                "answer": "Prevent workplace discrimination"
            },
            {
                "question": "Which tool helps HR monitor attendance and leave?",
                "options": ["Attendance Management System", "Financial Software", "Marketing Dashboard", "Customer Relationship Management"],
                "answer": "Attendance Management System"
            },
            {
                "question": "What is meant by 'compensation strategy'?",
                "options": ["Plan for employee salaries and benefits", "Recruitment plan", "Training schedule", "Workplace safety plan"],
                "answer": "Plan for employee salaries and benefits"
            },
            {
                "question": "Which HR metric measures average time to fill a job position?",
                "options": ["Time to Hire", "Turnover Rate", "Absenteeism Rate", "Employee Satisfaction"],
                "answer": "Time to Hire"
            },
            {
                "question": "What is a 360-degree feedback?",
                "options": ["Performance review involving feedback from multiple sources", "Single manager evaluation", "Customer feedback system", "Financial audit"],
                "answer": "Performance review involving feedback from multiple sources"
            },
            {
                "question": "Which of the following is an example of a non-monetary benefit?",
                "options": ["Flexible work hours", "Health insurance", "Bonus", "Stock options"],
                "answer": "Flexible work hours"
            },
            {
                "question": "What is the function of an employee handbook?",
                "options": ["Communicate company policies and expectations", "Manage payroll", "Conduct interviews", "Analyze financial data"],
                "answer": "Communicate company policies and expectations"
            },
            {
                "question": "Which term describes the legal protection of employee information?",
                "options": ["Data Privacy", "Employee Benefits", "Workforce Planning", "Performance Management"],
                "answer": "Data Privacy"
            },
            {
                "question": "What does 'HR analytics' involve?",
                "options": ["Using data to improve HR decisions", "Managing payroll", "Conducting interviews", "Training employees"],
                "answer": "Using data to improve HR decisions"
            },
            {
                "question": "Which process involves planning and implementing changes in an organization?",
                "options": ["Change Management", "Recruitment", "Training", "Performance Appraisal"],
                "answer": "Change Management"
            },
            {
                "question": "What is the purpose of exit interviews?",
                "options": ["Gather feedback from departing employees", "Hire new employees", "Provide training", "Manage benefits"],
                "answer": "Gather feedback from departing employees"
            },
            {
                "question": "Which HR function is responsible for managing employee grievances?",
                "options": ["Employee Relations", "Recruitment", "Training", "Compensation"],
                "answer": "Employee Relations"
            },
            {
                "question": "What is meant by 'diversity and inclusion' in HR?",
                "options": ["Creating a workplace with varied backgrounds and equitable treatment", "Hiring only one gender", "Increasing salaries", "Limiting employee benefits"],
                "answer": "Creating a workplace with varied backgrounds and equitable treatment"
            },
            {
                "question": "Which software is commonly used for HR management?",
                "options": ["SAP SuccessFactors", "Microsoft Excel", "Adobe Photoshop", "AutoCAD"],
                "answer": "SAP SuccessFactors"
            },
            {
                "question": "What is a key challenge in remote workforce management?",
                "options": ["Maintaining communication and engagement", "Managing physical office space", "Handling payroll taxes", "Conducting physical safety inspections"],
                "answer": "Maintaining communication and engagement"
            },
            {
                "question": "Which of the following is a strategic HR activity?",
                "options": ["Workforce planning", "Taking attendance", "Managing payroll", "Handling office supplies"],
                "answer": "Workforce planning"
            },
            {
                "question": "What is 'employer branding'?",
                "options": ["Promoting the company as a desirable place to work", "Advertising products", "Managing finances", "Conducting training"],
                "answer": "Promoting the company as a desirable place to work"
            },
            {
                "question": "Which of these is an example of a behavioral interview question?",
                "options": ["Describe a time you faced a conflict at work and how you handled it", "What is your expected salary?", "What are your strengths?", "What is your availability?"],
                "answer": "Describe a time you faced a conflict at work and how you handled it"
            }
        ],

    },
    "Science": {
        "Research Scientist": [
            {
                "question": "What is the primary purpose of a literature review?",
                "options": ["Summarize existing knowledge", "Conduct experiments", "Publish results", "Collect samples"],
                "answer": "Summarize existing knowledge"
            },
            {
                "question": "Which method is used to test hypotheses scientifically?",
                "options": ["Experimentation", "Observation", "Brainstorming", "Interviewing"],
                "answer": "Experimentation"
            },
            {
                "question": "What is a control group in an experiment?",
                "options": ["Group not exposed to the variable", "Group exposed to the variable", "Group with extra variables", "Randomly selected participants"],
                "answer": "Group not exposed to the variable"
            },
            {
                "question": "What is peer review?",
                "options": ["Evaluation of research by experts in the field", "Writing a research paper", "Presenting at a conference", "Publishing in a journal"],
                "answer": "Evaluation of research by experts in the field"
            },
            {
                "question": "Which of these is a qualitative research method?",
                "options": ["Interviews", "Surveys", "Statistical analysis", "Laboratory testing"],
                "answer": "Interviews"
            },
            {
                "question": "Which statistical test compares means between two groups?",
                "options": ["t-test", "Chi-square", "Regression", "ANOVA"],
                "answer": "t-test"
            },
            {
                "question": "What is the null hypothesis?",
                "options": ["No effect or difference", "There is an effect", "Data is significant", "Results are biased"],
                "answer": "No effect or difference"
            },
            {
                "question": "What is the significance level (alpha) commonly set at?",
                "options": ["0.05", "0.5", "0.01", "0.10"],
                "answer": "0.05"
            },
            {
                "question": "Which software is commonly used for statistical analysis?",
                "options": ["SPSS", "Photoshop", "AutoCAD", "Excel"],
                "answer": "SPSS"
            },
            {
                "question": "Which type of data is categorical?",
                "options": ["Gender", "Height", "Weight", "Temperature"],
                "answer": "Gender"
            },

            {
                "question": "What is the first step in the scientific method?",
                "options": ["Ask a question", "Collect data", "Analyze results", "Form a hypothesis"],
                "answer": "Ask a question"
            },
            {
                "question": "Which factor is manipulated in an experiment?",
                "options": ["Independent variable", "Dependent variable", "Control variable", "Random variable"],
                "answer": "Independent variable"
            },
            {
                "question": "What is reproducibility in research?",
                "options": ["Ability to replicate results", "Publishing a paper", "Presenting findings", "Collecting data"],
                "answer": "Ability to replicate results"
            },
            {
                "question": "Which document outlines the plan for research?",
                "options": ["Research proposal", "Grant application", "Lab report", "Patent application"],
                "answer": "Research proposal"
            },
            {
                "question": "What is an abstract in a research paper?",
                "options": ["Brief summary of the study", "Detailed methodology", "List of references", "Data analysis"],
                "answer": "Brief summary of the study"
            },
            {
                "question": "What does IRB stand for in research ethics?",
                "options": ["Institutional Review Board", "Internal Research Bureau", "International Research Board", "Independent Review Body"],
                "answer": "Institutional Review Board"
            },
            {
                "question": "Which research design involves following subjects over time?",
                "options": ["Longitudinal study", "Cross-sectional study", "Case study", "Experimental study"],
                "answer": "Longitudinal study"
            },
            {
                "question": "What is a hypothesis?",
                "options": ["Testable prediction", "Random guess", "Fact", "Theory"],
                "answer": "Testable prediction"
            },
            {
                "question": "Which measure describes the central tendency of data?",
                "options": ["Mean", "Variance", "Range", "Standard deviation"],
                "answer": "Mean"
            },
            {
                "question": "Which is NOT a primary source of data?",
                "options": ["Textbook", "Survey", "Interview", "Observation"],
                "answer": "Textbook"
            },

            {
                "question": "What is the role of a principal investigator?",
                "options": ["Lead the research project", "Manage laboratory equipment", "Conduct data entry", "Review literature"],
                "answer": "Lead the research project"
            },
            {
                "question": "What is data triangulation?",
                "options": ["Using multiple data sources to increase validity", "Collecting data only once", "Using one research method", "Ignoring conflicting data"],
                "answer": "Using multiple data sources to increase validity"
            },
            {
                "question": "What is a variable in research?",
                "options": ["Characteristic that can change", "Fixed number", "Data entry method", "Graph type"],
                "answer": "Characteristic that can change"
            },
            {
                "question": "Which research method uses random assignment?",
                "options": ["Experimental", "Observational", "Case study", "Survey"],
                "answer": "Experimental"
            },
            {
                "question": "What is the purpose of a literature review?",
                "options": ["Identify gaps and build background", "Analyze data", "Write conclusions", "Collect samples"],
                "answer": "Identify gaps and build background"
            },
            {
                "question": "Which is an example of secondary data?",
                "options": ["Government reports", "Survey responses", "Lab measurements", "Interviews"],
                "answer": "Government reports"
            },
            {
                "question": "What does ‘validity’ in research refer to?",
                "options": ["Accuracy of the study", "Sample size", "Number of variables", "Research budget"],
                "answer": "Accuracy of the study"
            },
            {
                "question": "Which type of research aims to solve practical problems?",
                "options": ["Applied research", "Basic research", "Theoretical research", "Descriptive research"],
                "answer": "Applied research"
            },
            {
                "question": "What is a case study?",
                "options": ["Detailed analysis of a single subject", "Survey of many subjects", "Lab experiment", "Review article"],
                "answer": "Detailed analysis of a single subject"
            },
            {
                "question": "Which ethical principle protects participants from harm?",
                "options": ["Beneficence", "Justice", "Confidentiality", "Integrity"],
                "answer": "Beneficence"
            },

            {
                "question": "What is ‘bias’ in research?",
                "options": ["Systematic error", "Random error", "Accurate measurement", "Valid conclusion"],
                "answer": "Systematic error"
            },
            {
                "question": "What is a ‘sample’ in research?",
                "options": ["Subset of population", "Whole population", "Data type", "Research tool"],
                "answer": "Subset of population"
            },
            {
                "question": "Which is an example of quantitative data?",
                "options": ["Number of cells", "Interview transcripts", "Focus group notes", "Photos"],
                "answer": "Number of cells"
            },
            {
                "question": "What is an informed consent?",
                "options": ["Permission given with understanding of risks", "Random selection", "Anonymous survey", "Data collection method"],
                "answer": "Permission given with understanding of risks"
            },
            {
                "question": "Which is a measure of variability in data?",
                "options": ["Standard deviation", "Mean", "Median", "Mode"],
                "answer": "Standard deviation"
            },
            {
                "question": "What is a hypothesis test?",
                "options": ["Statistical method to accept or reject hypothesis", "Method to collect data", "Type of survey", "Data cleaning process"],
                "answer": "Statistical method to accept or reject hypothesis"
            },
            {
                "question": "Which is NOT part of the scientific method?",
                "options": ["Guessing", "Observation", "Hypothesis", "Experiment"],
                "answer": "Guessing"
            },
            {
                "question": "What is the difference between qualitative and quantitative research?",
                "options": ["Qualitative is descriptive; quantitative is numerical", "Qualitative uses numbers; quantitative uses words", "Both are the same", "Quantitative is always better"],
                "answer": "Qualitative is descriptive; quantitative is numerical"
            },
            {
                "question": "What is a dependent variable?",
                "options": ["Variable affected by changes", "Variable controlled by researcher", "Random variable", "Fixed constant"],
                "answer": "Variable affected by changes"
            },
            {
                "question": "Which scientific element represents a tested explanation?",
                "options": ["Theory", "Law", "Fact", "Hypothesis"],
                "answer": "Theory"
            },
            {
                "question": "What is a literature gap?",
                "options": ["Unexplored or underexplored area in research", "Well-studied topic", "Error in data", "Research bias"],
                "answer": "Unexplored or underexplored area in research"
            },
            {
                "question": "What is the role of a lab notebook?",
                "options": ["Document experiments and results", "Store chemicals", "Analyze data", "Publish findings"],
                "answer": "Document experiments and results"
            }
        ],
        "Lab Technician": [
            {
                "question": "Which instrument requires daily calibration?",
                "options": ["Pipette", "Hammer", "Clock", "Printer"],
                "answer": "Pipette"
            },
            {
                "question": "What must you do to avoid cross‑contamination?",
                "options": ["Change gloves and clean", "Reuse gloves", "Ignore labels", "Skip cleaning"],
                "answer": "Change gloves and clean"
            },
            {
                "question": "What is SOP an acronym for?",
                "options": ["Standard Operating Procedure", "Sample Operative Process", "System Optimization Plan", "Safe Operation Protocol"],
                "answer": "Standard Operating Procedure"
            },
            {
                "question": "Which principle ensures data traceability?",
                "options": ["Good Laboratory Practice (GLP)", "Guesswork", "No documentation", "Random logging"],
                "answer": "Good Laboratory Practice (GLP)"
            },
            {
                "question": "What is the first step in troubleshooting equipment?",
                "options": ["Check power and settings", "Throw it away", "Turn blind", "Start experiment"],
                "answer": "Check power and settings"
            },
            {
                "question": "What prevents contamination during sample prep?",
                "options": ["Sterile workspace", "Crowded bench", "Unlabeled tubes", "Open containers"],
                "answer": "Sterile workspace"
            },
            {
                "question": "Where should hazardous waste go?",
                "options": ["Proper disposal bins", "Trash can", "Sink", "Desk drawer"],
                "answer": "Proper disposal bins"
            },
            {
                "question": "What is LIMS used for?",
                "options": ["Track samples and data", "Play music", "Design posters", "Book meetings"],
                "answer": "Track samples and data"
            },
            {
                "question": "Why keep calibration logs?",
                "options": ["Ensure accuracy trace", "Forget history", "Hide errors", "Ignore issues"],
                "answer": "Ensure accuracy trace"
            },
            {
                "question": "Which PPE is essential in the lab?",
                "options": ["Lab coat", "T‑shirt", "Shorts", "Flip‑flops"],
                "answer": "Lab coat"
            },

            {
                "question": "Why use controls in testing?",
                "options": ["Verify test is working", "Skip checks", "Rely guesses", "Ignore results"],
                "answer": "Verify test is working"
            },
            {
                "question": "How to maintain equipment?",
                "options": ["Clean and inspect regularly", "Never clean", "Ignore wear", "Only use once"],
                "answer": "Clean and inspect regularly"
            },
            {
                "question": "How do you handle error in data entry?",
                "options": ["Document and correct", "Ignore error", "Delete file", "Start over"],
                "answer": "Document and correct"
            },
            {
                "question": "What is a biological safety cabinet used for?",
                "options": ["Protect user from biohazards", "Store files", "Heat samples", "Dry glassware"],
                "answer": "Protect user from biohazards"
            },
            {
                "question": "Why run duplicates?",
                "options": ["Improve reliability", "Waste resources", "Ignore variation", "Remove error only"],
                "answer": "Improve reliability"
            },
            {
                "question": "Which ensures sample identity?",
                "options": ["Clearly labeled containers", "Guess labeling", "Unlabeled samples", "Random storage"],
                "answer": "Clearly labeled containers"
            },
            {
                "question": "What is a SOP used for?",
                "options": ["Standardize workflow", "Avoid work", "Hide steps", "Guess process"],
                "answer": "Standardize workflow"
            },
            {
                "question": "How do you store reagents properly?",
                "options": ["Follow manufacturer guidelines", "Room temperature random", "Freezer only", "Leave in sunlight"],
                "answer": "Follow manufacturer guidelines"
            },
            {
                "question": "Why clean work areas?",
                "options": ["Prevent contamination", "Worsen results", "Ignore spills", "Delay work"],
                "answer": "Prevent contamination"
            },
            {
                "question": "What to do with broken glass?",
                "options": ["Use sharps bin", "Trash", "Keep on bench", "Hide"],
                "answer": "Use sharps bin"
            },

            {
                "question": "How to manage inventory?",
                "options": ["Track usage and reorder", "Ignore stock", "Hold expired", "Store endlessly"],
                "answer": "Track usage and reorder"
            },
            {
                "question": "How to organize lab records?",
                "options": ["By date/file/type", "All mixed", "Delete outdated", "Single file"],
                "answer": "By date/file/type"
            },
            {
                "question": "Why run calibrations regularly?",
                "options": ["Ensure accurate results", "Waste time", "Ignore drift", "One-time test"],
                "answer": "Ensure accurate results"
            },
            {
                "question": "What is PPE for?",
                "options": ["Personal protection", "Decor", "Comfort", "Office wear"],
                "answer": "Personal protection"
            },
            {
                "question": "How to deal with spill?",
                "options": ["Follow spill protocol", "Ignore spill", "Wipe casually", "Leave for others"],
                "answer": "Follow spill protocol"
            },
            {
                "question": "When should you ask for help?",
                "options": ["When unsure", "Never ask", "Always guess", "Ignore problem"],
                "answer": "When unsure"
            },
            {
                "question": "Why document steps?",
                "options": ["Ensure reproducibility", "Forget details", "Cover failures", "Blame colleagues"],
                "answer": "Ensure reproducibility"
            },
            {
                "question": "Benefit of LIMS?",
                "options": ["Reduce errors, traceability", "Manual logs only", "Increase paperwork", "Hide data"],
                "answer": "Reduce errors, traceability"
            },
            {
                "question": "How to prioritize tasks?",
                "options": ["Based on urgency and safety", "Random choice", "Ignore deadlines", "Complete less critical first"],
                "answer": "Based on urgency and safety"
            },
            {
                "question": "How to verify unexpected results?",
                "options": ["Repeat test, check controls", "Ignore result", "Report blindly", "Adjust result to expected"],
                "answer": "Repeat test, check controls"
            },
            {
                "question": "What to do after task completion?",
                "options": ["Clean and document", "Leave dirty", "Skip recording", "Forget to log"],
                "answer": "Clean and document"
            },
            {
                "question": "Why follow GLP?",
                "options": ["Ensure data quality", "Ignore quality", "Work faster", "Reduce steps"],
                "answer": "Ensure data quality"
            },
            {
                "question": "How to deal with hazardous labels?",
                "options": ["Read and follow instructions", "Ignore labels", "Use randomly", "Guess hazard"],
                "answer": "Read and follow instructions"
            }
        ],
        "Chemist": [
            {"question": "What is the atomic number of carbon?", "options": ["6", "8", "12", "14"], "answer": "6"},
            {"question": "Which pH value is neutral at 25 °C?", "options": ["7", "0", "14", "4"], "answer": "7"},
            {
                "question": "Which bond forms between oppositely charged ions?",
                "options": ["Ionic bond", "Covalent bond", "Hydrogen bond", "Van der Waals"],
                "answer": "Ionic bond"
            },
            {
                "question": "What is Avogadro’s number?",
                "options": ["6.022×10²³", "3.14", "9.81", "1.602×10⁻¹⁹"],
                "answer": "6.022×10²³"
            },
            {
                "question": "What’s the molar mass of H₂O?",
                "options": ["18 g/mol", "28 g/mol", "32 g/mol", "44 g/mol"],
                "answer": "18 g/mol"
            },
            {
                "question": "What does pH measure?",
                "options": ["Hydrogen ion concentration", "Mass", "Pressure", "Temperature"],
                "answer": "Hydrogen ion concentration"
            },
            {"question": "Which molecule is nonpolar?", "options": ["O₂", "H₂O", "NH₃", "HCl"], "answer": "O₂"},
            {
                "question": "What is the main component of natural gas?",
                "options": ["Methane", "Carbon dioxide", "Propane", "Ethane"],
                "answer": "Methane"
            },
            {
                "question": "Which gas is produced in fermentation by yeast?",
                "options": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
                "answer": "Carbon dioxide"
            },
            {
                "question": "What is activation energy?",
                "options": ["Energy required to start a reaction", "Total energy released", "Mass loss", "Pressure change"],
                "answer": "Energy required to start a reaction"
            },

            {
                "question": "Which reagent distinguishes aldehydes from ketones?",
                "options": ["Tollens’ reagent", "Benedict’s solution", "Litmus paper", "Silver nitrate"],
                "answer": "Tollens’ reagent"
            },
            {
                "question": "What does chromatography separate?",
                "options": ["Mixture components", "Elements", "Solids", "Isotopes"],
                "answer": "Mixture components"
            },
            {
                "question": "What is the product of a neutralization reaction?",
                "options": ["Salt and water", "Acid and base", "Gas and precipitate", "Metal and oxide"],
                "answer": "Salt and water"
            },
            {
                "question": "Which technique measures molecular mass?",
                "options": ["Mass spectrometry", "pH meter", "Spectrophotometer", "Thermometer"],
                "answer": "Mass spectrometry"
            },
            {
                "question": "What does titration help determine?",
                "options": ["Concentration", "Mass", "Temperature", "Pressure"],
                "answer": "Concentration"
            },
            {
                "question": "What is a buffer used for?",
                "options": ["Maintain pH", "Increase temperature", "Lower pressure", "Raise mass"],
                "answer": "Maintain pH"
            },
            {
                "question": "Which state of matter has fixed volume but no fixed shape?",
                "options": ["Liquid", "Solid", "Gas", "Plasma"],
                "answer": "Liquid"
            },
            {
                "question": "What is the law of conservation of mass?",
                "options": ["Mass is neither created nor destroyed", "Mass is always lost", "Mass increases", "Mass varies with temperature"],
                "answer": "Mass is neither created nor destroyed"
            },
            {
                "question": "What does spectroscopy measure?",
                "options": ["Light absorption/emission", "Mass", "Temperature", "Volume"],
                "answer": "Light absorption/emission"
            },
            {
                "question": "Which compound is a strong acid?",
                "options": ["HCl", "CH₃COOH", "NH₃", "H₂CO₃"],
                "answer": "HCl"
            },

            {
                "question": "What’s the molecular formula of glucose?",
                "options": ["C₆H₁₂O₆", "C₆H₆", "CH₄", "CO₂"],
                "answer": "C₆H₁₂O₆"
            },
            {
                "question": "Which is a halogen element?",
                "options": ["Chlorine", "Oxygen", "Iron", "Sodium"],
                "answer": "Chlorine"
            },
            {
                "question": "What does STP stand for in chemistry?",
                "options": ["Standard Temperature and Pressure", "Sample Test Procedure", "Solution to pH", "Standard Test Point"],
                "answer": "Standard Temperature and Pressure"
            },
            {
                "question": "What is the melting point of ice?",
                "options": ["0 °C", "100 °C", "37 °C", "–10 °C"],
                "answer": "0 °C"
            },
            {
                "question": "Which isomer has the same formula but different structure?",
                "options": ["Structural isomer", "Isotope", "Ion", "Allotrope"],
                "answer": "Structural isomer"
            },
            {
                "question": "Which element is most abundant in Earth's crust?",
                "options": ["Oxygen", "Hydrogen", "Carbon", "Neon"],
                "answer": "Oxygen"
            },
            {
                "question": "What happens during endothermic reaction?",
                "options": ["Absorb energy", "Release energy", "No energy change", "Instant freeze"],
                "answer": "Absorb energy"
            },
            {
                "question": "What defines a mole in chemistry?",
                "options": ["6.022×10²³ particles", "Atomic mass", "Volume", "Pressure"],
                "answer": "6.022×10²³ particles"
            },
            {
                "question": "Which name is IUPAC for H₂O?",
                "options": ["Dihydrogen monoxide", "Water", "Oxidane", "Hydrogen dioxide"],
                "answer": "Oxidane"
            },
            {
                "question": "Which property is intensive?",
                "options": ["Density", "Mass", "Volume", "Energy"],
                "answer": "Density"
            },

            {
                "question": "Which compound has a benzene ring?",
                "options": ["Phenol", "Ethanol", "Methane", "Water"],
                "answer": "Phenol"
            },
            {
                "question": "What type of bond is present in CO₂?",
                "options": ["Double covalent", "Ionic", "Single covalent", "Metallic"],
                "answer": "Double covalent"
            },
            {
                "question": "Which element is a noble gas?",
                "options": ["Argon", "Chlorine", "Sodium", "Fluorine"],
                "answer": "Argon"
            },
            {
                "question": "What occurs during oxidation?",
                "options": ["Loss of electrons", "Gain of electrons", "No change", "Gain of protons"],
                "answer": "Loss of electrons"
            },
            {
                "question": "Which is amphoteric?",
                "options": ["Aluminum hydroxide", "Sodium chloride", "Carbon dioxide", "Methane"],
                "answer": "Aluminum hydroxide"
            },
            {"question": "What is the pH of 0.01 M HCl?", "options": ["2", "7", "10", "5"], "answer": "2"},
            {"question": "Which is a Lewis acid?", "options": ["Al³⁺", "NH₃", "OH⁻", "Cl⁻"], "answer": "Al³⁺"},
            {"question": "What is molarity unit?", "options": ["mol/L", "g/mol", "atm", "°C"], "answer": "mol/L"},
            {
                "question": "Which substance increases rate of reaction without being consumed?",
                "options": ["Catalyst", "Reactant", "Product", "Solvent"],
                "answer": "Catalyst"
            }
        ],
        "Biologist": [
            {
                "question": "What is the basic unit of life?",
                "options": ["Cell", "Atom", "Molecule", "Organ"],
                "answer": "Cell"
            },
            {
                "question": "Which macromolecule stores genetic information?",
                "options": ["DNA", "RNA", "Protein", "Lipid"],
                "answer": "DNA"
            },
            {
                "question": "What process produces energy in mitochondria?",
                "options": ["Cellular respiration", "Photosynthesis", "Fermentation", "Transcription"],
                "answer": "Cellular respiration"
            },
            {
                "question": "What molecule carries amino acids?",
                "options": ["tRNA", "mRNA", "rRNA", "DNA"],
                "answer": "tRNA"
            },
            {
                "question": "Which organelle contains chlorophyll?",
                "options": ["Chloroplast", "Mitochondrion", "Nucleus", "Ribosome"],
                "answer": "Chloroplast"
            },
            {
                "question": "What’s the powerhouse of the cell?",
                "options": ["Mitochondrion", "Nucleus", "Ribosome", "Golgi apparatus"],
                "answer": "Mitochondrion"
            },
            {"question": "How many chromosomes do humans have?", "options": ["46", "23", "92", "22"], "answer": "46"},
            {
                "question": "What’s the process of protein synthesis?",
                "options": ["Translation", "Replication", "Mutation", "Degradation"],
                "answer": "Translation"
            },
            {
                "question": "What structure surrounds plant cells?",
                "options": ["Cell wall", "Cell membrane", "Capsule", "Nucleus"],
                "answer": "Cell wall"
            },
            {
                "question": "Which blood cells fight infection?",
                "options": ["White blood cells", "Red blood cells", "Platelets", "Plasma"],
                "answer": "White blood cells"
            },

            {
                "question": "Which kingdom includes multicellular animals?",
                "options": ["Animalia", "Plantae", "Fungi", "Protista"],
                "answer": "Animalia"
            },
            {
                "question": "What is osmosis?",
                "options": ["Water diffusion across membrane", "Protein synthesis", "DNA replication", "Energy release"],
                "answer": "Water diffusion across membrane"
            },
            {
                "question": "What is the shape of DNA?",
                "options": ["Double helix", "Single strand", "Triple helix", "Circular"],
                "answer": "Double helix"
            },
            {
                "question": "Which process produces gametes?",
                "options": ["Meiosis", "Mitosis", "Fission", "Fusion"],
                "answer": "Meiosis"
            },
            {
                "question": "Where does transcription occur?",
                "options": ["Nucleus", "Ribosome", "Mitochondria", "Cytoplasm"],
                "answer": "Nucleus"
            },
            {
                "question": "Which structure sorts and packages proteins?",
                "options": ["Golgi apparatus", "Rough ER", "Smooth ER", "Lysosome"],
                "answer": "Golgi apparatus"
            },
            {
                "question": "What is homeostasis?",
                "options": ["Maintaining internal stability", "Reproduction", "Growth", "Movement"],
                "answer": "Maintaining internal stability"
            },
            {
                "question": "Which biomolecule accelerates reactions?",
                "options": ["Enzyme", "Lipid", "Carbohydrate", "Nucleic acid"],
                "answer": "Enzyme"
            },
            {
                "question": "What is the function of ribosomes?",
                "options": ["Protein synthesis", "DNA replication", "Energy production", "Detoxification"],
                "answer": "Protein synthesis"
            },
            {
                "question": "Which system transports oxygen in the body?",
                "options": ["Circulatory system", "Respiratory system", "Digestive system", "Nervous system"],
                "answer": "Circulatory system"
            },

            {
                "question": "What’s the base pairing rule in DNA?",
                "options": ["A‑T, G‑C", "A‑G, T‑C", "A‑U, G‑C", "A‑C, G‑T"],
                "answer": "A‑T, G‑C"
            },
            {
                "question": "What is the site of protein synthesis in cells?",
                "options": ["Ribosome", "Nucleus", "Golgi", "Mitochondrion"],
                "answer": "Ribosome"
            },
            {
                "question": "What tissue covers body surfaces?",
                "options": ["Epithelial", "Muscle", "Connective", "Nervous"],
                "answer": "Epithelial"
            },
            {
                "question": "What is biodiversity?",
                "options": ["Variety of life", "Study of biology", "Genetic uniformity", "Ecosystem balance"],
                "answer": "Variety of life"
            },
            {
                "question": "Which gas do plants release during photosynthesis?",
                "options": ["Oxygen", "Carbon dioxide", "Nitrogen", "Methane"],
                "answer": "Oxygen"
            },
            {
                "question": "Which organism causes malaria?",
                "options": ["Plasmodium", "Bacteria", "Virus", "Fungus"],
                "answer": "Plasmodium"
            },
            {
                "question": "What are homologous chromosomes?",
                "options": ["Pairs of similar chromosomes", "Identical DNA strands", "Viral particles", "Mutated genes"],
                "answer": "Pairs of similar chromosomes"
            },
            {
                "question": "Which organ removes waste from blood?",
                "options": ["Kidney", "Liver", "Lung", "Heart"],
                "answer": "Kidney"
            },
            {
                "question": "What is a habitat?",
                "options": ["Organism's natural environment", "Food chain", "Group of species", "Genetic material"],
                "answer": "Organism's natural environment"
            },

            {
                "question": "What is mitosis used for?",
                "options": ["Growth and repair", "Sexual reproduction", "Variation", "Mutations"],
                "answer": "Growth and repair"
            },
            {
                "question": "Which process converts light energy to chemical energy?",
                "options": ["Photosynthesis", "Respiration", "Fermentation", "Translation"],
                "answer": "Photosynthesis"
            },
            {
                "question": "What is an ecosystem?",
                "options": ["Community plus environment", "Single species", "Genetic material", "Physical traits"],
                "answer": "Community plus environment"
            },
            {
                "question": "What is an allele?",
                "options": ["Different form of a gene", "Entire chromosome", "Cell organelle", "Protein type"],
                "answer": "Different form of a gene"
            },
            {
                "question": "What is transcription?",
                "options": ["DNA to RNA", "RNA to protein", "Protein to DNA", "DNA replication"],
                "answer": "DNA to RNA"
            },
            {
                "question": "Which cell organelle digests waste?",
                "options": ["Lysosome", "Nucleus", "Ribosome", "Chloroplast"],
                "answer": "Lysosome"
            },
            {
                "question": "What does a food web show?",
                "options": ["Feeding relationships among species", "Genetic similarities", "Organ development", "Diseases"],
                "answer": "Feeding relationships among species"
            },
            {
                "question": "Which structure in the brain regulates body functions?",
                "options": ["Hypothalamus", "Heart", "Lungs", "Liver"],
                "answer": "Hypothalamus"
            }
        ],
        "Physicist": [
            {
                "question": "What is the SI unit of force?",
                "options": ["Newton", "Joule", "Pascal", "Watt"],
                "answer": "Newton"
            },
            {
                "question": "What does E = mc² represent?",
                "options": ["Mass–energy equivalence", "Ohm’s Law", "Wave equation", "Ideal gas law"],
                "answer": "Mass–energy equivalence"
            },
            {
                "question": "What is the speed of light in vacuum approximately?",
                "options": ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "1 × 10³ m/s", "3 × 10¹⁰ m/s"],
                "answer": "3 × 10⁸ m/s"
            },
            {
                "question": "What phenomenon demonstrates light behaving like a wave?",
                "options": ["Diffraction", "Photoelectric effect", "Compton scattering", "Electron diffraction"],
                "answer": "Diffraction"
            },
            {
                "question": "Which law relates current, voltage, and resistance?",
                "options": ["Ohm’s Law", "Faraday’s Law", "Pascal’s Law", "Hooke’s Law"],
                "answer": "Ohm’s Law"
            },

            {"question": "What is Planck’s constant symbol?", "options": ["h", "k", "c", "G"], "answer": "h"},
            {
                "question": "What is the principle behind nuclear reactors?",
                "options": ["Nuclear fission", "Nuclear fusion", "Photoelectric effect", "Thermoelectric effect"],
                "answer": "Nuclear fission"
            },
            {
                "question": "Which concept explains how particles act like waves?",
                "options": ["Wave–particle duality", "Quantum entanglement", "Heisenberg uncertainty", "Relativity"],
                "answer": "Wave–particle duality"
            },
            {
                "question": "What is the Heisenberg uncertainty principle about?",
                "options": ["Position and momentum cannot both be known precisely", "Energy and mass equivalence", "Speed and time limit", "Charge and field strength"],
                "answer": "Position and momentum cannot both be known precisely"
            },
            {
                "question": "What does the Doppler effect describe?",
                "options": ["Frequency shift due to relative motion", "Light diffraction", "Mass–energy conversion", "Electric current"],
                "answer": "Frequency shift due to relative motion"
            },

            {
                "question": "What type of waves are X-rays?",
                "options": ["Electromagnetic waves", "Sound waves", "Standing waves", "Surface waves"],
                "answer": "Electromagnetic waves"
            },
            {
                "question": "What is the function of a calorimeter?",
                "options": ["Measure heat", "Measure light", "Measure pressure", "Measure current"],
                "answer": "Measure heat"
            },
            {
                "question": "Which law calculates gravitational force between masses?",
                "options": ["Newton’s law of universal gravitation", "Hooke’s law", "Coulomb’s law", "Ohm’s law"],
                "answer": "Newton’s law of universal gravitation"
            },
            {
                "question": "Which particle has no electric charge?",
                "options": ["Neutron", "Proton", "Electron", "Positron"],
                "answer": "Neutron"
            },
            {
                "question": "What is the unit of frequency?",
                "options": ["Hertz", "Newton", "Pascal", "Tesla"],
                "answer": "Hertz"
            },

            {
                "question": "What is absolute zero in Celsius?",
                "options": ["−273 °C", "0 °C", "−100 °C", "−1000 °C"],
                "answer": "−273 °C"
            },
            {
                "question": "Which phenomenon shows bending of light passing from one medium to another?",
                "options": ["Refraction", "Reflection", "Diffraction", "Dispersion"],
                "answer": "Refraction"
            },
            {
                "question": "Who formulated the laws of motion?",
                "options": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Max Planck"],
                "answer": "Isaac Newton"
            },
            {
                "question": "What type of energy is stored in a compressed spring?",
                "options": ["Potential energy", "Kinetic energy", "Thermal energy", "Radiant energy"],
                "answer": "Potential energy"
            },
            {
                "question": "Which radiation is ionizing?",
                "options": ["Gamma rays", "Infrared", "Visible light", "Radio waves"],
                "answer": "Gamma rays"
            },

            {
                "question": "What is simple harmonic motion?",
                "options": ["Oscillatory motion where restoring force is proportional to displacement", "Circular motion", "Projectile motion", "Uniform linear motion"],
                "answer": "Oscillatory motion where restoring force is proportional to displacement"
            },
            {
                "question": "Which law relates magnetic field and electric current?",
                "options": ["Ampère’s Law", "Gauss’s Law", "Ohm’s Law", "Pascal’s Law"],
                "answer": "Ampère’s Law"
            },
            {
                "question": "What does the photoelectric effect show?",
                "options": ["Emission of electrons when light hits a surface", "Light absorption in water", "Reflection of sound", "Diffraction of light"],
                "answer": "Emission of electrons when light hits a surface"
            },
            {
                "question": "What is kinetic energy formula?",
                "options": ["½ mv²", "mgh", "mv", "½ kx²"],
                "answer": "½ mv²"
            },
            {
                "question": "Which branch of physics studies heat and temperature?",
                "options": ["Thermodynamics", "Electrodynamics", "Optics", "Quantum mechanics"],
                "answer": "Thermodynamics"
            },

            {
                "question": "What is the photoelectric threshold frequency related to?",
                "options": ["Work function of the metal", "Electron speed", "Magnetic field strength", "Force"],
                "answer": "Work function of the metal"
            },
            {
                "question": "Which instrument is used to measure magnetic field strength?",
                "options": ["Gaussmeter", "Ammeter", "Voltmeter", "Thermometer"],
                "answer": "Gaussmeter"
            },
            {
                "question": "What is blackbody radiation?",
                "options": ["Radiation from an ideal emitter at thermal equilibrium", "Light from laser", "Radio wave emission", "X-ray emission"],
                "answer": "Radiation from an ideal emitter at thermal equilibrium"
            },
            {
                "question": "What is centripetal force in circular motion?",
                "options": ["Force directed toward the center", "Force pushing outward", "Friction force", "Magnetic force"],
                "answer": "Force directed toward the center"
            },
            {
                "question": "Which physical quantity does a voltmeter measure?",
                "options": ["Electric potential difference", "Current", "Resistance", "Power"],
                "answer": "Electric potential difference"
            }
        ],
        "Environmental Scientist": [
            {
                "question": "What is biodiversity?",
                "options": ["Variety of species, ecosystems, and genetic diversity", "Air pollution index", "Soil quality", "Water availability"],
                "answer": "Variety of species, ecosystems, and genetic diversity"
            },
            {
                "question": "Which gas contributes most to the greenhouse effect?",
                "options": ["Carbon dioxide", "Nitrogen", "Oxygen", "Helium"],
                "answer": "Carbon dioxide"
            },
            {
                "question": "What causes acid rain?",
                "options": ["Sulphur dioxide and nitrogen oxides", "Ozone", "Nitrogen", "Oxygen"],
                "answer": "Sulphur dioxide and nitrogen oxides"
            },
            {
                "question": "Which layer absorbs most harmful UV radiation?",
                "options": ["Stratosphere (ozone layer)", "Troposphere", "Mesosphere", "Thermosphere"],
                "answer": "Stratosphere (ozone layer)"
            },
            {
                "question": "What is sustainable development?",
                "options": ["Meeting present needs without compromising future generations", "Maximizing current industrial growth", "Increasing resource use", "Short-term economic growth"],
                "answer": "Meeting present needs without compromising future generations"
            },

            {
                "question": "What is soil erosion?",
                "options": ["Removal of topsoil by wind or water", "Air pollution", "Water scarcity", "Deforestation"],
                "answer": "Removal of topsoil by wind or water"
            },
            {
                "question": "Which is a renewable resource?",
                "options": ["Oxygen from atmosphere", "Coal", "Oil", "Natural gas"],
                "answer": "Oxygen from atmosphere"
            },
            {
                "question": "What is the ozone hole caused by?",
                "options": ["Chlorofluorocarbons (CFCs)", "CO₂ emissions", "Nitrogen", "SO₂ emissions"],
                "answer": "Chlorofluorocarbons (CFCs)"
            },
            {
                "question": "What is an ecosystem?",
                "options": ["Community of organisms and their environment", "Financial market", "Weather system", "Human society"],
                "answer": "Community of organisms and their environment"
            },
            {
                "question": "Which instrument measures air pollutants like SO₂?",
                "options": ["Air quality monitor", "Thermometer", "Barometer", "Hygrometer"],
                "answer": "Air quality monitor"
            },

            {
                "question": "What is water filtration used for?",
                "options": ["Purifying drinking water by removing particles", "Heating water", "Measuring water depth", "Increasing water speed"],
                "answer": "Purifying drinking water by removing particles"
            },
            {
                "question": "Which continent-wide phenomenon raises sea levels?",
                "options": ["Global warming", "Deforestation", "Ozone depletion", "Earthquakes"],
                "answer": "Global warming"
            },
            {
                "question": "What is a keystone species?",
                "options": ["Species with a disproportionately large role in ecosystem", "Most abundant species", "Invasive species", "Extinct species"],
                "answer": "Species with a disproportionately large role in ecosystem"
            },
            {
                "question": "Which cycle depicts the movement of water in environment?",
                "options": ["Hydrologic cycle", "Carbon cycle", "Nitrogen cycle", "Phosphorus cycle"],
                "answer": "Hydrologic cycle"
            },
            {
                "question": "What does GIS stand for?",
                "options": ["Geographic Information System", "Global Information Service", "Geological Industry Standard", "Geospatial Integration Software"],
                "answer": "Geographic Information System"
            },

            {
                "question": "What is the main goal of environmental policy?",
                "options": ["Protect environment through regulations", "Increase production", "Expand cities", "Reduce taxes"],
                "answer": "Protect environment through regulations"
            },
            {
                "question": "What is an example of a non-point source of pollution?",
                "options": ["Runoff from agricultural fields", "Factory discharge", "Oil spill", "Wastewater treatment effluent"],
                "answer": "Runoff from agricultural fields"
            },
            {
                "question": "What do environmental scientists study?",
                "options": ["Environment and its processes", "Stock markets", "Medical treatments", "Software development"],
                "answer": "Environment and its processes"
            },
            {
                "question": "What is environmental chemistry about?",
                "options": ["Chemical processes in air, soil, and water", "Cooking food", "Writing software", "Building structures"],
                "answer": "Chemical processes in air, soil, and water"
            },
            {
                "question": "Which field integrates physics, chemistry, biology to study environment?",
                "options": ["Environmental science", "Astrophysics", "Quantum mechanics", "Sociology"],
                "answer": "Environmental science"
            },

            {
                "question": "What tool maps environmental data spatially?",
                "options": ["GIS", "Spreadsheet", "Word processor", "Web browser"],
                "answer": "GIS"
            },
            {
                "question": "What practice helps achieve sustainability?",
                "options": ["Reduce, reuse, recycle", "Increase fossil fuel use", "Expand industries", "Deforestation"],
                "answer": "Reduce, reuse, recycle"
            },
            {
                "question": "What causes photochemical smog?",
                "options": ["Vehicle emissions + sunlight", "Soil erosion", "Radioactivity", "Sound pollution"],
                "answer": "Vehicle emissions + sunlight"
            },
            {
                "question": "Which gas is not a pollutant but helps block UV?",
                "options": ["Ozone in stratosphere", "CO₂", "NOₓ", "SO₂"],
                "answer": "Ozone in stratosphere"
            },
            {
                "question": "What is conservation biology?",
                "options": ["Protecting biodiversity", "Urban planning", "Financial auditing", "Software engineering"],
                "answer": "Protecting biodiversity"
            },

            {
                "question": "Which phenomenon refers to warming of Earth's atmosphere?",
                "options": ["Greenhouse effect", "Photosynthesis", "Evaporation", "Transpiration"],
                "answer": "Greenhouse effect"
            },
            {
                "question": "What is air pollution primarily from vehicles?",
                "options": ["Vehicle exhaust containing CO, NOₓ, hydrocarbons", "Plant emissions", "Noise", "Light"],
                "answer": "Vehicle exhaust containing CO, NOₓ, hydrocarbons"
            },
            {
                "question": "What is a biosphere reserve?",
                "options": ["Protected area for ecosystem conservation", "Industrial zone", "Commercial park", "Residential zone"],
                "answer": "Protected area for ecosystem conservation"
            },
            {
                "question": "What field uses analytical chemistry to study environmental processes?",
                "options": ["Environmental chemistry", "Theoretical physics", "Sociology", "Literature"],
                "answer": "Environmental chemistry"
            },
            {
                "question": "What is a biogeochemical cycle?",
                "options": ["Movement of elements like carbon through environment", "Internet cycles", "Financial cycles", "Production cycles"],
                "answer": "Movement of elements like carbon through environment"
            },

            {
                "question": "Which discipline is key for environmental science?",
                "options": ["Physics, biology, chemistry, geology", "Law only", "Medicine only", "Literature only"],
                "answer": "Physics, biology, chemistry, geology"
            },
            {
                "question": "What is the IUCN Red List about?",
                "options": ["Threatened species status", "Air quality index", "Water quality reports", "Population census"],
                "answer": "Threatened species status"
            },
            {
                "question": "Which agency regulated environmental protocols in US?",
                "options": ["NEPA (National Environmental Policy Act)", "FDA", "IRS", "FCC"],
                "answer": "NEPA (National Environmental Policy Act)"
            },
            {
                "question": "Which science studies chemical phenomena in natural environments?",
                "options": ["Environmental chemistry", "Biochemistry", "Nuclear physics", "Mechanical engineering"],
                "answer": "Environmental chemistry"
            }
        ],
        "Geologist": [
            {
                "question": "What is the study of rocks called?",
                "options": ["Petrology", "Paleontology", "Seismology", "Meteorology"],
                "answer": "Petrology"
            },
            {
                "question": "Which layer of Earth is the outermost?",
                "options": ["Crust", "Mantle", "Outer Core", "Inner Core"],
                "answer": "Crust"
            },
            {
                "question": "Which mineral is the hardest on the Mohs scale?",
                "options": ["Diamond", "Quartz", "Topaz", "Corundum"],
                "answer": "Diamond"
            },
            {
                "question": "What causes earthquakes?",
                "options": ["Movement of tectonic plates", "Weather changes", "Ocean tides", "Volcano eruptions"],
                "answer": "Movement of tectonic plates"
            },
            {
                "question": "Which rock is an example of an igneous rock?",
                "options": ["Basalt", "Limestone", "Slate", "Sandstone"],
                "answer": "Basalt"
            },

            {
                "question": "What is the branch of geology that studies fossils?",
                "options": ["Paleontology", "Petrology", "Mineralogy", "Hydrogeology"],
                "answer": "Paleontology"
            },
            {
                "question": "Which process turns sediment into rock?",
                "options": ["Lithification", "Evaporation", "Condensation", "Sublimation"],
                "answer": "Lithification"
            },
            {
                "question": "What type of rock forms from cooled magma or lava?",
                "options": ["Igneous", "Sedimentary", "Metamorphic", "Fossiliferous"],
                "answer": "Igneous"
            },
            {
                "question": "Which of the following is a sedimentary rock?",
                "options": ["Limestone", "Granite", "Marble", "Gabbro"],
                "answer": "Limestone"
            },
            {
                "question": "What is the Earth's mantle primarily composed of?",
                "options": ["Silicate minerals", "Iron and nickel", "Water", "Carbon compounds"],
                "answer": "Silicate minerals"
            },

            {
                "question": "Which instrument is used to measure earthquakes?",
                "options": ["Seismograph", "Barometer", "Anemometer", "Altimeter"],
                "answer": "Seismograph"
            },
            {
                "question": "What is a fault in geology?",
                "options": ["A fracture in Earth’s crust", "A lava flow", "A mountain", "A glacial deposit"],
                "answer": "A fracture in Earth’s crust"
            },
            {
                "question": "Which is a metamorphic rock?",
                "options": ["Marble", "Shale", "Granite", "Basalt"],
                "answer": "Marble"
            },
            {
                "question": "What are the three main types of rocks?",
                "options": ["Igneous, Sedimentary, Metamorphic", "Limestone, Granite, Marble", "Crust, Mantle, Core", "Quartz, Feldspar, Mica"],
                "answer": "Igneous, Sedimentary, Metamorphic"
            },
            {
                "question": "Where do most volcanoes occur?",
                "options": ["Tectonic plate boundaries", "Deserts", "Poles", "Flat plains"],
                "answer": "Tectonic plate boundaries"
            },

            {
                "question": "Which term describes the layering in sedimentary rocks?",
                "options": ["Stratification", "Faulting", "Foliation", "Erosion"],
                "answer": "Stratification"
            },
            {
                "question": "What is the scale used to measure earthquake magnitude?",
                "options": ["Richter scale", "Beaufort scale", "Mohs scale", "Barometric scale"],
                "answer": "Richter scale"
            },
            {
                "question": "What does a geologic map show?",
                "options": ["Distribution of rock units and geologic features", "Population density", "Weather data", "Vegetation zones"],
                "answer": "Distribution of rock units and geologic features"
            },
            {
                "question": "Which mineral reacts with hydrochloric acid?",
                "options": ["Calcite", "Quartz", "Feldspar", "Gypsum"],
                "answer": "Calcite"
            },
            {
                "question": "Which rock forms from compacted plant material?",
                "options": ["Coal", "Granite", "Gneiss", "Obsidian"],
                "answer": "Coal"
            },

            {
                "question": "What is erosion?",
                "options": ["Removal of soil and rock by wind or water", "Rock formation process", "Volcanic activity", "Earthquake rupture"],
                "answer": "Removal of soil and rock by wind or water"
            },
            {
                "question": "Which geologic time unit is the longest?",
                "options": ["Eon", "Era", "Period", "Epoch"],
                "answer": "Eon"
            },
            {
                "question": "Which of these is a fossil fuel?",
                "options": ["Coal", "Granite", "Basalt", "Quartz"],
                "answer": "Coal"
            },
            {
                "question": "What is the Earth's core primarily made of?",
                "options": ["Iron and nickel", "Silicon", "Carbon", "Sulfur"],
                "answer": "Iron and nickel"
            },
            {
                "question": "What is a geode?",
                "options": ["A rock with crystals inside", "A lava tube", "A sedimentary basin", "A fault line"],
                "answer": "A rock with crystals inside"
            },

            {
                "question": "Which geologic feature is created by glaciers?",
                "options": ["U-shaped valley", "Volcano", "Fault line", "Sinkhole"],
                "answer": "U-shaped valley"
            },
            {
                "question": "What is a mineral?",
                "options": ["A naturally occurring inorganic solid with a crystal structure", "A living organism", "A type of fossil", "A layer of sediment"],
                "answer": "A naturally occurring inorganic solid with a crystal structure"
            },
            {
                "question": "What is an aquifer?",
                "options": ["A rock layer that stores groundwater", "A volcano", "A tectonic plate", "A type of mineral"],
                "answer": "A rock layer that stores groundwater"
            },
            {
                "question": "Which planet has the largest known volcano in the solar system?",
                "options": ["Mars", "Earth", "Jupiter", "Venus"],
                "answer": "Mars"
            },
            {
                "question": "What does GPS help geologists measure?",
                "options": ["Crustal movement", "Rainfall", "Temperature", "Soil pH"],
                "answer": "Crustal movement"
            },

            {
                "question": "Which of the following is a clastic sedimentary rock?",
                "options": ["Sandstone", "Marble", "Granite", "Basalt"],
                "answer": "Sandstone"
            },
            {
                "question": "What type of boundary forms mountains like the Himalayas?",
                "options": ["Convergent boundary", "Divergent boundary", "Transform fault", "Subduction zone"],
                "answer": "Convergent boundary"
            },
            {
                "question": "What are tectonic plates?",
                "options": ["Large slabs of Earth’s lithosphere", "Weather patterns", "Fossils", "Seismic waves"],
                "answer": "Large slabs of Earth’s lithosphere"
            },
            {
                "question": "What is magma called when it reaches the surface?",
                "options": ["Lava", "Basalt", "Ash", "Tuff"],
                "answer": "Lava"
            },
            {
                "question": "What is a tsunami typically caused by?",
                "options": ["Underwater earthquake", "Hurricane", "Wind erosion", "Volcanic ash fall"],
                "answer": "Underwater earthquake"
            },

            {
                "question": "What is a seafloor spreading zone?",
                "options": ["Divergent boundary under the ocean", "Mountain chain", "Sediment deposit area", "Fossil bed"],
                "answer": "Divergent boundary under the ocean"
            },
            {
                "question": "Which process creates metamorphic rocks?",
                "options": ["Heat and pressure", "Cooling of magma", "Weathering", "Sediment compaction"],
                "answer": "Heat and pressure"
            },
            {
                "question": "Which rock is formed by volcanic activity?",
                "options": ["Obsidian", "Shale", "Slate", "Gneiss"],
                "answer": "Obsidian"
            },
            {
                "question": "Which term refers to the breakdown of rocks in place?",
                "options": ["Weathering", "Erosion", "Transportation", "Deposition"],
                "answer": "Weathering"
            },
            {
                "question": "What is a syncline?",
                "options": ["A downward fold in rock layers", "An upward fold", "A fault line", "A dike"],
                "answer": "A downward fold in rock layers"
            }
        ],

    },
    "Retail & E-Commerce": {

        "Store Manager": [
            {
                "question": "What is the main responsibility of a store manager?",
                "options": ["Oversee store operations", "Design products", "Handle tech support", "Maintain machinery"],
                "answer": "Oversee store operations"
            },
            {
                "question": "Which metric indicates sales per square foot?",
                "options": ["Sales density", "Stock turnover", "Conversion rate", "Gross margin"],
                "answer": "Sales density"
            },
            {
                "question": "What does inventory turnover measure?",
                "options": ["How quickly inventory sells", "Supplier count", "Product defects", "Staff turnover"],
                "answer": "How quickly inventory sells"
            },
            {
                "question": "Which is a key task in visual merchandising?",
                "options": ["Product display", "Quality control", "Packaging design", "Website coding"],
                "answer": "Product display"
            },
            {
                "question": "What does FIFO stand for in stock management?",
                "options": ["First In, First Out", "Fast Inventory, Fast Out", "First Item, First Offered", "Fast In, First Out"],
                "answer": "First In, First Out"
            },
            {
                "question": "Why conduct daily sales analysis?",
                "options": ["Track performance", "Ignore trends", "Reduce staff", "Avoid decisions"],
                "answer": "Track performance"
            },
            {
                "question": "What’s the purpose of staff scheduling?",
                "options": ["Ensure adequate coverage", "Delay operations", "Avoid planning", "Ignore shifts"],
                "answer": "Ensure adequate coverage"
            },
            {
                "question": "Which document authorizes budgets?",
                "options": ["Budget proposal", "Staff roster", "Sales memo", "Packing slip"],
                "answer": "Budget proposal"
            },
            {
                "question": "What is the role of loss prevention?",
                "options": ["Reduce theft and shrinkage", "Increase prices", "Promote products", "Handle hiring"],
                "answer": "Reduce theft and shrinkage"
            },
            {
                "question": "Which leadership style boosts team morale?",
                "options": ["Supportive", "Aggressive", "Hands-off", "Authoritarian"],
                "answer": "Supportive"
            },

            {
                "question": "Why is customer service training important?",
                "options": ["Enhance customer satisfaction", "Reduce staffs", "Sell faster", "Avoid complaints"],
                "answer": "Enhance customer satisfaction"
            },
            {
                "question": "Which report tracks profit vs. target?",
                "options": ["Performance report", "Sales memo", "Inventory list", "R&D report"],
                "answer": "Performance report"
            },
            {
                "question": "What’s shelf replenishment?",
                "options": ["Restocking products on display", "Counting customers", "Setting prices", "Checking doors"],
                "answer": "Restocking products on display"
            },
            {
                "question": "What is vendor management?",
                "options": ["Handle supplier relations", "Train staff", "Manage website", "Design products"],
                "answer": "Handle supplier relations"
            },
            {
                "question": "Why set KPIs for the store?",
                "options": ["Measure success", "Reduce staff", "Ignore goals", "Avoid planning"],
                "answer": "Measure success"
            },
            {
                "question": "What is shrinkage in retail?",
                "options": ["Inventory loss", "Customer drop-out", "Product fault", "Store damage"],
                "answer": "Inventory loss"
            },
            {
                "question": "What role does the POS system serve?",
                "options": ["Track sales & inventory", "Design products", "Manage website", "Handle shipping"],
                "answer": "Track sales & inventory"
            },
            {
                "question": "How can a manager motivate staff?",
                "options": ["Set clear goals & recognize achievement", "Ignore performance", "Threaten staff", "Limit training"],
                "answer": "Set clear goals & recognize achievement"
            },
            {
                "question": "Why perform competitor analysis?",
                "options": ["Understand market trends", "Ignore competition", "Eliminate rivals", "Reduce stock"],
                "answer": "Understand market trends"
            },
            {
                "question": "What is daily closing report for?",
                "options": ["Summarize day’s activity", "Send promotions", "Create shifts", "Handle returns"],
                "answer": "Summarize day’s activity"
            },

            {
                "question": "Which action improves store layout?",
                "options": ["Optimize customer movement", "Increase stock storage", "Hide products", "Reduce signage"],
                "answer": "Optimize customer movement"
            },
            {
                "question": "What is omnichannel retail?",
                "options": ["Multiple integrated sales channels", "Only online store", "Only physical store", "Warehouse only"],
                "answer": "Multiple integrated sales channels"
            },
            {
                "question": "How should a manager handle complaints?",
                "options": ["Listen and resolve promptly", "Ignore customers", "Delay response", "Cancel orders"],
                "answer": "Listen and resolve promptly"
            },
            {
                "question": "What does foot traffic measure?",
                "options": ["Number of visitors", "Product returns", "Online sales", "Staff count"],
                "answer": "Number of visitors"
            },
            {
                "question": "Why conduct employee evaluations?",
                "options": ["Improve performance", "Fire everyone", "Ignore performance", "Eliminate training"],
                "answer": "Improve performance"
            },
            {
                "question": "What is an end-of-day cash audit?",
                "options": ["Verify register totals", "Check inventory only", "Rearrange shelves", "Train staff"],
                "answer": "Verify register totals"
            },
            {
                "question": "Which marketing supports in-store traffic?",
                "options": ["Local promotions", "Corporate communications", "Financial audits", "Shipping"],
                "answer": "Local promotions"
            },
            {
                "question": "How to optimize staff shifts?",
                "options": ["Align with customer peak times", "Ignore timing", "Minimize coverage", "Random shifts"],
                "answer": "Align with customer peak times"
            },
            {
                "question": "How can losses be reduced?",
                "options": ["Audit frequently and train staff", "Ignore shrinkage", "Delay counting", "Increase prices only"],
                "answer": "Audit frequently and train staff"
            },
            {
                "question": "Why monitor product performance?",
                "options": ["Identify best & poor selling items", "Hide failures", "Avoid promotions", "Ignore data"],
                "answer": "Identify best & poor selling items"
            },

            {
                "question": "What is upselling training used for?",
                "options": ["Increase average sale value", "Add inventory", "Reduce staff", "Ignore buyers"],
                "answer": "Increase average sale value"
            },
            {
                "question": "Which safety protocol matters in store?",
                "options": ["Emergency exits accessibility", "Price tagging", "Color schemes", "Decor only"],
                "answer": "Emergency exits accessibility"
            },
            {
                "question": "What is seasonal planning?",
                "options": ["Align stock with seasonal demand", "Ignore seasons", "Maintain same inventory", "Random orders"],
                "answer": "Align stock with seasonal demand"
            },
            {
                "question": "Which tool recognizes cash discrepancies?",
                "options": ["Deposit reconciliation", "Inventory listing", "Sales flyer", "POS screensaver"],
                "answer": "Deposit reconciliation"
            },
            {
                "question": "What is a visual merchandising focal point?",
                "options": ["Eye-catching display area", "Cash register", "Warehouse", "Break room"],
                "answer": "Eye-catching display area"
            },
            {
                "question": "Why track lost sales?",
                "options": ["Understand demand gaps", "Ignore customers", "Reduce offerings", "Delay decisions"],
                "answer": "Understand demand gaps"
            },
            {
                "question": "What does a store operations manual contain?",
                "options": ["Procedures, policies & guidelines", "Board members list", "Financial year report", "Employee salaries"],
                "answer": "Procedures, policies & guidelines"
            },
            {
                "question": "How to improve customer loyalty?",
                "options": ["Reward programs", "Ignore repeat buyers", "Increase prices only", "Reduce staff"],
                "answer": "Reward programs"
            }
        ],
        "Sales Associate": [
            {
                "question": "What is the key role of a sales associate?",
                "options": ["Assist customers in purchasing", "Manage finances", "Handle contracts", "Design products"],
                "answer": "Assist customers in purchasing"
            },
            {
                "question": "How do you greet a customer effectively?",
                "options": ["Warm, friendly greeting", "Ignore them", "Yell from a distance", "Stay silent"],
                "answer": "Warm, friendly greeting"
            },
            {
                "question": "What is active listening?",
                "options": ["Understand customer needs", "Talk only about products", "Ignore feedback", "Brag about prices"],
                "answer": "Understand customer needs"
            },
            {
                "question": "Which technique increases sale value?",
                "options": ["Upselling or cross-selling", "Reducing interaction", "Ignoring preferences", "Random adjustments"],
                "answer": "Upselling or cross-selling"
            },
            {
                "question": "What is product knowledge important for?",
                "options": ["Give accurate info", "Show off titles", "Ignore questions", "Distract buyers"],
                "answer": "Give accurate info"
            },
            {
                "question": "Why offer product demonstrations?",
                "options": ["Clarify features and benefits", "Speed sale only", "Ignore doubts", "Sell anything"],
                "answer": "Clarify features and benefits"
            },
            {
                "question": "How to handle customer objections?",
                "options": ["Listen and respond calmly", "Shout back", "Ignore concerns", "Change the topic"],
                "answer": "Listen and respond calmly"
            },
            {
                "question": "What is suggestive selling?",
                "options": ["Recommend complementary products", "Push unrelated items", "Ignore requests", "Cross-check inventory"],
                "answer": "Recommend complementary products"
            },
            {
                "question": "Why maintain neat displays?",
                "options": ["Enhance product visibility", "Hide stock", "Make room", "Ignore appearance"],
                "answer": "Enhance product visibility"
            },
            {
                "question": "What does closing the sale involve?",
                "options": ["Securing purchase and payment", "Telling price only", "Guessing payment", "Delay checkout"],
                "answer": "Securing purchase and payment"
            },

            {
                "question": "How do you upsell effectively?",
                "options": ["Offer better version subtly", "Push expensive item only", "Avoid suggestions", "Ignore customer"],
                "answer": "Offer better version subtly"
            },
            {
                "question": "Why confirm available payment options?",
                "options": ["Ensure smooth checkout", "Delay payment", "Confuse customers", "Avoid charging"],
                "answer": "Ensure smooth checkout"
            },
            {
                "question": "What is the optional add-on?",
                "options": ["Extra product at sale", "Remove items", "Ignore suggestions", "End conversation"],
                "answer": "Extra product at sale"
            },
            {
                "question": "Why ask open-ended questions?",
                "options": ["Uncover needs", "Prevent conversation", "State only price", "Ignore responses"],
                "answer": "Uncover needs"
            },
            {
                "question": "What is suggestive apparel bundling?",
                "options": ["Recommend outfit combinations", "Mix sizes randomly", "Sell single only", "Ignore accessories"],
                "answer": "Recommend outfit combinations"
            },
            {
                "question": "How to check stock for a customer?",
                "options": ["Use POS or inventory system", "Guess availability", "Tell them wait", "Ignore request"],
                "answer": "Use POS or inventory system"
            },
            {
                "question": "What is follow-up after sale?",
                "options": ["Check satisfaction & offer support", "Forget customer", "Ignore feedback", "Delay contact"],
                "answer": "Check satisfaction & offer support"
            },
            {
                "question": "Which term describes a loyal repeat shopper?",
                "options": ["Regular", "Visitor", "Random", "Supplier"],
                "answer": "Regular"
            },
            {
                "question": "What is referral selling?",
                "options": ["Ask happy customers to bring others", "Offer discounts only", "Ignore testimonials", "Push email"],
                "answer": "Ask happy customers to bring others"
            },
            {
                "question": "Which trait improves trust?",
                "options": ["Honesty and helpfulness", "Avoid questions", "Push-only", "Ignore customer"],
                "answer": "Honesty and helpfulness"
            },

            {
                "question": "How to handle return requests?",
                "options": ["Follow return policy politely", "Refuse instantly", "Ignore request", "Delay customer"],
                "answer": "Follow return policy politely"
            },
            {
                "question": "What is suggestive pricing?",
                "options": ["Posing value benefits", "Hiding discounts", "Push expensive only", "Avoid deals"],
                "answer": "Posing value benefits"
            },
            {
                "question": "Why collect feedback?",
                "options": ["Improve experience", "Ignore problems", "Blame staff", "Close store"],
                "answer": "Improve experience"
            },
            {
                "question": "What is suggestive stocking?",
                "options": ["Front larger stock", "Stock haphazardly", "Hide sale items", "Mix brands"],
                "answer": "Front larger stock"
            },
            {
                "question": "Why stay updated on promotions?",
                "options": ["Explain offers confidently", "Ignore signage", "Avoid questions", "Give wrong info"],
                "answer": "Explain offers confidently"
            },
            {
                "question": "What is personal selling?",
                "options": ["Direct salesperson-customer engagement", "Mass emailing", "Advertising only", "Online chat"],
                "answer": "Direct salesperson-customer engagement"
            },
            {
                "question": "Why record customer preferences?",
                "options": ["Tailor future interactions", "Forget needs", "Ignore repeats", "Push unknowns"],
                "answer": "Tailor future interactions"
            },
            {
                "question": "What is suggestive seasonal displays?",
                "options": ["Show themed product sets", "Mix random items", "Ignore seasons", "Limit decorations"],
                "answer": "Show themed product sets"
            },
            {
                "question": "How to upsell with accessories?",
                "options": ["Suggest matching add-ons", "Push unrelated items", "Force sale", "Ignore stock"],
                "answer": "Suggest matching add-ons"
            },
            {
                "question": "What’s the sign of strong customer service?",
                "options": ["Repeat buys and referrals", "Returns only", "Complaints only", "No interaction"],
                "answer": "Repeat buys and referrals"
            },
            {
                "question": "What is omnichannel support?",
                "options": ["Assist via in-store, online & phone", "Only in store", "Only via email", "Only call"],
                "answer": "Assist via in-store, online & phone"
            },
            {
                "question": "Why upsell ethically?",
                "options": ["Build trust without pressure", "Sell more only", "Push regardless", "Ignore consent"],
                "answer": "Build trust without pressure"
            },
            {
                "question": "What is maintaining displays during peak hours?",
                "options": ["Keep displays tidy while busy", "Ignore mess", "Close display", "Delay cleanup"],
                "answer": "Keep displays tidy while busy"
            }
        ],
        "Merchandiser": [
            {
                "question": "What is the main goal of merchandising?",
                "options": ["Increase sales through product presentation", "Design websites", "Manage payroll", "Answer customer calls"],
                "answer": "Increase sales through product presentation"
            },
            {
                "question": "Which tool helps merchandisers plan product placement?",
                "options": ["Planogram", "Blueprint", "Sales funnel", "Wireframe"],
                "answer": "Planogram"
            },
            {
                "question": "What is stock rotation?",
                "options": ["Moving older stock to the front", "Reordering stock weekly", "Removing new items", "Selling damaged goods"],
                "answer": "Moving older stock to the front"
            },
            {
                "question": "What does SKU stand for?",
                "options": ["Stock Keeping Unit", "Standard Knowledge Unit", "Sales Key Utility", "Store Keeper Utility"],
                "answer": "Stock Keeping Unit"
            },
            {
                "question": "Which report tracks product performance?",
                "options": ["Sales report", "Attendance sheet", "Invoice", "Work order"],
                "answer": "Sales report"
            },

            {
                "question": "What is endcap merchandising?",
                "options": ["Placing products at the end of aisles", "Selling online only", "Using security tags", "Hiding overstock"],
                "answer": "Placing products at the end of aisles"
            },
            {
                "question": "What is the meaning of visual merchandising?",
                "options": ["Using displays to attract customers", "Arranging shelves randomly", "Packing products", "Stock auditing"],
                "answer": "Using displays to attract customers"
            },
            {
                "question": "Which season typically sees new fashion arrivals?",
                "options": ["Spring and Fall", "Summer only", "Winter only", "Monsoon only"],
                "answer": "Spring and Fall"
            },
            {
                "question": "What is overstock?",
                "options": ["Excess inventory", "Sold-out products", "Damaged goods", "Imported items"],
                "answer": "Excess inventory"
            },
            {
                "question": "What is markdown?",
                "options": ["Price reduction", "Item description", "Product label", "Customer loyalty"],
                "answer": "Price reduction"
            },

            {
                "question": "What is FIFO in inventory?",
                "options": ["First In, First Out", "Free In Fast Out", "Find Item Fast Option", "Fixed In Fixed Out"],
                "answer": "First In, First Out"
            },
            {
                "question": "Which of the following is a slow-moving item?",
                "options": ["Product that takes time to sell", "Best-selling item", "Fresh item", "Restocked product"],
                "answer": "Product that takes time to sell"
            },
            {
                "question": "Which software is often used in retail for inventory?",
                "options": ["POS system", "Excel only", "Photoshop", "CRM"],
                "answer": "POS system"
            },
            {
                "question": "What is cross-merchandising?",
                "options": ["Displaying related products together", "Selling in another country", "Using damaged goods", "Upselling only"],
                "answer": "Displaying related products together"
            },
            {
                "question": "Which factor is critical in window display design?",
                "options": ["Lighting", "Humidity", "Music", "Price tags"],
                "answer": "Lighting"
            },

            {
                "question": "Which department works closely with merchandisers?",
                "options": ["Sales", "HR", "Legal", "Maintenance"],
                "answer": "Sales"
            },
            {
                "question": "What is a promotional display?",
                "options": ["Temporary product setup to boost sales", "Employee reward", "Company logo", "Hidden storage"],
                "answer": "Temporary product setup to boost sales"
            },
            {
                "question": "What is stock audit?",
                "options": ["Inventory check", "Employee survey", "Delivery vehicle check", "Sales training"],
                "answer": "Inventory check"
            },
            {
                "question": "Which product arrangement increases impulse buying?",
                "options": ["Near checkout counters", "Top warehouse shelf", "Backroom", "Ceiling"],
                "answer": "Near checkout counters"
            },
            {
                "question": "What does 'out of stock' mean?",
                "options": ["Item is temporarily unavailable", "Item is discounted", "Item is expired", "Item is online only"],
                "answer": "Item is temporarily unavailable"
            },

            {
                "question": "What is brand blocking?",
                "options": ["Displaying one brand’s products together", "Hiding logos", "Grouping categories", "Stock hiding"],
                "answer": "Displaying one brand’s products together"
            },
            {
                "question": "Why do merchandisers analyze foot traffic?",
                "options": ["To optimize store layout", "To increase Wi-Fi speed", "To lower staff cost", "To play music"],
                "answer": "To optimize store layout"
            },
            {
                "question": "Which term refers to a product’s shelf life?",
                "options": ["Expiry period", "Guarantee", "Break-even", "Markup"],
                "answer": "Expiry period"
            },
            {
                "question": "Which is a KPI for merchandisers?",
                "options": ["Sell-through rate", "Number of meetings", "Emails sent", "Shift timing"],
                "answer": "Sell-through rate"
            },
            {
                "question": "What is the purpose of planogram compliance?",
                "options": ["To ensure correct shelf arrangement", "To increase salaries", "To reduce rent", "To reduce customer reviews"],
                "answer": "To ensure correct shelf arrangement"
            },

            {
                "question": "Which display is used for new arrivals?",
                "options": ["Feature table", "Stockroom", "Bottom shelf", "Overstock area"],
                "answer": "Feature table"
            },
            {
                "question": "What’s the purpose of seasonal merchandising?",
                "options": ["To match product display with seasons", "To hide out-of-stock items", "To reduce hours", "To avoid deliveries"],
                "answer": "To match product display with seasons"
            },
            {
                "question": "Which item is considered high-velocity?",
                "options": ["Sells quickly", "Heavy item", "Low in stock", "Expensive item"],
                "answer": "Sells quickly"
            },
            {
                "question": "Why is shelf height important?",
                "options": ["It affects visibility and sales", "It controls temperature", "It helps alarms", "It reduces theft"],
                "answer": "It affects visibility and sales"
            },
            {
                "question": "What is a gondola in merchandising?",
                "options": ["Freestanding store shelf", "Shopping cart", "Display light", "Music system"],
                "answer": "Freestanding store shelf"
            },

            {
                "question": "What is an end-of-season sale?",
                "options": ["Clearance of seasonal stock", "New collection launch", "Damage sale", "Employee discount"],
                "answer": "Clearance of seasonal stock"
            },
            {
                "question": "What role does color play in displays?",
                "options": ["Attracts attention and evokes emotion", "Provides storage", "Tracks stock", "Measures temperature"],
                "answer": "Attracts attention and evokes emotion"
            },
            {
                "question": "Which product placement is most eye-catching?",
                "options": ["Eye level", "Floor level", "Behind counter", "Warehouse"],
                "answer": "Eye level"
            },
            {
                "question": "Why are new arrivals placed in front of stores?",
                "options": ["To attract customers", "To avoid theft", "To hide old stock", "To increase deliveries"],
                "answer": "To attract customers"
            },
            {
                "question": "What is shelf tagging?",
                "options": ["Labeling product prices", "Gluing shelves", "Installing alarms", "Stacking boxes"],
                "answer": "Labeling product prices"
            }
        ],
        "Customer Service Rep": [
            {
                "question": "What is the primary responsibility of a customer service representative?",
                "options": ["Assist customers with inquiries and issues", "Manage HR files", "Design marketing campaigns", "Perform IT support"],
                "answer": "Assist customers with inquiries and issues"
            },
            {
                "question": "Which communication skill is most important in customer service?",
                "options": ["Active listening", "Singing", "Writing code", "Driving"],
                "answer": "Active listening"
            },
            {
                "question": "What is CRM software used for?",
                "options": ["Managing customer relationships", "Editing videos", "Creating designs", "Controlling inventory"],
                "answer": "Managing customer relationships"
            },
            {
                "question": "What is a common channel for customer support?",
                "options": ["Phone", "TV", "Billboards", "Flyers"],
                "answer": "Phone"
            },
            {
                "question": "What does 'escalating a ticket' mean?",
                "options": ["Passing an issue to a higher level of support", "Closing a sale", "Issuing a refund", "Removing a customer"],
                "answer": "Passing an issue to a higher level of support"
            },

            {
                "question": "Which quality is key for handling angry customers?",
                "options": ["Patience", "Aggression", "Laziness", "Shyness"],
                "answer": "Patience"
            },
            {
                "question": "What is a service level agreement (SLA)?",
                "options": ["Commitment on service standards", "Invoice", "Complaint form", "Training manual"],
                "answer": "Commitment on service standards"
            },
            {
                "question": "Which software might be used in a call center?",
                "options": ["Zendesk", "Photoshop", "Excel", "AutoCAD"],
                "answer": "Zendesk"
            },
            {
                "question": "What should a representative do if they don’t know an answer?",
                "options": ["Escalate to a supervisor", "Guess", "Ignore the question", "Hang up"],
                "answer": "Escalate to a supervisor"
            },
            {
                "question": "Which tone is best when speaking with customers?",
                "options": ["Friendly and professional", "Sarcastic", "Indifferent", "Harsh"],
                "answer": "Friendly and professional"
            },

            {
                "question": "What is the importance of documentation in customer service?",
                "options": ["Helps track and resolve issues", "Fills up computer space", "Creates extra work", "Confuses customers"],
                "answer": "Helps track and resolve issues"
            },
            {
                "question": "How should a rep handle a difficult customer?",
                "options": ["Stay calm and listen carefully", "Argue back", "Ignore them", "Transfer immediately"],
                "answer": "Stay calm and listen carefully"
            },
            {
                "question": "What does first call resolution mean?",
                "options": ["Solving customer issues in the first call", "Calling customers twice", "Recording calls", "Escalating calls"],
                "answer": "Solving customer issues in the first call"
            },
            {
                "question": "Which of these is NOT a good customer service practice?",
                "options": ["Interrupting customers", "Active listening", "Empathy", "Clear communication"],
                "answer": "Interrupting customers"
            },
            {
                "question": "What is the benefit of customer feedback?",
                "options": ["Improves products and services", "Increases complaints", "Costs money", "Confuses employees"],
                "answer": "Improves products and services"
            },

            {
                "question": "What does 'upselling' mean in customer service?",
                "options": ["Encouraging customers to buy more expensive items", "Giving discounts", "Ignoring the customer", "Canceling orders"],
                "answer": "Encouraging customers to buy more expensive items"
            },
            {
                "question": "How can a representative show empathy?",
                "options": ["Acknowledging customer feelings", "Ignoring complaints", "Changing the subject", "Being rude"],
                "answer": "Acknowledging customer feelings"
            },
            {
                "question": "What is the purpose of a call script?",
                "options": ["Guide conversations with customers", "Make calls longer", "Record calls", "Track sales"],
                "answer": "Guide conversations with customers"
            },
            {
                "question": "Which metric measures customer satisfaction?",
                "options": ["CSAT", "ROI", "KPI", "SEO"],
                "answer": "CSAT"
            },
            {
                "question": "What is the meaning of 'customer churn'?",
                "options": ["Customers who stop using the service", "Customers who buy frequently", "New customers", "Customer complaints"],
                "answer": "Customers who stop using the service"
            },

            {
                "question": "What should a rep do after resolving a customer issue?",
                "options": ["Confirm customer satisfaction", "End the call immediately", "Transfer the call", "Ignore follow-up"],
                "answer": "Confirm customer satisfaction"
            },
            {
                "question": "Which of these is an active listening technique?",
                "options": ["Paraphrasing customer’s words", "Interrupting", "Ignoring", "Talking over them"],
                "answer": "Paraphrasing customer’s words"
            },
            {
                "question": "What is a common cause of customer complaints?",
                "options": ["Poor product quality", "Too many options", "Friendly staff", "Fast delivery"],
                "answer": "Poor product quality"
            },
            {
                "question": "How should a rep handle a technical issue?",
                "options": ["Document and escalate", "Ignore it", "Guess the fix", "Hang up"],
                "answer": "Document and escalate"
            },
            {
                "question": "Which attitude improves customer experience?",
                "options": ["Positive and helpful", "Negative", "Indifferent", "Rude"],
                "answer": "Positive and helpful"
            },

            {
                "question": "What is the role of empathy in customer service?",
                "options": ["Understanding and sharing customer feelings", "Ignoring issues", "Talking over customers", "Changing the subject"],
                "answer": "Understanding and sharing customer feelings"
            },
            {
                "question": "Why is it important to keep customer data confidential?",
                "options": ["Protect privacy and build trust", "For marketing", "For advertisements", "To share with competitors"],
                "answer": "Protect privacy and build trust"
            },
            {
                "question": "What should be done if a customer is unsatisfied with the solution?",
                "options": ["Offer alternative solutions or escalate", "Ignore the customer", "End the call", "Transfer without explanation"],
                "answer": "Offer alternative solutions or escalate"
            },
            {
                "question": "Which behavior is inappropriate for a customer service rep?",
                "options": ["Rudeness", "Patience", "Listening", "Clear communication"],
                "answer": "Rudeness"
            },
            {
                "question": "What is the best way to build customer loyalty?",
                "options": ["Providing excellent service consistently", "Ignoring feedback", "Overcharging", "Delaying responses"],
                "answer": "Providing excellent service consistently"
            },

            {
                "question": "Which channel is commonly used for live customer support?",
                "options": ["Live chat", "Print ads", "Radio", "Billboards"],
                "answer": "Live chat"
            },
            {
                "question": "How can reps manage stress during calls?",
                "options": ["Take breaks and practice deep breathing", "Ignore it", "Shout at customers", "Quit"],
                "answer": "Take breaks and practice deep breathing"
            },
            {
                "question": "Which information should NOT be shared with customers?",
                "options": ["Other customers’ personal data", "Product info", "Service updates", "Promotions"],
                "answer": "Other customers’ personal data"
            },
            {
                "question": "What does 'multitasking' mean in customer service?",
                "options": ["Handling multiple tasks simultaneously", "Ignoring calls", "Focusing on one task", "Delaying calls"],
                "answer": "Handling multiple tasks simultaneously"
            },
            {
                "question": "What is the best way to end a customer call?",
                "options": ["Summarize the solution and thank the customer", "Hang up abruptly", "Transfer without notice", "Ignore"],
                "answer": "Summarize the solution and thank the customer"
            },

            {
                "question": "Why is training important for customer service reps?",
                "options": ["Improves skills and knowledge", "Wastes time", "Increases complaints", "Decreases salary"],
                "answer": "Improves skills and knowledge"
            },
            {
                "question": "What is the main benefit of customer loyalty?",
                "options": ["Repeat business and referrals", "Complaints", "Returns", "Discounts"],
                "answer": "Repeat business and referrals"
            },
            {
                "question": "Which term means resolving an issue before customer contacts support?",
                "options": ["Proactive support", "Reactive support", "Delayed response", "Ignoring complaints"],
                "answer": "Proactive support"
            },
            {
                "question": "What is a common tool used for tracking customer complaints?",
                "options": ["Ticketing system", "Excel only", "PowerPoint", "Word"],
                "answer": "Ticketing system"
            },
            {
                "question": "How should reps deal with language barriers?",
                "options": ["Use simple language or translation tools", "Hang up", "Ignore customer", "Speak loudly"],
                "answer": "Use simple language or translation tools"
            }
        ],
        "E‑commerce Specialist": [
            {
                "question": "What does SEO stand for?",
                "options": ["Search Engine Optimization", "Sales Efficiency Optimization", "System Engagement Output", "Social Event Ordering"],
                "answer": "Search Engine Optimization"
            },
            {
                "question": "Which platform is popular for e‑commerce websites?",
                "options": ["Shopify", "Photoshop", "AutoCAD", "Slack"],
                "answer": "Shopify"
            },
            {
                "question": "What does PPC mean in digital marketing?",
                "options": ["Pay‑Per‑Click", "Product‑Price Comparison", "Page‑Per‑Customer", "Performance‑Per‑Cost"],
                "answer": "Pay‑Per‑Click"
            },
            {
                "question": "Which is a key metric for e‑commerce performance?",
                "options": ["Conversion Rate", "Number of employees", "Store cleanliness", "Parking availability"],
                "answer": "Conversion Rate"
            },
            {
                "question": "What is a shopping cart abandonment?",
                "options": ["When a user adds items but doesn’t check out", "User buys everything", "User clicks but never lands", "User returns item"],
                "answer": "When a user adds items but doesn’t check out"
            },
            {
                "question": "Which tool can analyze website traffic?",
                "options": ["Google Analytics", "Excel", "PowerPoint", "Word"],
                "answer": "Google Analytics"
            },
            {
                "question": "What does UX stand for?",
                "options": ["User Experience", "User X‑ray", "Unique Exchange", "Use‑on‑X"],
                "answer": "User Experience"
            },
            {
                "question": "What is A/B testing used for?",
                "options": ["Comparing two versions of a page", "Testing app crashes", "Measuring page load time", "Tracking inventory"],
                "answer": "Comparing two versions of a page"
            },
            {
                "question": "What is affiliate marketing?",
                "options": ["Earning commission by promoting products", "Selling own products only", "Managing staff performance", "Stock keeping"],
                "answer": "Earning commission by promoting products"
            },
            {
                "question": "What does CRM stand for?",
                "options": ["Customer Relationship Management", "Cost Revenue Minimization", "Customer Resource Measure", "Campaign Response Model"],
                "answer": "Customer Relationship Management"
            },

            {
                "question": "What is dropshipping?",
                "options": ["Selling products without holding stock", "Bulk shipping only", "In‑store pickup", "Returns only"],
                "answer": "Selling products without holding stock"
            },
            {
                "question": "Why optimize product page images?",
                "options": ["Improved load speed & SEO", "Hide details", "Increase file size", "Ignore visuals"],
                "answer": "Improved load speed & SEO"
            },
            {
                "question": "What is the importance of mobile optimization?",
                "options": ["Better user experience on phones", "Worse navigation", "No conversions", "Ignore mobile users"],
                "answer": "Better user experience on phones"
            },
            {
                "question": "What does CTA stand for?",
                "options": ["Call To Action", "Customer To Account", "Cart Total Amount", "Conversion Time Average"],
                "answer": "Call To Action"
            },
            {
                "question": "What is cross‑selling?",
                "options": ["Suggesting related products", "Selling extra stock only", "Never suggest", "Change price only"],
                "answer": "Suggesting related products"
            },
            {
                "question": "Which is a secure payment method online?",
                "options": ["SSL encryption", "Open HTTP", "Unencrypted email", "Plain text transfer"],
                "answer": "SSL encryption"
            },
            {
                "question": "Why use product reviews?",
                "options": ["Build trust and social proof", "Ignore user opinion", "Hide ratings", "Delay decisions"],
                "answer": "Build trust and social proof"
            },
            {
                "question": "What does omnichannel mean?",
                "options": ["Consistent experience across multiple channels", "Online only", "Offline only", "Store only"],
                "answer": "Consistent experience across multiple channels"
            },
            {
                "question": "What is a landing page?",
                "options": ["Page designed to convert visitors", "Home page only", "Error page", "Admin page"],
                "answer": "Page designed to convert visitors"
            },
            {
                "question": "Why track average order value (AOV)?",
                "options": ["Increase revenue per transaction", "Reduce order size", "Ignore totals", "Track staff only"],
                "answer": "Increase revenue per transaction"
            },

            {
                "question": "What is remarketing?",
                "options": ["Targeting users who visited site before", "Blocking previous users", "Ignoring past visitors", "Deleting history"],
                "answer": "Targeting users who visited site before"
            },
            {
                "question": "Why use social proof like reviews?",
                "options": ["Boost credibility", "Confuse buyers", "Hide products", "Reduce trust"],
                "answer": "Boost credibility"
            },
            {
                "question": "What is site speed optimization?",
                "options": ["Reduce page load time for usability & SEO", "Add more images", "Ignore performance", "Slow down navigation"],
                "answer": "Reduce page load time for usability & SEO"
            },
            {
                "question": "What does SKU stand for?",
                "options": ["Stock Keeping Unit", "Sales Knowledge Unit", "Site Key Utility", "Shipping Kitchen Unit"],
                "answer": "Stock Keeping Unit"
            },
            {
                "question": "What is bounce rate?",
                "options": ["Percentage of visitors leaving immediately", "Conversion rate only", "Scrolling time", "Page views per user"],
                "answer": "Percentage of visitors leaving immediately"
            },
            {
                "question": "Which payment gateway is widely used?",
                "options": ["PayPal", "FaxPay", "MailMoney", "PhoneTransfer"],
                "answer": "PayPal"
            },
            {
                "question": "Why personalize emails?",
                "options": ["Increase open and click rates", "Confuse users", "Auto‑ignore", "Spam inbox only"],
                "answer": "Increase open and click rates"
            },
            {
                "question": "What is CTA placement importance?",
                "options": ["Improves conversion when visible", "Hides action", "Confuses user", "Reduces conversions"],
                "answer": "Improves conversion when visible"
            },
            {
                "question": "What is a product feed?",
                "options": ["List of product data for ad platforms", "In‑store display", "Order packing slip", "Kitchen menu"],
                "answer": "List of product data for ad platforms"
            },

            {
                "question": "Why monitor cart abandonment rate?",
                "options": ["Identify checkout issues", "Ignore lost revenue", "Avoid trends", "Track staff"],
                "answer": "Identify checkout issues"
            },
            {
                "question": "What is GDPR compliance?",
                "options": ["Protecting user data in EU markets", "Ignore privacy", "Only email users", "Share data publicly"],
                "answer": "Protecting user data in EU markets"
            },
            {
                "question": "Why optimize product titles and descriptions?",
                "options": ["Improve SEO and clarity", "Hide details", "Confuse buyers", "Lengthen for no reason"],
                "answer": "Improve SEO and clarity"
            },
            {
                "question": "What is the role of heat maps?",
                "options": ["Visualize where users click/scroll", "Track stock", "Product images only", "Ignore user behavior"],
                "answer": "Visualize where users click/scroll"
            },
            {
                "question": "How to reduce friction in checkout?",
                "options": ["Simplify form fields and steps", "Add extra steps", "Ignore usability", "Hide errors"],
                "answer": "Simplify form fields and steps"
            },
            {
                "question": "What is multi‑currency support?",
                "options": ["Allow checkout in different currencies", "Single currency only", "No conversion", "Default USD"],
                "answer": "Allow checkout in different currencies"
            },
            {
                "question": "Why A/B test pricing?",
                "options": ["Determine optimal price for conversions", "Ignore pricing", "Use guesswork", "High price only"],
                "answer": "Determine optimal price for conversions"
            },
            {
                "question": "What is personalization in e‑commerce?",
                "options": ["Showing product recommendations based on behavior", "One‑size‑fits‑all", "Ignore user visit", "Random suggestions"],
                "answer": "Showing product recommendations based on behavior"
            }
        ],
        "Inventory Manager": [
            {
                "question": "What is inventory turnover?",
                "options": ["How often stock is sold and replaced", "Number of suppliers", "Employee count", "Store size"],
                "answer": "How often stock is sold and replaced"
            },
            {
                "question": "What does FIFO stand for?",
                "options": ["First In, First Out", "Fast Inventory, Fast Out", "Final Inventory, Final Order", "First Input, Final Output"],
                "answer": "First In, First Out"
            },
            {
                "question": "Which metric measures days goods are in inventory?",
                "options": ["Days Inventory Outstanding (DIO)", "Inventory Cost Ratio", "Shelf Life", "Stock Age"],
                "answer": "Days Inventory Outstanding (DIO)"
            },
            {
                "question": "What is safety stock?",
                "options": ["Extra inventory in case of uncertainty", "Expired stock", "Damaged goods", "Customer returns"],
                "answer": "Extra inventory in case of uncertainty"
            },
            {
                "question": "What is reorder point?",
                "options": ["Inventory level to trigger new order", "Max warehouse capacity", "Number of SKUs", "Lead time"],
                "answer": "Inventory level to trigger new order"
            },
            {
                "question": "What does EOQ stand for?",
                "options": ["Economic Order Quantity", "Estimated Order Quality", "Effective On‑site Quantity", "Each Order Quickly"],
                "answer": "Economic Order Quantity"
            },
            {
                "question": "Why track shrinkage?",
                "options": ["Identify theft or loss", "Ignore stock loss", "Reduce pricing", "Delay restocking"],
                "answer": "Identify theft or loss"
            },
            {
                "question": "What is cycle counting?",
                "options": ["Regular partial inventory checks", "Full count once a year", "Random sampling only", "Vendor count only"],
                "answer": "Regular partial inventory checks"
            },
            {
                "question": "Why measure stock accuracy?",
                "options": ["Ensure system matches physical stock", "Ignore differences", "Duplicate order", "Delay reporting"],
                "answer": "Ensure system matches physical stock"
            },
            {
                "question": "What does lead time mean?",
                "options": ["Time between ordering and receiving stock", "Store opening hours", "Employee shift duration", "Promotion span"],
                "answer": "Time between ordering and receiving stock"
            },

            {
                "question": "What is dead stock?",
                "options": ["Items not sold over time", "Fast‑selling items", "Carton packaging", "Display props"],
                "answer": "Items not sold over time"
            },
            {
                "question": "What is ABC analysis?",
                "options": ["Categorizing inventory by value", "Employee task ranking", "Sales territory map", "Shipment method"],
                "answer": "Categorizing inventory by value"
            },
            {
                "question": "Why use barcode systems?",
                "options": ["Streamline tracking and accuracy", "Increase errors", "Slow processing", "Manual paperwork"],
                "answer": "Streamline tracking and accuracy"
            },
            {
                "question": "What is a buffer stock?",
                "options": ["Extra inventory for emergencies", "Expired goods", "During discount period", "Return items only"],
                "answer": "Extra inventory for emergencies"
            },
            {
                "question": "Why track stock aging?",
                "options": ["Manage obsolescence", "Ignore expiration", "Store forever", "Reduce reporting"],
                "answer": "Manage obsolescence"
            },
            {
                "question": "What is order fill rate?",
                "options": ["Percentage of orders fulfilled completely", "Return rate", "Inventory aging rate", "Supplier count"],
                "answer": "Percentage of orders fulfilled completely"
            },
            {
                "question": "What is safety lead time?",
                "options": ["Extra time before reordering to buffer delays", "Shipping time", "Supplier duration", "Warehouse stay length"],
                "answer": "Extra time before reordering to buffer delays"
            },
            {
                "question": "Why reconcile physical and system stock?",
                "options": ["Identify discrepancies", "Ignore loss", "Fake accuracy", "Delay restock"],
                "answer": "Identify discrepancies"
            },
            {
                "question": "What does MOQ mean?",
                "options": ["Minimum Order Quantity", "Maximum Order Quantity", "Measured On Queue", "Must Order Quickly"],
                "answer": "Minimum Order Quantity"
            },

            {
                "question": "Which is a fixed cost in inventory management?",
                "options": ["Warehouse rent", "Variable packaging cost", "Per‑item freight", "Seasonal discount"],
                "answer": "Warehouse rent"
            },
            {
                "question": "Why forecast demand?",
                "options": ["Prevent under or over‑stocking", "Ignore customers", "Buy blindly", "Delay purchase"],
                "answer": "Prevent under or over‑stocking"
            },
            {
                "question": "What is just‑in‑time (JIT) inventory?",
                "options": ["Minimal stock held until needed", "Bulk order only", "Store all items", "No reorder policy"],
                "answer": "Minimal stock held until needed"
            },
            {
                "question": "What is stockout?",
                "options": ["Stock unavailable when needed", "Overstocked items", "Expired goods", "Misplaced item"],
                "answer": "Stock unavailable when needed"
            },
            {
                "question": "Why use inventory reports?",
                "options": ["Inform procurement decisions", "Hide data", "Ignore restocking", "Confuse teams"],
                "answer": "Inform procurement decisions"
            },
            {
                "question": "What is the cost of goods sold (COGS)?",
                "options": ["Direct cost of goods sold", "Inventory holding cost", "Staff salary", "Rent"],
                "answer": "Direct cost of goods sold"
            },
            {
                "question": "Why implement cycle count programs?",
                "options": ["Improve accuracy without full shutdown", "Ignore inventory", "High cost only", "Once‑a‑year count"],
                "answer": "Improve accuracy without full shutdown"
            },
            {
                "question": "What does supply chain visibility mean?",
                "options": ["End‑to‑end tracking of inventory flow", "Only warehouse view", "Blind suppliers", "Ignore transit"],
                "answer": "End‑to‑end tracking of inventory flow"
            },
            {
                "question": "What is replenishment?",
                "options": ["Restocking items to shelves or warehouse", "Order cancellation", "Product return only", "Display cleaning"],
                "answer": "Restocking items to shelves or warehouse"
            },
            {
                "question": "Why optimize reorder point?",
                "options": ["Balance stock availability and cost", "Ignore reorder timing", "Buy randomly", "Don't track sales"],
                "answer": "Balance stock availability and cost"
            },
            {
                "question": "What is vendor‑managed inventory (VMI)?",
                "options": ["Supplier manages inventory levels", "Warehouse stocks only", "Retailer manages all", "Ignore supplier"],
                "answer": "Supplier manages inventory levels"
            },
            {
                "question": "What is stock keeping accuracy?",
                "options": ["System matches physical inventory", "Everything mismatches", "No tracking", "Ignore system"],
                "answer": "System matches physical inventory"
            }
        ],
        "Retail Buyer": [
            {
                "question": "What is the primary role of a retail buyer?",
                "options": ["Select and purchase products for resale", "Manage store staff", "Design store layout", "Handle customer complaints"],
                "answer": "Select and purchase products for resale"
            },
            {
                "question": "What does MOQ stand for?",
                "options": ["Minimum Order Quantity", "Maximum Order Quantity", "Monthly Order Quota", "Market Order Quality"],
                "answer": "Minimum Order Quantity"
            },
            {
                "question": "Which factor is most important when selecting a supplier?",
                "options": ["Product quality", "Store location", "Number of employees", "Advertising budget"],
                "answer": "Product quality"
            },
            {
                "question": "What is lead time in purchasing?",
                "options": ["Time between order and delivery", "Store opening hours", "Employee shift length", "Product shelf life"],
                "answer": "Time between order and delivery"
            },
            {
                "question": "Why is demand forecasting important for a retail buyer?",
                "options": ["To avoid overstock and stockouts", "To manage staff schedules", "To set prices", "To advertise products"],
                "answer": "To avoid overstock and stockouts"
            },
            {
                "question": "What is vendor negotiation?",
                "options": ["Discussing price and terms with suppliers", "Customer discounting", "Product packaging", "Inventory counting"],
                "answer": "Discussing price and terms with suppliers"
            },
            {
                "question": "Which document authorizes a purchase?",
                "options": ["Purchase order", "Invoice", "Receipt", "Sales contract"],
                "answer": "Purchase order"
            },
            {
                "question": "What does SKU stand for?",
                "options": ["Stock Keeping Unit", "Sales Knowledge Unit", "Store Key Utility", "Supplier Key Unit"],
                "answer": "Stock Keeping Unit"
            },
            {
                "question": "Why is product assortment important?",
                "options": ["To meet customer preferences and maximize sales", "To decorate the store", "To reduce stock", "To increase prices"],
                "answer": "To meet customer preferences and maximize sales"
            },
            {
                "question": "What is a stockout?",
                "options": ["When an item is out of stock", "When inventory is too high", "When prices drop", "When items are damaged"],
                "answer": "When an item is out of stock"
            },

            {
                "question": "What is the purpose of a purchase requisition?",
                "options": ["Request to buy products internally", "Invoice for payment", "Sales report", "Supplier contract"],
                "answer": "Request to buy products internally"
            },
            {
                "question": "Why monitor inventory turnover?",
                "options": ["To assess how fast stock sells", "To track employee performance", "To advertise products", "To measure store cleanliness"],
                "answer": "To assess how fast stock sells"
            },
            {
                "question": "What is the economic order quantity (EOQ)?",
                "options": ["Optimal order size to minimize costs", "Largest order possible", "Smallest order allowed", "Daily order volume"],
                "answer": "Optimal order size to minimize costs"
            },
            {
                "question": "Why is supplier relationship management important?",
                "options": ["Ensure reliable supply and better terms", "Ignore supplier feedback", "Reduce product quality", "Increase costs"],
                "answer": "Ensure reliable supply and better terms"
            },
            {
                "question": "What does quality control involve?",
                "options": ["Checking products meet standards", "Counting inventory", "Advertising products", "Sales tracking"],
                "answer": "Checking products meet standards"
            },
            {
                "question": "What is just-in-time (JIT) purchasing?",
                "options": ["Ordering goods to arrive as needed", "Bulk ordering", "Stockpiling inventory", "Ignoring demand"],
                "answer": "Ordering goods to arrive as needed"
            },
            {
                "question": "Why is price comparison important?",
                "options": ["To get the best value and reduce costs", "To increase prices", "To reduce product variety", "To delay purchases"],
                "answer": "To get the best value and reduce costs"
            },
            {
                "question": "What is the role of a purchase order (PO)?",
                "options": ["Formalize purchase agreement", "Record sales", "Manage staff", "Advertise products"],
                "answer": "Formalize purchase agreement"
            },
            {
                "question": "What is vendor compliance?",
                "options": ["Suppliers meeting agreed terms and standards", "Ignoring supplier rules", "Changing product design", "Altering prices"],
                "answer": "Suppliers meeting agreed terms and standards"
            },
            {
                "question": "Why analyze sales data?",
                "options": ["Identify best sellers and trends", "Ignore customer behavior", "Reduce advertising", "Manage employees"],
                "answer": "Identify best sellers and trends"
            },

            {
                "question": "What is product lifecycle management?",
                "options": ["Managing product stages from introduction to decline", "Store renovation", "Employee scheduling", "Advertising planning"],
                "answer": "Managing product stages from introduction to decline"
            },
            {
                "question": "Why track supplier lead times?",
                "options": ["Plan orders to avoid delays", "Ignore delivery times", "Delay purchasing", "Reduce inventory"],
                "answer": "Plan orders to avoid delays"
            },
            {
                "question": "What is drop shipping?",
                "options": ["Supplier ships directly to customer", "Store stocks all products", "Return management", "Bulk shipping"],
                "answer": "Supplier ships directly to customer"
            },
            {
                "question": "Why is return policy important for buyers?",
                "options": ["Protects store from faulty goods", "Ignore defective products", "Increase stock", "Reduce sales"],
                "answer": "Protects store from faulty goods"
            },
            {
                "question": "What is vendor rating?",
                "options": ["Evaluating supplier performance", "Counting employees", "Advertising products", "Managing pricing"],
                "answer": "Evaluating supplier performance"
            },
            {
                "question": "What does SKU rationalization mean?",
                "options": ["Reducing unnecessary product variations", "Increasing stock types", "Advertising products", "Ignoring sales"],
                "answer": "Reducing unnecessary product variations"
            },
            {
                "question": "What is bulk buying?",
                "options": ["Purchasing large quantities to reduce costs", "Ordering small amounts", "Ignoring suppliers", "Delaying orders"],
                "answer": "Purchasing large quantities to reduce costs"
            },
            {
                "question": "Why is market research important?",
                "options": ["Understand customer needs and trends", "Ignore customers", "Reduce product range", "Increase prices"],
                "answer": "Understand customer needs and trends"
            },
            {
                "question": "What is consignment stock?",
                "options": ["Stock owned by supplier until sold", "Stock owned by store", "Damaged goods", "Returned items"],
                "answer": "Stock owned by supplier until sold"
            },
            {
                "question": "What is the main risk of overstocking?",
                "options": ["Increased holding costs and obsolescence", "Better customer service", "Lower prices", "Increased sales"],
                "answer": "Increased holding costs and obsolescence"
            },

            {
                "question": "Why is diversification important in product selection?",
                "options": ["Reduce risk by offering variety", "Limit choices", "Ignore customer preferences", "Increase prices only"],
                "answer": "Reduce risk by offering variety"
            },
            {
                "question": "What is a vendor managed inventory (VMI)?",
                "options": ["Supplier manages stock levels for the retailer", "Store manages all stock", "Ignore supplier", "Delay replenishment"],
                "answer": "Supplier manages stock levels for the retailer"
            },
            {
                "question": "Why track purchase order status?",
                "options": ["Ensure timely delivery", "Ignore delays", "Reduce purchases", "Manage employees"],
                "answer": "Ensure timely delivery"
            },
            {
                "question": "What is backorder?",
                "options": ["Order fulfillment delayed due to lack of stock", "Cancelled order", "Returned product", "Damaged stock"],
                "answer": "Order fulfillment delayed due to lack of stock"
            },
            {
                "question": "Why is supplier diversity important?",
                "options": ["Reduce dependency on single source", "Limit suppliers", "Increase prices", "Ignore procurement"],
                "answer": "Reduce dependency on single source"
            },
            {
                "question": "What is the role of purchase contracts?",
                "options": ["Define terms and conditions with suppliers", "Manage sales", "Employee hiring", "Marketing plans"],
                "answer": "Define terms and conditions with suppliers"
            },
            {
                "question": "Why is product packaging important in buying?",
                "options": ["Protects goods and attracts customers", "Ignore packaging", "Reduce costs only", "Delay delivery"],
                "answer": "Protects goods and attracts customers"
            },
            {
                "question": "What is demand variability?",
                "options": ["Fluctuation in customer demand over time", "Fixed sales", "Constant inventory", "Supplier delivery time"],
                "answer": "Fluctuation in customer demand over time"
            },
            {
                "question": "Why analyze competitor pricing?",
                "options": ["Stay competitive and optimize pricing", "Ignore market prices", "Fix prices arbitrarily", "Increase costs"],
                "answer": "Stay competitive and optimize pricing"
            },
            {
                "question": "What is an invoice?",
                "options": ["Document requesting payment for goods", "Purchase order", "Sales report", "Inventory list"],
                "answer": "Document requesting payment for goods"
            },
            {
                "question": "Why perform product quality inspections?",
                "options": ["Ensure products meet specifications", "Ignore defects", "Delay stocking", "Reduce costs"],
                "answer": "Ensure products meet specifications"
            }
        ],

    },
    "Arts, Media & Design": {
        "Graphic Designer": [
            {
                "question": "What is the primary purpose of typography in design?",
                "options": ["Enhance readability", "Add color", "Create animations", "Manage layers"],
                "answer": "Enhance readability"
            },
            {
                "question": "Which software is commonly used for vector graphics?",
                "options": ["Adobe Illustrator", "Adobe Photoshop", "Corel Painter", "InDesign"],
                "answer": "Adobe Illustrator"
            },
            {
                "question": "What does DPI stand for in digital images?",
                "options": ["Dots Per Inch", "Data Processing Interface", "Digital Print Index", "Design Pattern Identifier"],
                "answer": "Dots Per Inch"
            },
            {
                "question": "Which color model is used for print?",
                "options": ["CMYK", "RGB", "HEX", "HSL"],
                "answer": "CMYK"
            },
            {
                "question": "What is kerning?",
                "options": ["Adjusting space between characters", "Changing font size", "Aligning text", "Adding shadows"],
                "answer": "Adjusting space between characters"
            },
            {
                "question": "Which file format supports transparency?",
                "options": ["PNG", "JPEG", "BMP", "TIFF"],
                "answer": "PNG"
            },
            {
                "question": "What is a mood board?",
                "options": ["A collage of images to convey design style", "A final design layout", "A type of font", "A design software tool"],
                "answer": "A collage of images to convey design style"
            },
            {
                "question": "What principle does ‘contrast’ in design refer to?",
                "options": ["Difference between elements to create emphasis", "Matching colors", "Using only one font", "Aligning elements"],
                "answer": "Difference between elements to create emphasis"
            },
            {
                "question": "Which software is primarily used for photo editing?",
                "options": ["Adobe Photoshop", "Adobe InDesign", "Adobe Premiere", "Adobe XD"],
                "answer": "Adobe Photoshop"
            },
            {
                "question": "What does ‘bleed’ mean in print design?",
                "options": ["Extending images beyond the trim edge", "Adding shadows", "Reducing file size", "Using bold fonts"],
                "answer": "Extending images beyond the trim edge"
            },

            {
                "question": "Which element is NOT part of the design process?",
                "options": ["Sleeping", "Research", "Sketching", "Prototyping"],
                "answer": "Sleeping"
            },
            {
                "question": "What is the rule of thirds?",
                "options": ["Dividing an image into 9 parts to create balance", "Using three fonts", "Aligning all elements to the center", "Choosing three colors"],
                "answer": "Dividing an image into 9 parts to create balance"
            },
            {
                "question": "Which design principle focuses on how elements are arranged?",
                "options": ["Alignment", "Contrast", "Repetition", "Proximity"],
                "answer": "Alignment"
            },
            {
                "question": "What does raster graphics mean?",
                "options": ["Images made of pixels", "Images made of vectors", "Printed images", "3D models"],
                "answer": "Images made of pixels"
            },
            {
                "question": "Which is NOT a common font category?",
                "options": ["Comic Sans", "Serif", "Sans Serif", "Script"],
                "answer": "Comic Sans"
            },
            {
                "question": "What is a vector graphic?",
                "options": ["An image made of paths and points", "An image made of pixels", "A photo", "A printed design"],
                "answer": "An image made of paths and points"
            },
            {
                "question": "Which color scheme uses colors opposite on the color wheel?",
                "options": ["Complementary", "Analogous", "Triadic", "Monochromatic"],
                "answer": "Complementary"
            },
            {
                "question": "What is white space?",
                "options": ["Empty space in a design", "The color white", "Background color", "A font type"],
                "answer": "Empty space in a design"
            },
            {
                "question": "What is an infographic?",
                "options": ["Visual representation of information or data", "A type of photo", "A font style", "An animation"],
                "answer": "Visual representation of information or data"
            },
            {
                "question": "Which tool is used to select a specific color in Adobe Photoshop?",
                "options": ["Eyedropper tool", "Brush tool", "Lasso tool", "Crop tool"],
                "answer": "Eyedropper tool"
            },

            {
                "question": "What does ‘opacity’ control in design?",
                "options": ["Transparency of an element", "Size", "Position", "Color"],
                "answer": "Transparency of an element"
            },
            {
                "question": "Which resolution is best for print?",
                "options": ["300 DPI", "72 DPI", "150 DPI", "600 DPI"],
                "answer": "300 DPI"
            },
            {
                "question": "What does a Pantone color refer to?",
                "options": ["Standardized color matching system", "Random color", "Web color", "Font color"],
                "answer": "Standardized color matching system"
            },
            {
                "question": "Which principle is about creating harmony using repeated elements?",
                "options": ["Repetition", "Alignment", "Contrast", "Balance"],
                "answer": "Repetition"
            },
            {
                "question": "What is the purpose of wireframing?",
                "options": ["Outline basic layout and structure", "Finalizing design", "Choosing fonts", "Adding colors"],
                "answer": "Outline basic layout and structure"
            },
            {
                "question": "Which format is best for scalable logos?",
                "options": ["SVG", "JPEG", "GIF", "PNG"],
                "answer": "SVG"
            },
            {
                "question": "Which principle deals with the visual weight of elements?",
                "options": ["Balance", "Contrast", "Repetition", "Alignment"],
                "answer": "Balance"
            },
            {
                "question": "What is a raster image’s major limitation?",
                "options": ["Loses quality when scaled", "Limited colors", "No transparency", "Not printable"],
                "answer": "Loses quality when scaled"
            },
            {
                "question": "Which Adobe software is best for page layout and print design?",
                "options": ["InDesign", "Photoshop", "Illustrator", "After Effects"],
                "answer": "InDesign"
            },
            {
                "question": "What is the ‘golden ratio’ in design?",
                "options": ["Mathematical ratio creating visually pleasing compositions", "Font size", "Color scheme", "Image resolution"],
                "answer": "Mathematical ratio creating visually pleasing compositions"
            },

            {
                "question": "What does ‘leading’ mean in typography?",
                "options": ["Vertical space between lines of text", "Horizontal space between letters", "Font size", "Text color"],
                "answer": "Vertical space between lines of text"
            },
            {
                "question": "Which is NOT a vector graphic file format?",
                "options": ["JPEG", "AI", "SVG", "EPS"],
                "answer": "JPEG"
            },
            {
                "question": "What tool is used to create paths in Adobe Illustrator?",
                "options": ["Pen tool", "Brush tool", "Lasso tool", "Magic Wand tool"],
                "answer": "Pen tool"
            },
            {
                "question": "Which principle helps to create emphasis in design?",
                "options": ["Contrast", "Alignment", "Repetition", "Balance"],
                "answer": "Contrast"
            },
            {
                "question": "What is ‘mockup’ in graphic design?",
                "options": ["A realistic preview of the design", "Final file", "Font type", "Color palette"],
                "answer": "A realistic preview of the design"
            },
            {
                "question": "Which color mode is used for screens?",
                "options": ["RGB", "CMYK", "Grayscale", "Pantone"],
                "answer": "RGB"
            },
            {
                "question": "Which design element refers to the surface quality or feel of an object?",
                "options": ["Texture", "Color", "Line", "Shape"],
                "answer": "Texture"
            },
            {
                "question": "What is the use of ‘grid’ in design?",
                "options": ["Align and organize content", "Add colors", "Create animations", "Select fonts"],
                "answer": "Align and organize content"
            },
            {
                "question": "Which tool in Photoshop allows non-destructive editing?",
                "options": ["Adjustment layers", "Brush tool", "Eraser tool", "Clone stamp"],
                "answer": "Adjustment layers"
            },
            {
                "question": "What is a ‘brand identity’?",
                "options": ["Visual elements representing a brand", "Company logo only", "Product packaging", "Sales strategy"],
                "answer": "Visual elements representing a brand"
            }
        ],
        "Animator": [
            {
                "question": "What is ‘keyframing’ in animation?",
                "options": ["Setting important frames to define movement", "Adding sound", "Color correction", "Editing video"],
                "answer": "Setting important frames to define movement"
            },
            {
                "question": "Which software is commonly used for 3D animation?",
                "options": ["Autodesk Maya", "Adobe Illustrator", "Photoshop", "InDesign"],
                "answer": "Autodesk Maya"
            },
            {
                "question": "What does FPS stand for in animation?",
                "options": ["Frames Per Second", "Frames Per Scene", "First Person Shooter", "Final Production Stage"],
                "answer": "Frames Per Second"
            },
            {
                "question": "What is ‘rigging’ in 3D animation?",
                "options": ["Creating a skeleton for a model", "Adding textures", "Editing audio", "Rendering"],
                "answer": "Creating a skeleton for a model"
            },
            {
                "question": "What is ‘onion skinning’ used for?",
                "options": ["Viewing previous and next frames", "Adding color", "3D modeling", "Audio syncing"],
                "answer": "Viewing previous and next frames"
            },
            {
                "question": "What type of animation uses physical models?",
                "options": ["Stop motion", "2D animation", "Motion graphics", "Cel animation"],
                "answer": "Stop motion"
            },
            {
                "question": "What is ‘tweening’ in animation?",
                "options": ["Creating intermediate frames between keyframes", "Adding sound", "Color grading", "Final rendering"],
                "answer": "Creating intermediate frames between keyframes"
            },
            {
                "question": "Which software is commonly used for 2D animation?",
                "options": ["Adobe Animate", "Maya", "Premiere Pro", "After Effects"],
                "answer": "Adobe Animate"
            },
            {
                "question": "What does ‘rendering’ mean?",
                "options": ["Generating the final animation output", "Drawing sketches", "Editing audio", "Creating storyboards"],
                "answer": "Generating the final animation output"
            },
            {
                "question": "What is a storyboard?",
                "options": ["A sequence of drawings representing animation scenes", "Final animation file", "Software plugin", "Animation script"],
                "answer": "A sequence of drawings representing animation scenes"
            },

            {
                "question": "What is ‘motion capture’ used for?",
                "options": ["Recording real movement to animate characters", "Editing videos", "Creating sound effects", "Color correction"],
                "answer": "Recording real movement to animate characters"
            },
            {
                "question": "What does ‘fps’ affect in animation?",
                "options": ["Smoothness of motion", "Color quality", "Audio clarity", "Lighting"],
                "answer": "Smoothness of motion"
            },
            {
                "question": "What is ‘lip-syncing’?",
                "options": ["Matching character mouth movements to dialogue", "Adding music", "Animating backgrounds", "Editing sound"],
                "answer": "Matching character mouth movements to dialogue"
            },
            {
                "question": "What is a ‘loop’ in animation?",
                "options": ["Repeating sequence of frames", "Single frame", "Still image", "Sound effect"],
                "answer": "Repeating sequence of frames"
            },
            {
                "question": "What is ‘ease-in’ and ‘ease-out’?",
                "options": ["Gradual acceleration or deceleration of movement", "Adding sound effects", "Color grading", "Editing backgrounds"],
                "answer": "Gradual acceleration or deceleration of movement"
            },
            {
                "question": "What is ‘frame rate’?",
                "options": ["Number of frames displayed per second", "Total number of frames", "Screen resolution", "Animation length"],
                "answer": "Number of frames displayed per second"
            },
            {
                "question": "What is the function of a ‘rig’ in animation?",
                "options": ["Control model movements", "Add textures", "Create lighting", "Add sound"],
                "answer": "Control model movements"
            },
            {
                "question": "Which format is commonly used for animated GIFs?",
                "options": ["GIF", "JPEG", "PNG", "TIFF"],
                "answer": "GIF"
            },
            {
                "question": "What is ‘key pose’?",
                "options": ["Important position in a sequence", "Background image", "Sound effect", "Color palette"],
                "answer": "Important position in a sequence"
            },
            {
                "question": "What does ‘2D animation’ primarily use?",
                "options": ["Flat images", "3D models", "Physical puppets", "Stop motion"],
                "answer": "Flat images"
            },

            {
                "question": "What is ‘cel animation’?",
                "options": ["Hand-drawn animation on transparent sheets", "3D computer animation", "Stop motion", "Motion capture"],
                "answer": "Hand-drawn animation on transparent sheets"
            },
            {
                "question": "What does ‘FPS’ of 24 mean?",
                "options": ["24 frames shown each second", "Animation length 24 seconds", "24 colors used", "24 layers"],
                "answer": "24 frames shown each second"
            },
            {
                "question": "What is ‘chroma keying’?",
                "options": ["Replacing a solid color background digitally", "Adding sound", "Editing frames", "3D modeling"],
                "answer": "Replacing a solid color background digitally"
            },
            {
                "question": "What is ‘animatics’?",
                "options": ["Rough animated storyboard", "Final animation", "Soundtrack", "3D model"],
                "answer": "Rough animated storyboard"
            },
            {
                "question": "Which part of animation controls timing and spacing?",
                "options": ["Timing chart", "Color palette", "Storyboard", "Script"],
                "answer": "Timing chart"
            },
            {
                "question": "What is ‘frame-by-frame’ animation?",
                "options": ["Animating each frame individually", "Using motion capture", "Tweening", "Using rigs"],
                "answer": "Animating each frame individually"
            },
            {
                "question": "What is ‘morphing’ in animation?",
                "options": ["Smoothly transforming one shape into another", "Adding shadows", "Adding sound", "Editing video"],
                "answer": "Smoothly transforming one shape into another"
            },
            {
                "question": "What is the main difference between 2D and 3D animation?",
                "options": ["2D uses flat images; 3D uses models", "2D is faster", "3D uses less software", "2D is more realistic"],
                "answer": "2D uses flat images; 3D uses models"
            },
            {
                "question": "What is the role of ‘post-production’ in animation?",
                "options": ["Editing and finalizing animation", "Storyboarding", "Sketching", "Creating rigs"],
                "answer": "Editing and finalizing animation"
            },
            {
                "question": "What is ‘animation pipeline’?",
                "options": ["Series of steps in producing animation", "Software used", "Animation style", "Frame rate"],
                "answer": "Series of steps in producing animation"
            },
            {
                "question": "What is a ‘looping background’?",
                "options": ["Background that repeats seamlessly", "Still image", "Sound effect", "3D model"],
                "answer": "Background that repeats seamlessly"
            },
            {
                "question": "Which device is commonly used for digital drawing in animation?",
                "options": ["Graphics tablet", "Scanner", "Printer", "Mouse"],
                "answer": "Graphics tablet"
            },
            {
                "question": "What is ‘rigid body dynamics’ in 3D animation?",
                "options": ["Simulation of solid objects’ movements", "Soft body movement", "Character animation", "Lighting effects"],
                "answer": "Simulation of solid objects’ movements"
            },
            {
                "question": "What is ‘FPS’ recommended for smooth animation?",
                "options": ["24 or 30 FPS", "10 FPS", "60 FPS", "120 FPS"],
                "answer": "24 or 30 FPS"
            },
            {
                "question": "What is the purpose of ‘storyboarding’?",
                "options": ["Plan the sequence and flow of animation", "Add sound effects", "Create rigs", "Render frames"],
                "answer": "Plan the sequence and flow of animation"
            },
            {
                "question": "What is ‘motion blur’?",
                "options": ["Blurring effect to simulate movement", "Color effect", "Shadow effect", "Lighting effect"],
                "answer": "Blurring effect to simulate movement"
            }
        ],
        "Art Director": [
            {
                "question": "What is the primary role of an Art Director?",
                "options": ["Oversee the visual style and creative direction", "Write scripts", "Edit videos", "Develop software"],
                "answer": "Oversee the visual style and creative direction"
            },
            {
                "question": "Which skill is essential for an Art Director?",
                "options": ["Leadership", "Coding", "Accounting", "Data entry"],
                "answer": "Leadership"
            },
            {
                "question": "What does a style guide provide?",
                "options": ["Rules for consistent visual design", "Animation techniques", "Video editing instructions", "Programming standards"],
                "answer": "Rules for consistent visual design"
            },
            {
                "question": "What is the difference between Art Director and Graphic Designer?",
                "options": ["Art Director manages the overall vision; Graphic Designer executes design", "Graphic Designer manages; Art Director executes", "They are the same", "Art Director codes"],
                "answer": "Art Director manages the overall vision; Graphic Designer executes design"
            },
            {
                "question": "Which tool is commonly used by Art Directors to review designs?",
                "options": ["Adobe InDesign", "Adobe Premiere", "Microsoft Excel", "Final Cut Pro"],
                "answer": "Adobe InDesign"
            },
            {
                "question": "What is a ‘creative brief’?",
                "options": ["Document outlining project goals and requirements", "Final design file", "Animation script", "Soundtrack"],
                "answer": "Document outlining project goals and requirements"
            },
            {
                "question": "Which is NOT typically the responsibility of an Art Director?",
                "options": ["Writing code", "Managing teams", "Approving visual concepts", "Setting budgets"],
                "answer": "Writing code"
            },
            {
                "question": "What does ‘branding’ involve?",
                "options": ["Creating a unique identity for a company or product", "Designing websites", "Editing videos", "Writing copy"],
                "answer": "Creating a unique identity for a company or product"
            },
            {
                "question": "How does an Art Director collaborate with copywriters?",
                "options": ["Ensure visual and text elements align", "Write text themselves", "Design logos", "Edit videos"],
                "answer": "Ensure visual and text elements align"
            },
            {
                "question": "What is the purpose of a mood board?",
                "options": ["Convey the visual tone and direction", "Final design", "Client contract", "Marketing plan"],
                "answer": "Convey the visual tone and direction"
            },

            {
                "question": "Which is a common challenge for Art Directors?",
                "options": ["Balancing creative vision with client needs", "Editing videos", "Coding websites", "Writing scripts"],
                "answer": "Balancing creative vision with client needs"
            },
            {
                "question": "What is ‘visual hierarchy’?",
                "options": ["Arranging elements to show importance", "Choosing colors", "Editing photos", "Writing copy"],
                "answer": "Arranging elements to show importance"
            },
            {
                "question": "What does an Art Director review during a project?",
                "options": ["Design drafts and presentations", "Code", "Budget spreadsheets", "Soundtracks"],
                "answer": "Design drafts and presentations"
            },
            {
                "question": "Which soft skill is crucial for Art Directors?",
                "options": ["Communication", "Programming", "Data analysis", "Machine learning"],
                "answer": "Communication"
            },
            {
                "question": "What is ‘typography’ in art direction?",
                "options": ["Selection and arrangement of type", "Video editing", "Animation", "Web design"],
                "answer": "Selection and arrangement of type"
            },
            {
                "question": "What role does an Art Director play in advertising?",
                "options": ["Create and oversee campaign visuals", "Write ads", "Sell products", "Manage budgets only"],
                "answer": "Create and oversee campaign visuals"
            },
            {
                "question": "Which is an important technical skill for Art Directors?",
                "options": ["Understanding design software", "Programming languages", "Data entry", "Network management"],
                "answer": "Understanding design software"
            },
            {
                "question": "What is the ‘client briefing’?",
                "options": ["Meeting to understand client needs and goals", "Final design review", "Invoice payment", "Staff meeting"],
                "answer": "Meeting to understand client needs and goals"
            },
            {
                "question": "How do Art Directors handle feedback?",
                "options": ["Incorporate constructive criticism and adjust designs", "Ignore it", "Complain", "Rewrite the script"],
                "answer": "Incorporate constructive criticism and adjust designs"
            },
            {
                "question": "What is the importance of ‘consistency’ in design?",
                "options": ["Builds brand recognition and trust", "Makes design colorful", "Speeds up production", "Reduces costs"],
                "answer": "Builds brand recognition and trust"
            },

            {
                "question": "Which document helps Art Directors keep projects on track?",
                "options": ["Project timeline", "Budget report", "Sales data", "Code documentation"],
                "answer": "Project timeline"
            },
            {
                "question": "What is ‘storytelling’ in art direction?",
                "options": ["Using visuals to convey a narrative", "Writing scripts", "Recording audio", "Editing videos"],
                "answer": "Using visuals to convey a narrative"
            },
            {
                "question": "What is the role of an Art Director in UX/UI projects?",
                "options": ["Ensure visual coherence and brand alignment", "Write code", "Develop databases", "Conduct user testing"],
                "answer": "Ensure visual coherence and brand alignment"
            },
            {
                "question": "How do Art Directors motivate creative teams?",
                "options": ["Provide clear vision and constructive feedback", "Ignore team", "Manage budgets only", "Work alone"],
                "answer": "Provide clear vision and constructive feedback"
            },
            {
                "question": "What is a ‘design critique’?",
                "options": ["Review session to evaluate design work", "Final delivery", "Client meeting", "Budget review"],
                "answer": "Review session to evaluate design work"
            },
            {
                "question": "Which is a common tool for collaboration used by Art Directors?",
                "options": ["Slack", "Excel", "Word", "SAP"],
                "answer": "Slack"
            },
            {
                "question": "What does ‘creative direction’ include?",
                "options": ["Vision, style, and tone of projects", "Budget planning", "Coding", "Marketing"],
                "answer": "Vision, style, and tone of projects"
            },
            {
                "question": "What kind of feedback is most helpful for Art Directors?",
                "options": ["Specific and actionable", "Vague", "Negative only", "None"],
                "answer": "Specific and actionable"
            },
            {
                "question": "Why is understanding target audience important for Art Directors?",
                "options": ["Designs resonate and communicate effectively", "To pick colors", "To manage budgets", "To schedule meetings"],
                "answer": "Designs resonate and communicate effectively"
            },
            {
                "question": "What is the importance of ‘branding guidelines’?",
                "options": ["Ensure uniform brand presentation", "Help design websites", "Manage projects", "Write scripts"],
                "answer": "Ensure uniform brand presentation"
            }
        ],
        "Photographer": [
            {
                "question": "Which setting controls the amount of light entering the camera?",
                "options": ["Aperture", "ISO", "Shutter Speed", "White Balance"],
                "answer": "Aperture"
            },
            {
                "question": "What does ISO measure in photography?",
                "options": ["Sensor sensitivity", "Light intensity", "Focus distance", "Lens size"],
                "answer": "Sensor sensitivity"
            },
            {
                "question": "Which shutter speed freezes fast motion?",
                "options": ["Fast shutter speed", "Slow shutter speed", "Medium shutter speed", "Manual focus"],
                "answer": "Fast shutter speed"
            },
            {
                "question": "What is the rule of thirds?",
                "options": ["A composition technique", "Camera setting", "Lens type", "Photo filter"],
                "answer": "A composition technique"
            },
            {
                "question": "What does white balance adjust?",
                "options": ["Color temperature", "Exposure", "Focus", "Resolution"],
                "answer": "Color temperature"
            },

            {
                "question": "Which lens is best for portraits?",
                "options": ["50mm prime lens", "Wide-angle lens", "Fish-eye lens", "Macro lens"],
                "answer": "50mm prime lens"
            },
            {
                "question": "What file format offers the highest quality for editing?",
                "options": ["RAW", "JPEG", "PNG", "GIF"],
                "answer": "RAW"
            },
            {
                "question": "Which lighting setup is used to create soft shadows?",
                "options": ["Softbox", "Direct flash", "Spotlight", "Ring light"],
                "answer": "Softbox"
            },
            {
                "question": "What is bokeh?",
                "options": ["The aesthetic quality of the blur", "Camera shake", "Focus error", "Lens flare"],
                "answer": "The aesthetic quality of the blur"
            },
            {
                "question": "Which camera mode allows full manual control?",
                "options": ["Manual mode", "Auto mode", "Portrait mode", "Landscape mode"],
                "answer": "Manual mode"
            },

            {
                "question": "What does depth of field refer to?",
                "options": ["Area in focus", "Image resolution", "ISO setting", "Shutter speed"],
                "answer": "Area in focus"
            },
            {
                "question": "Which is a common photo editing software?",
                "options": ["Adobe Photoshop", "Microsoft Word", "Excel", "PowerPoint"],
                "answer": "Adobe Photoshop"
            },
            {
                "question": "What is the purpose of a tripod?",
                "options": ["Stabilize the camera", "Increase ISO", "Adjust white balance", "Change aperture"],
                "answer": "Stabilize the camera"
            },
            {
                "question": "Which lighting color temperature is closest to daylight?",
                "options": ["5500K", "3200K", "4500K", "2700K"],
                "answer": "5500K"
            },
            {
                "question": "What does shutter speed affect?",
                "options": ["Motion blur", "Color", "ISO", "Aperture"],
                "answer": "Motion blur"
            },

            {
                "question": "Which mode is best for capturing fast-moving sports?",
                "options": ["Shutter priority", "Aperture priority", "Manual", "Program"],
                "answer": "Shutter priority"
            },
            {
                "question": "What is lens flare?",
                "options": ["Light reflecting inside the lens", "Camera shake", "Focus error", "Incorrect white balance"],
                "answer": "Light reflecting inside the lens"
            },
            {
                "question": "What is bracketing in photography?",
                "options": ["Taking multiple shots at different exposures", "Changing lenses", "Using different filters", "Adjusting white balance"],
                "answer": "Taking multiple shots at different exposures"
            },
            {
                "question": "Which lens type is used for extreme close-ups?",
                "options": ["Macro lens", "Telephoto lens", "Wide-angle lens", "Standard lens"],
                "answer": "Macro lens"
            },
            {
                "question": "What does the histogram show?",
                "options": ["Exposure levels", "Lens quality", "Focus area", "Camera battery"],
                "answer": "Exposure levels"
            },

            {
                "question": "Which format is best for printing high-quality photos?",
                "options": ["TIFF", "JPEG", "PNG", "GIF"],
                "answer": "TIFF"
            },
            {
                "question": "Which camera sensor type is most common?",
                "options": ["CMOS", "CCD", "Foveon", "Infrared"],
                "answer": "CMOS"
            },
            {
                "question": "What is the purpose of an ND filter?",
                "options": ["Reduce light intensity", "Increase brightness", "Change color", "Adjust focus"],
                "answer": "Reduce light intensity"
            },
            {
                "question": "Which lens characteristic affects perspective?",
                "options": ["Focal length", "Aperture", "ISO", "Shutter speed"],
                "answer": "Focal length"
            },
            {
                "question": "What is a light meter used for?",
                "options": ["Measure light intensity", "Adjust focus", "Control shutter speed", "Set ISO"],
                "answer": "Measure light intensity"
            },

            {
                "question": "Which photography genre focuses on candid moments?",
                "options": ["Street photography", "Portrait", "Landscape", "Product"],
                "answer": "Street photography"
            },
            {
                "question": "What does 'exposure compensation' do?",
                "options": ["Adjusts exposure brightness", "Changes lens", "Switches camera mode", "Resets settings"],
                "answer": "Adjusts exposure brightness"
            },
            {
                "question": "Which ISO setting is best for low light?",
                "options": ["High ISO", "Low ISO", "Medium ISO", "Auto ISO"],
                "answer": "High ISO"
            },
            {
                "question": "What is the purpose of a reflector?",
                "options": ["Bounce light onto subject", "Block light", "Change color", "Adjust aperture"],
                "answer": "Bounce light onto subject"
            },
            {
                "question": "Which term describes the clarity of an image?",
                "options": ["Sharpness", "Brightness", "Contrast", "Saturation"],
                "answer": "Sharpness"
            },

            {
                "question": "Which setting affects motion blur and light intake?",
                "options": ["Shutter speed", "ISO", "Aperture", "White balance"],
                "answer": "Shutter speed"
            },
            {
                "question": "What is the golden hour in photography?",
                "options": ["Early morning or late afternoon light", "Midday sun", "Night time", "Indoor lighting"],
                "answer": "Early morning or late afternoon light"
            },
            {
                "question": "Which photo editing adjustment changes overall brightness?",
                "options": ["Exposure", "Contrast", "Hue", "Saturation"],
                "answer": "Exposure"
            },
            {
                "question": "What does the term 'megapixel' refer to?",
                "options": ["Image resolution", "Lens size", "Shutter speed", "ISO level"],
                "answer": "Image resolution"
            },
            {
                "question": "Which equipment is essential for studio lighting?",
                "options": ["Softbox", "Tripod", "Lens hood", "Memory card"],
                "answer": "Softbox"
            },

            {
                "question": "What is the primary function of a camera's autofocus?",
                "options": ["Automatically adjust focus", "Adjust exposure", "Change ISO", "Control white balance"],
                "answer": "Automatically adjust focus"
            },
            {
                "question": "Which photo style emphasizes natural colors and lighting?",
                "options": ["Natural light photography", "HDR", "Black and white", "Infrared"],
                "answer": "Natural light photography"
            },
            {
                "question": "Which is NOT a typical photo file format?",
                "options": ["DOC", "JPEG", "RAW", "TIFF"],
                "answer": "DOC"
            },
            {
                "question": "What is image composition?",
                "options": ["Arrangement of elements in a photo", "Camera brand", "Lens type", "Editing technique"],
                "answer": "Arrangement of elements in a photo"
            }
        ],
        "Video Editor": [
            {
                "question": "What is the purpose of video editing?",
                "options": ["Combine and enhance video clips", "Record video", "Take photographs", "Write scripts"],
                "answer": "Combine and enhance video clips"
            },
            {
                "question": "Which software is commonly used for video editing?",
                "options": ["Adobe Premiere Pro", "Photoshop", "Excel", "AutoCAD"],
                "answer": "Adobe Premiere Pro"
            },
            {
                "question": "What does the term 'timeline' refer to in video editing?",
                "options": ["Sequence of clips arranged over time", "Camera shot", "Audio track", "Export setting"],
                "answer": "Sequence of clips arranged over time"
            },
            {
                "question": "What is a 'cut' in video editing?",
                "options": ["Transition between two clips", "Video effect", "Audio effect", "Color correction"],
                "answer": "Transition between two clips"
            },
            {
                "question": "What is 'color grading'?",
                "options": ["Adjusting the colors to set a mood", "Adding subtitles", "Cutting clips", "Adding sound effects"],
                "answer": "Adjusting the colors to set a mood"
            },
            {
                "question": "Which video format is widely used for online videos?",
                "options": ["MP4", "DOCX", "JPEG", "PDF"],
                "answer": "MP4"
            },
            {
                "question": "What is 'rendering' in video editing?",
                "options": ["Processing the edited video into a final file", "Recording new footage", "Importing clips", "Adding music"],
                "answer": "Processing the edited video into a final file"
            },
            {
                "question": "Which aspect ratio is standard for YouTube videos?",
                "options": ["16:9", "4:3", "1:1", "21:9"],
                "answer": "16:9"
            },
            {
                "question": "What is a keyframe used for?",
                "options": ["Animating changes over time", "Adding text", "Cropping clips", "Changing audio levels"],
                "answer": "Animating changes over time"
            },
            {
                "question": "Which tool is used to split a clip into two parts?",
                "options": ["Razor tool", "Lasso tool", "Brush tool", "Move tool"],
                "answer": "Razor tool"
            },
            {
                "question": "What is B-roll footage?",
                "options": ["Supplemental footage to support the main shot", "Main footage", "Audio track", "Title screen"],
                "answer": "Supplemental footage to support the main shot"
            },
            {
                "question": "Which audio format is commonly used in video editing?",
                "options": ["WAV", "DOC", "JPEG", "PNG"],
                "answer": "WAV"
            },
            {
                "question": "What is 'chroma keying'?",
                "options": ["Removing a green or blue background", "Adding subtitles", "Changing video speed", "Adding music"],
                "answer": "Removing a green or blue background"
            },
            {
                "question": "Which file format is best for preserving quality?",
                "options": ["MOV", "MP3", "GIF", "TXT"],
                "answer": "MOV"
            },
            {
                "question": "What does 'frame rate' refer to?",
                "options": ["Number of frames displayed per second", "Video length", "Clip resolution", "Audio quality"],
                "answer": "Number of frames displayed per second"
            },
            {
                "question": "Which editing effect makes a clip play backward?",
                "options": ["Reverse", "Fade", "Cut", "Zoom"],
                "answer": "Reverse"
            },
            {
                "question": "What is the purpose of adding transitions?",
                "options": ["Smoothly connect clips", "Add sound", "Change resolution", "Delete clips"],
                "answer": "Smoothly connect clips"
            },
            {
                "question": "What is 'jump cut'?",
                "options": ["Abrupt transition between two similar shots", "Fade in", "Zoom effect", "Color correction"],
                "answer": "Abrupt transition between two similar shots"
            },
            {
                "question": "Which tool adjusts audio volume in a clip?",
                "options": ["Audio mixer", "Razor tool", "Text tool", "Crop tool"],
                "answer": "Audio mixer"
            },
            {
                "question": "What is the difference between 'export' and 'render'?",
                "options": ["Rendering processes video; exporting saves it", "Exporting processes video; rendering saves it", "They are the same", "Neither relates to video"],
                "answer": "Rendering processes video; exporting saves it"
            },
            {
                "question": "What is the primary use of a storyboard?",
                "options": ["Plan scenes before shooting", "Edit audio", "Color correction", "Add subtitles"],
                "answer": "Plan scenes before shooting"
            },
            {
                "question": "What is 'aspect ratio'?",
                "options": ["Width to height ratio of the video", "Video length", "Audio level", "Color depth"],
                "answer": "Width to height ratio of the video"
            },
            {
                "question": "What is 'masking' in video editing?",
                "options": ["Hiding part of a video clip", "Adding text", "Changing audio", "Splitting clips"],
                "answer": "Hiding part of a video clip"
            },
            {
                "question": "What does 'proxy editing' refer to?",
                "options": ["Editing lower-resolution copies to speed workflow", "Adding effects", "Color grading", "Exporting video"],
                "answer": "Editing lower-resolution copies to speed workflow"
            },
            {
                "question": "Which is NOT a common video codec?",
                "options": ["MP3", "H.264", "ProRes", "VP9"],
                "answer": "MP3"
            },
            {
                "question": "What is 'lag' in video editing?",
                "options": ["Delay or slow response in software", "Audio echo", "Video effect", "Color correction"],
                "answer": "Delay or slow response in software"
            },
            {
                "question": "Which tool helps stabilize shaky footage?",
                "options": ["Warp Stabilizer", "Razor tool", "Crop tool", "Pen tool"],
                "answer": "Warp Stabilizer"
            },
            {
                "question": "What is a 'cutaway'?",
                "options": ["Shot inserted to cover action or detail", "Main footage", "Sound effect", "Color effect"],
                "answer": "Shot inserted to cover action or detail"
            },
            {
                "question": "Which format is best for video streaming?",
                "options": ["MP4", "TIFF", "PDF", "DOC"],
                "answer": "MP4"
            },
            {
                "question": "What is the standard frame rate for cinema?",
                "options": ["24 fps", "30 fps", "60 fps", "120 fps"],
                "answer": "24 fps"
            },
            {
                "question": "What does 'color correction' do?",
                "options": ["Fix color issues to look natural", "Add subtitles", "Cut clips", "Adjust audio"],
                "answer": "Fix color issues to look natural"
            },
            {
                "question": "What is 'nesting' in video editing?",
                "options": ["Grouping clips into one sequence", "Adding transitions", "Adjusting audio", "Exporting video"],
                "answer": "Grouping clips into one sequence"
            },
            {
                "question": "Which tool is used to add text overlays?",
                "options": ["Text tool", "Razor tool", "Crop tool", "Pen tool"],
                "answer": "Text tool"
            },
            {
                "question": "What is 'slow motion' effect?",
                "options": ["Playing footage slower than normal", "Playing footage faster", "Reversing footage", "Adding music"],
                "answer": "Playing footage slower than normal"
            },
            {
                "question": "What does LUT stand for in video editing?",
                "options": ["Look-Up Table", "Light Up Time", "Long User Time", "Layered User Tool"],
                "answer": "Look-Up Table"
            }
        ],

        "Fashion Designer": [
            {
                "question": "What is the primary purpose of a fashion designer?",
                "options": ["Create clothing and accessories", "Sew garments", "Manage a retail store", "Photograph models"],
                "answer": "Create clothing and accessories"
            },
            {
                "question": "What is a 'mood board' used for in fashion design?",
                "options": ["Visual inspiration and theme", "Measuring fabric", "Sewing instructions", "Inventory management"],
                "answer": "Visual inspiration and theme"
            },
            {
                "question": "Which fabric is known for its stretchiness?",
                "options": ["Spandex", "Cotton", "Silk", "Wool"],
                "answer": "Spandex"
            },
            {
                "question": "What does 'haute couture' refer to?",
                "options": ["High fashion custom-fitted clothing", "Mass-produced clothing", "Sportswear", "Children’s clothing"],
                "answer": "High fashion custom-fitted clothing"
            },
            {
                "question": "Which tool is essential for cutting fabric?",
                "options": ["Fabric scissors", "Pencil", "Sewing machine", "Measuring tape"],
                "answer": "Fabric scissors"
            },

            {
                "question": "What is a 'pattern' in fashion design?",
                "options": ["Template for cutting fabric", "Type of fabric", "Color scheme", "Sewing technique"],
                "answer": "Template for cutting fabric"
            },
            {
                "question": "Which type of fabric is made from animal hair?",
                "options": ["Wool", "Linen", "Polyester", "Nylon"],
                "answer": "Wool"
            },
            {
                "question": "What is 'silhouette' in fashion?",
                "options": ["The outline or shape of a garment", "Color pattern", "Type of fabric", "Accessory style"],
                "answer": "The outline or shape of a garment"
            },
            {
                "question": "What is 'draping' in fashion design?",
                "options": ["Arranging fabric on a dress form", "Cutting fabric", "Drawing sketches", "Sewing seams"],
                "answer": "Arranging fabric on a dress form"
            },
            {
                "question": "Which season is associated with fashion week held in September?",
                "options": ["Spring/Summer", "Fall/Winter", "Resort", "Pre-Fall"],
                "answer": "Spring/Summer"
            },

            {
                "question": "What is 'couture'?",
                "options": ["Custom, handmade fashion", "Ready-to-wear clothing", "Fast fashion", "Textile printing"],
                "answer": "Custom, handmade fashion"
            },
            {
                "question": "Which fashion designer is famous for the 'little black dress'?",
                "options": ["Coco Chanel", "Giorgio Armani", "Alexander McQueen", "Versace"],
                "answer": "Coco Chanel"
            },
            {
                "question": "What is 'tech pack' in fashion?",
                "options": ["Detailed garment specifications", "Fashion magazine", "Fashion show schedule", "Sewing machine model"],
                "answer": "Detailed garment specifications"
            },
            {
                "question": "What is 'fast fashion'?",
                "options": ["Quickly produced and affordable clothing", "Luxury clothing", "Vintage clothes", "Custom designs"],
                "answer": "Quickly produced and affordable clothing"
            },
            {
                "question": "Which of the following is a natural fiber?",
                "options": ["Cotton", "Polyester", "Nylon", "Acrylic"],
                "answer": "Cotton"
            },

            {
                "question": "What is 'bias cut'?",
                "options": ["Cutting fabric diagonally", "Cutting fabric straight", "Sewing technique", "Type of pattern"],
                "answer": "Cutting fabric diagonally"
            },
            {
                "question": "What does 'ready-to-wear' mean?",
                "options": ["Mass-produced clothing", "Custom clothing", "Handmade fashion", "Sustainable fabrics"],
                "answer": "Mass-produced clothing"
            },
            {
                "question": "Which garment is typically sleeveless and worn over other clothes?",
                "options": ["Vest", "Skirt", "Blouse", "Jacket"],
                "answer": "Vest"
            },
            {
                "question": "What is a 'muse' in fashion?",
                "options": ["Source of inspiration", "Type of fabric", "Accessory", "Fashion show venue"],
                "answer": "Source of inspiration"
            },
            {
                "question": "What does 'sustainable fashion' focus on?",
                "options": ["Environmentally friendly production", "Fast trends", "Expensive fabrics", "Seasonal collections"],
                "answer": "Environmentally friendly production"
            },

            {
                "question": "Which tool is used to measure the body for clothing?",
                "options": ["Measuring tape", "Scissors", "Needle", "Pin"],
                "answer": "Measuring tape"
            },
            {
                "question": "What is 'couturier'?",
                "options": ["Fashion designer specializing in haute couture", "Fabric supplier", "Retail buyer", "Model agent"],
                "answer": "Fashion designer specializing in haute couture"
            },
            {
                "question": "What is 'pleating' in fashion?",
                "options": ["Folding fabric in patterns", "Sewing buttons", "Adding lace", "Dyeing fabric"],
                "answer": "Folding fabric in patterns"
            },
            {
                "question": "Which of these is a synthetic fabric?",
                "options": ["Polyester", "Silk", "Cotton", "Wool"],
                "answer": "Polyester"
            },
            {
                "question": "What does 'toile' mean in fashion?",
                "options": ["Test garment made from inexpensive fabric", "Final dress", "Accessory", "Fabric dye"],
                "answer": "Test garment made from inexpensive fabric"
            },

            {
                "question": "What is 'seam allowance'?",
                "options": ["Extra fabric allowed for sewing", "Decorative stitching", "Fabric width", "Hem length"],
                "answer": "Extra fabric allowed for sewing"
            },
            {
                "question": "What is a 'lookbook'?",
                "options": ["Collection of styled photos showing designs", "Fabric catalog", "Fashion blog", "Sewing guide"],
                "answer": "Collection of styled photos showing designs"
            },
            {
                "question": "Which accessory is worn on the neck?",
                "options": ["Necklace", "Bracelet", "Earrings", "Ring"],
                "answer": "Necklace"
            },
            {
                "question": "What does 'bespoke' mean in fashion?",
                "options": ["Custom-made clothing", "Ready-to-wear", "Secondhand clothing", "Mass production"],
                "answer": "Custom-made clothing"
            },
            {
                "question": "What is 'grading' in fashion design?",
                "options": ["Scaling a pattern to different sizes", "Adding embellishments", "Coloring fabric", "Sewing technique"],
                "answer": "Scaling a pattern to different sizes"
            },

            {
                "question": "Which stitch is commonly used to join two pieces of fabric?",
                "options": ["Straight stitch", "Chain stitch", "Overlock", "Embroidery"],
                "answer": "Straight stitch"
            },
            {
                "question": "What is 'sleeve cap'?",
                "options": ["Top part of the sleeve that attaches to the armhole", "Bottom hem of the sleeve", "Type of cuff", "Decorative element"],
                "answer": "Top part of the sleeve that attaches to the armhole"
            },
            {
                "question": "What is 'embellishment' in fashion?",
                "options": ["Decorative details added to garments", "Type of fabric", "Cutting technique", "Pattern making"],
                "answer": "Decorative details added to garments"
            },
            {
                "question": "Which of these colors is a neutral color?",
                "options": ["Beige", "Red", "Blue", "Yellow"],
                "answer": "Beige"
            },
            {
                "question": "What is 'textile'?",
                "options": ["Any woven or knitted fabric", "Type of garment", "Accessory", "Pattern"],
                "answer": "Any woven or knitted fabric"
            },

            {
                "question": "What is the term for fashion that recycles and reuses materials?",
                "options": ["Upcycling", "Fast fashion", "Haute couture", "Vintage"],
                "answer": "Upcycling"
            },
            {
                "question": "Which industry event showcases upcoming designers and trends?",
                "options": ["Fashion week", "Trade fair", "Art exhibition", "Film festival"],
                "answer": "Fashion week"
            },
            {
                "question": "What does 'fit model' mean?",
                "options": ["Model who tests clothing fit", "Runway model", "Photographer", "Designer assistant"],
                "answer": "Model who tests clothing fit"
            },
            {
                "question": "What is a 'liner' in garments?",
                "options": ["Inner fabric layer", "Outer fabric", "Decoration", "Accessory"],
                "answer": "Inner fabric layer"
            },
            {
                "question": "Which tool is used for marking fabric without permanent damage?",
                "options": ["Tailor’s chalk", "Permanent marker", "Pen", "Pencil"],
                "answer": "Tailor’s chalk"
            }
        ],
        "Copywriter": [
            {
                "question": "What is the main role of a copywriter?",
                "options": ["Write persuasive and engaging content", "Design websites", "Edit videos", "Manage social media"],
                "answer": "Write persuasive and engaging content"
            },
            {
                "question": "What does 'CTA' stand for in copywriting?",
                "options": ["Call to Action", "Creative Text Ad", "Content Tracking Analytics", "Customer Target Area"],
                "answer": "Call to Action"
            },
            {
                "question": "Which of these is a common copywriting format?",
                "options": ["Headline, body, call to action", "Storyboard, scene, shot", "Sketch, pattern, fabric", "Storyboard, sequence, render"],
                "answer": "Headline, body, call to action"
            },
            {
                "question": "What is SEO copywriting?",
                "options": ["Writing content optimized for search engines", "Creating video scripts", "Designing logos", "Editing photos"],
                "answer": "Writing content optimized for search engines"
            },
            {
                "question": "What is a 'headline' in copywriting?",
                "options": ["Attention-grabbing title", "Footer text", "Image caption", "Background music"],
                "answer": "Attention-grabbing title"
            },

            {
                "question": "What does 'tone of voice' mean?",
                "options": ["The style and mood of writing", "Sound effects", "Font choice", "Color scheme"],
                "answer": "The style and mood of writing"
            },
            {
                "question": "Which is an example of persuasive writing?",
                "options": ["Ad copy", "Recipe instructions", "Technical manual", "Academic essay"],
                "answer": "Ad copy"
            },
            {
                "question": "What is 'brand voice'?",
                "options": ["Consistent style and personality of a brand’s communication", "Graphic design style", "Product packaging", "Sales pitch"],
                "answer": "Consistent style and personality of a brand’s communication"
            },
            {
                "question": "What is a 'call to action'?",
                "options": ["Instruction to encourage reader action", "Background story", "Product description", "Visual design"],
                "answer": "Instruction to encourage reader action"
            },
            {
                "question": "What should be the primary focus when writing copy?",
                "options": ["Audience needs and interests", "Designer preferences", "Video length", "Font size"],
                "answer": "Audience needs and interests"
            },

            {
                "question": "What is 'A/B testing' in copywriting?",
                "options": ["Comparing two versions of content to see which performs better", "Editing photos", "Creating videos", "Email marketing"],
                "answer": "Comparing two versions of content to see which performs better"
            },
            {
                "question": "Which tool helps improve grammar and style?",
                "options": ["Grammarly", "Photoshop", "Premiere Pro", "Excel"],
                "answer": "Grammarly"
            },
            {
                "question": "What is a 'USP' in marketing?",
                "options": ["Unique Selling Proposition", "User Service Plan", "Universal Style Protocol", "Ultimate Sales Pitch"],
                "answer": "Unique Selling Proposition"
            },
            {
                "question": "Which element should be included in ad copy?",
                "options": ["Benefit to the customer", "Technical jargon", "Long paragraphs", "Random facts"],
                "answer": "Benefit to the customer"
            },
            {
                "question": "What is 'long-form copy'?",
                "options": ["Detailed content, usually over 1,000 words", "Short social media posts", "Product photos", "Video scripts"],
                "answer": "Detailed content, usually over 1,000 words"
            },

            {
                "question": "What does 'readability' refer to?",
                "options": ["How easy the text is to understand", "Font color", "Image quality", "Website speed"],
                "answer": "How easy the text is to understand"
            },
            {
                "question": "What is a 'landing page'?",
                "options": ["Web page designed for specific marketing campaign", "Homepage", "About us page", "Contact form"],
                "answer": "Web page designed for specific marketing campaign"
            },
            {
                "question": "What should you avoid in copywriting?",
                "options": ["Jargon and clichés", "Clear language", "Benefits", "Calls to action"],
                "answer": "Jargon and clichés"
            },
            {
                "question": "What is a 'tagline'?",
                "options": ["Short memorable phrase representing a brand", "Long description", "Headline", "Email subject line"],
                "answer": "Short memorable phrase representing a brand"
            },
            {
                "question": "What does 'tone' help convey in copy?",
                "options": ["Emotion and personality", "Font size", "Background color", "Image style"],
                "answer": "Emotion and personality"
            },

            {
                "question": "Which is a good headline practice?",
                "options": ["Be clear and concise", "Use complex words", "Write long sentences", "Avoid keywords"],
                "answer": "Be clear and concise"
            },
            {
                "question": "What is 'content marketing'?",
                "options": ["Creating valuable content to attract customers", "Selling products directly", "Making videos", "Email support"],
                "answer": "Creating valuable content to attract customers"
            },
            {
                "question": "Which platform is commonly used for blogging?",
                "options": ["WordPress", "Photoshop", "Premiere Pro", "Excel"],
                "answer": "WordPress"
            },
            {
                "question": "What does 'editing' involve in copywriting?",
                "options": ["Correcting grammar and improving flow", "Shooting videos", "Designing logos", "Recording audio"],
                "answer": "Correcting grammar and improving flow"
            },
            {
                "question": "What is 'persuasive copy' aimed at?",
                "options": ["Convincing readers to take action", "Entertaining readers", "Providing technical details", "Listing ingredients"],
                "answer": "Convincing readers to take action"
            },

            {
                "question": "What is 'proofreading'?",
                "options": ["Checking for spelling and grammar errors", "Writing content", "Designing graphics", "Recording audio"],
                "answer": "Checking for spelling and grammar errors"
            },
            {
                "question": "Which format is ideal for email marketing?",
                "options": ["Short, clear messages", "Long essays", "Video scripts", "Product manuals"],
                "answer": "Short, clear messages"
            },
            {
                "question": "What is 'tone consistency' important for?",
                "options": ["Building brand trust", "Changing font styles", "Adding images", "Writing headlines"],
                "answer": "Building brand trust"
            },
            {
                "question": "Which of the following is NOT a copywriting skill?",
                "options": ["Coding", "Research", "Creativity", "Editing"],
                "answer": "Coding"
            },
            {
                "question": "What is a 'buyer persona'?",
                "options": ["Detailed profile of target audience", "Product catalog", "Company mission statement", "Marketing budget"],
                "answer": "Detailed profile of target audience"
            },

            {
                "question": "Which type of copywriting focuses on social media?",
                "options": ["Social media copywriting", "Technical writing", "Academic writing", "Legal writing"],
                "answer": "Social media copywriting"
            },
            {
                "question": "What is 'headline analyzer' used for?",
                "options": ["Evaluating effectiveness of headlines", "Editing photos", "Coding websites", "Recording audio"],
                "answer": "Evaluating effectiveness of headlines"
            },
            {
                "question": "What is the ideal length for a tweet?",
                "options": ["Up to 280 characters", "1000 words", "500 characters", "50 words"],
                "answer": "Up to 280 characters"
            },
            {
                "question": "What does 'empathy' mean in copywriting?",
                "options": ["Understanding audience feelings", "Writing fast", "Editing content", "Designing graphics"],
                "answer": "Understanding audience feelings"
            },
            {
                "question": "Which technique involves storytelling in ads?",
                "options": ["Narrative copywriting", "Technical writing", "Listicles", "Bullet points"],
                "answer": "Narrative copywriting"
            },

            {
                "question": "What is a 'value proposition'?",
                "options": ["What makes a product/service attractive", "Price tag", "Product image", "Sales script"],
                "answer": "What makes a product/service attractive"
            },
            {
                "question": "Which of the following is an example of direct response copy?",
                "options": ["Sales letters", "Brand awareness campaigns", "Technical manuals", "Poetry"],
                "answer": "Sales letters"
            },
            {
                "question": "What is 'content audit'?",
                "options": ["Reviewing and assessing existing content", "Writing new articles", "Designing logos", "Editing videos"],
                "answer": "Reviewing and assessing existing content"
            },
            {
                "question": "Which element improves scan-ability of text?",
                "options": ["Headings and bullet points", "Long paragraphs", "Background images", "Footnotes"],
                "answer": "Headings and bullet points"
            },
            {
                "question": "What is 'copy deck'?",
                "options": ["Document containing final copy for approval", "Design mockup", "Video script", "Marketing budget"],
                "answer": "Document containing final copy for approval"
            }
        ],


    },
    "Education & Training": {
        "Teacher": [
            {
                "question": "What is the primary role of a teacher?",
                "options": ["Facilitate student learning", "Manage school finances", "Design buildings", "Write novels"],
                "answer": "Facilitate student learning"
            },
            {
                "question": "What is formative assessment?",
                "options": ["Assessment during learning to guide instruction", "Final exam", "Student attendance record", "School ranking"],
                "answer": "Assessment during learning to guide instruction"
            },
            {
                "question": "Which method encourages student participation?",
                "options": ["Discussion and questioning", "Lecture only", "Silent reading", "Copying notes"],
                "answer": "Discussion and questioning"
            },
            {
                "question": "What is differentiated instruction?",
                "options": ["Tailoring teaching to meet diverse student needs", "Teaching one lesson to all students", "Ignoring student differences", "Assigning same homework"],
                "answer": "Tailoring teaching to meet diverse student needs"
            },
            {
                "question": "What is the purpose of lesson planning?",
                "options": ["Organize teaching objectives and activities", "Skip classes", "Grade students randomly", "Create school budget"],
                "answer": "Organize teaching objectives and activities"
            },
            {
                "question": "Which tool helps manage classroom behavior?",
                "options": ["Classroom rules and routines", "School newsletter", "Field trips", "Sports events"],
                "answer": "Classroom rules and routines"
            },
            {
                "question": "What is a learning objective?",
                "options": ["What students should achieve by lesson end", "Teacher's vacation plan", "School policy", "Exam schedule"],
                "answer": "What students should achieve by lesson end"
            },
            {
                "question": "Which technology can assist in teaching?",
                "options": ["Interactive whiteboards", "Microscopes", "Football", "Bus"],
                "answer": "Interactive whiteboards"
            },
            {
                "question": "What is formative feedback?",
                "options": ["Ongoing feedback to improve student learning", "Final grade", "Attendance list", "Disciplinary action"],
                "answer": "Ongoing feedback to improve student learning"
            },
            {
                "question": "Why is student engagement important?",
                "options": ["Improves learning and motivation", "Keeps students quiet", "Fills time", "Reduces homework"],
                "answer": "Improves learning and motivation"
            },
            {
                "question": "Which is an example of active learning?",
                "options": ["Group projects", "Listening passively", "Watching videos silently", "Copying notes"],
                "answer": "Group projects"
            },
            {
                "question": "What does 'scaffolding' mean in education?",
                "options": ["Support given to students to help learning", "Building construction", "School schedule", "Teacher training"],
                "answer": "Support given to students to help learning"
            },
            {
                "question": "What is an individualized education plan (IEP)?",
                "options": ["Customized plan for students with special needs", "Sports program", "Classroom seating chart", "School budget"],
                "answer": "Customized plan for students with special needs"
            },
            {
                "question": "Why is classroom diversity important?",
                "options": ["Encourages different perspectives", "Makes grading harder", "Confuses students", "Increases noise"],
                "answer": "Encourages different perspectives"
            },
            {
                "question": "Which method helps assess student understanding?",
                "options": ["Quizzes and questioning", "Ignoring students", "Assigning random homework", "Skipping lessons"],
                "answer": "Quizzes and questioning"
            },
            {
                "question": "What is collaborative learning?",
                "options": ["Students working together to learn", "Teacher lecturing", "Individual reading", "Exams"],
                "answer": "Students working together to learn"
            },
            {
                "question": "What is Bloom's Taxonomy used for?",
                "options": ["Classifying educational objectives", "Class schedule", "Student attendance", "Exam results"],
                "answer": "Classifying educational objectives"
            },
            {
                "question": "Which is an example of a summative assessment?",
                "options": ["Final exams", "Class participation", "Daily quizzes", "Homework"],
                "answer": "Final exams"
            },
            {
                "question": "Why is lesson reflection important?",
                "options": ["To improve future teaching", "To fill time", "To punish students", "To organize exams"],
                "answer": "To improve future teaching"
            },
            {
                "question": "Which approach promotes critical thinking?",
                "options": ["Problem-based learning", "Memorization only", "Copying notes", "Multiple-choice tests"],
                "answer": "Problem-based learning"
            },
            {
                "question": "What is the role of a teacher in classroom management?",
                "options": ["Establish rules and maintain order", "Ignore students", "Grade papers randomly", "Organize sports"],
                "answer": "Establish rules and maintain order"
            },
            {
                "question": "What is constructivism in education?",
                "options": ["Learning by building on prior knowledge", "Strict discipline", "Standardized testing", "Physical exercise"],
                "answer": "Learning by building on prior knowledge"
            },
            {
                "question": "How can a teacher support English language learners?",
                "options": ["Use visuals and simplified language", "Speak only English rapidly", "Ignore their needs", "Assign more homework"],
                "answer": "Use visuals and simplified language"
            },
            {
                "question": "What is formative assessment?",
                "options": ["Ongoing checks during learning", "Final report card", "Parent-teacher meeting", "Class schedule"],
                "answer": "Ongoing checks during learning"
            },
            {
                "question": "Which strategy helps motivate students?",
                "options": ["Setting clear goals and rewards", "Ignoring achievements", "Giving difficult tasks only", "Not interacting"],
                "answer": "Setting clear goals and rewards"
            },
            {
                "question": "Why use multimedia in teaching?",
                "options": ["Engage multiple senses to enhance learning", "Waste class time", "Confuse students", "Replace textbooks"],
                "answer": "Engage multiple senses to enhance learning"
            },
            {
                "question": "What does 'inclusive education' mean?",
                "options": ["Educating all students together regardless of differences", "Separating students by ability", "Only teaching gifted students", "Focusing on sports"],
                "answer": "Educating all students together regardless of differences"
            },
            {
                "question": "What is peer assessment?",
                "options": ["Students evaluating each other's work", "Teacher grading alone", "External exams", "Parent reviews"],
                "answer": "Students evaluating each other's work"
            },
            {
                "question": "Why is punctuality important for teachers?",
                "options": ["Sets good example and maximizes learning time", "Irrelevant", "Annoys students", "Not required"],
                "answer": "Sets good example and maximizes learning time"
            },
            {
                "question": "How can teachers support students with special needs?",
                "options": ["Adapt materials and methods", "Ignore them", "Exclude from class", "Assign extra homework"],
                "answer": "Adapt materials and methods"
            },
            {
                "question": "What is the benefit of asking open-ended questions?",
                "options": ["Encourages critical thinking and discussion", "Limits answers", "Confuses students", "Reduces class time"],
                "answer": "Encourages critical thinking and discussion"
            },
            {
                "question": "What is a rubric used for?",
                "options": ["Assessing student work with clear criteria", "Scheduling classes", "Student attendance", "Writing reports"],
                "answer": "Assessing student work with clear criteria"
            },
            {
                "question": "Why is teacher collaboration important?",
                "options": ["Share best practices and support each other", "Create competition", "Reduce workload unfairly", "Plan events only"],
                "answer": "Share best practices and support each other"
            },
            {
                "question": "What is scaffolding in teaching?",
                "options": ["Providing temporary support to help learning", "Punishing students", "Testing knowledge", "Assigning homework"],
                "answer": "Providing temporary support to help learning"
            },
            {
                "question": "How can teachers handle disruptive behavior?",
                "options": ["Set clear expectations and consequences", "Ignore it", "Punish publicly", "Exclude student"],
                "answer": "Set clear expectations and consequences"
            },
            {
                "question": "What is student-centered learning?",
                "options": ["Focus on student needs and active participation", "Teacher lectures only", "Strict discipline", "Memorization"],
                "answer": "Focus on student needs and active participation"
            },
            {
                "question": "What is reflective teaching?",
                "options": ["Evaluating one's own teaching to improve", "Ignoring feedback", "Teaching without planning", "Disciplinary action"],
                "answer": "Evaluating one's own teaching to improve"
            }
        ],

        "Instructional Designer": [
            {
                "question": "What is the primary role of an instructional designer?",
                "options": ["Create effective learning experiences", "Teach every class", "Manage school buildings", "Write novels"],
                "answer": "Create effective learning experiences"
            },
            {
                "question": "Which model is widely used in instructional design?",
                "options": ["ADDIE model", "SWOT analysis", "PERT chart", "Gantt chart"],
                "answer": "ADDIE model"
            },
            {
                "question": "What does the 'A' in ADDIE stand for?",
                "options": ["Analysis", "Assessment", "Alignment", "Application"],
                "answer": "Analysis"
            },
            {
                "question": "Why is learner analysis important?",
                "options": ["Identifies learners’ needs and backgrounds", "Reduces workload", "Avoids exams", "Simplifies textbooks"],
                "answer": "Identifies learners’ needs and backgrounds"
            },
            {
                "question": "What is instructional strategy?",
                "options": ["Plan for delivering content effectively", "Sports activity", "Exam paper", "Class timetable"],
                "answer": "Plan for delivering content effectively"
            },
            {
                "question": "What is e-learning?",
                "options": ["Learning using electronic technologies", "Learning outdoors", "Memorization", "Sports training"],
                "answer": "Learning using electronic technologies"
            },
            {
                "question": "What is a learning objective?",
                "options": ["What learners should achieve by the end", "Teacher’s schedule", "School budget", "Classroom rules"],
                "answer": "What learners should achieve by the end"
            },
            {
                "question": "Why use multimedia in instructional design?",
                "options": ["Engages multiple senses for better learning", "Fills time", "Confuses learners", "Replaces teachers"],
                "answer": "Engages multiple senses for better learning"
            },
            {
                "question": "What is storyboarding?",
                "options": ["Visual planning of e-learning content", "Writing novels", "Drawing comics", "Making posters"],
                "answer": "Visual planning of e-learning content"
            },
            {
                "question": "What is formative evaluation in instructional design?",
                "options": ["Review during development to improve", "Final test", "Attendance record", "Budget check"],
                "answer": "Review during development to improve"
            },
            {
                "question": "Which principle supports instructional design?",
                "options": ["Adult learning theory", "Sports theory", "Fashion trends", "Cooking methods"],
                "answer": "Adult learning theory"
            },
            {
                "question": "What is gamification in learning?",
                "options": ["Using game elements to motivate learning", "Playing games in class only", "Skipping lessons", "Sports competition"],
                "answer": "Using game elements to motivate learning"
            },
            {
                "question": "What is microlearning?",
                "options": ["Short, focused learning units", "Learning in groups only", "Learning with textbooks only", "Learning once a year"],
                "answer": "Short, focused learning units"
            },
            {
                "question": "What is blended learning?",
                "options": ["Mix of online and face-to-face instruction", "Sports and academics", "Only classroom lectures", "Only self-study"],
                "answer": "Mix of online and face-to-face instruction"
            },
            {
                "question": "Why use assessment in instructional design?",
                "options": ["Measures learner achievement", "Reduces teaching time", "Fills schedules", "Avoids homework"],
                "answer": "Measures learner achievement"
            },
            {
                "question": "What is instructional technology?",
                "options": ["Tools and media used in teaching", "School timetable", "Exam format", "Student ID card"],
                "answer": "Tools and media used in teaching"
            },
            {
                "question": "What does 'chunking' mean in learning design?",
                "options": ["Breaking content into smaller units", "Cooking food", "Dividing classrooms", "Skipping lessons"],
                "answer": "Breaking content into smaller units"
            },
            {
                "question": "Why is feedback important in learning?",
                "options": ["Improves performance and understanding", "Fills time", "Replaces exams", "Avoids teaching"],
                "answer": "Improves performance and understanding"
            },
            {
                "question": "What is a learning management system (LMS)?",
                "options": ["Platform for delivering and tracking learning", "Exam hall", "Class timetable", "Library"],
                "answer": "Platform for delivering and tracking learning"
            },
            {
                "question": "What is cognitive load theory?",
                "options": ["Managing mental effort in learning", "Sports training", "Exam stress", "Time management"],
                "answer": "Managing mental effort in learning"
            },
            {
                "question": "What is summative evaluation in instructional design?",
                "options": ["Final assessment of learning outcomes", "Daily quiz", "Attendance sheet", "Budget report"],
                "answer": "Final assessment of learning outcomes"
            },
            {
                "question": "Why is accessibility important in learning design?",
                "options": ["Ensures all learners can participate", "Reduces workload", "Simplifies exams", "Replaces teaching"],
                "answer": "Ensures all learners can participate"
            },
            {
                "question": "What is rapid e-learning development?",
                "options": ["Quick creation of digital learning content", "Fast reading", "Short exams", "Quick grading"],
                "answer": "Quick creation of digital learning content"
            },
            {
                "question": "What is user experience (UX) in learning?",
                "options": ["Learners’ overall experience with a course", "Exam difficulty", "Teacher’s holiday plan", "School budget"],
                "answer": "Learners’ overall experience with a course"
            },
            {
                "question": "Which principle helps reduce cognitive overload?",
                "options": ["Segmenting content", "Giving harder exams", "Using more jargon", "Skipping visuals"],
                "answer": "Segmenting content"
            },
            {
                "question": "What is instructional alignment?",
                "options": ["Matching objectives, content, and assessments", "Classroom seating", "Exam dates", "Student ID"],
                "answer": "Matching objectives, content, and assessments"
            },
            {
                "question": "What is simulation-based learning?",
                "options": ["Learning through real-world scenarios", "Reading silently", "Copying notes", "Watching sports"],
                "answer": "Learning through real-world scenarios"
            },
            {
                "question": "Why use visuals in instructional design?",
                "options": ["Aid comprehension and retention", "Decorate slides only", "Fill empty space", "Replace content"],
                "answer": "Aid comprehension and retention"
            },
            {
                "question": "What is a performance objective?",
                "options": ["Specific measurable learner outcome", "Teacher’s plan", "Exam date", "Classroom rule"],
                "answer": "Specific measurable learner outcome"
            },
            {
                "question": "What is universal design for learning (UDL)?",
                "options": ["Designing learning for diverse learners", "Designing classrooms", "Writing exams", "Creating budgets"],
                "answer": "Designing learning for diverse learners"
            },
            {
                "question": "What is an instructional prototype?",
                "options": ["Early sample of learning material", "Final textbook", "Exam paper", "Poster"],
                "answer": "Early sample of learning material"
            },
            {
                "question": "Why conduct pilot testing of courses?",
                "options": ["Identify improvements before launch", "Save time only", "Avoid grading", "Skip evaluations"],
                "answer": "Identify improvements before launch"
            },
            {
                "question": "What is synchronous learning?",
                "options": ["Learning at the same time with interaction", "Self-paced study", "Silent reading", "Recorded lessons only"],
                "answer": "Learning at the same time with interaction"
            },
            {
                "question": "What is asynchronous learning?",
                "options": ["Self-paced learning without real-time interaction", "Live classes", "Group discussion", "Sports training"],
                "answer": "Self-paced learning without real-time interaction"
            },
            {
                "question": "What is instructional scaffolding?",
                "options": ["Providing temporary support in learning", "Building structures", "Writing exams", "Making posters"],
                "answer": "Providing temporary support in learning"
            },
            {
                "question": "Why use case studies in learning?",
                "options": ["Promote problem-solving and application", "Fill class time", "Replace exams", "Confuse learners"],
                "answer": "Promote problem-solving and application"
            },
            {
                "question": "What is experiential learning in instructional design?",
                "options": ["Learning by doing and reflecting", "Memorization only", "Lecture only", "Silent reading"],
                "answer": "Learning by doing and reflecting"
            },
            {
                "question": "What is instructional evaluation?",
                "options": ["Assessing effectiveness of instructional materials", "Marking attendance", "Scheduling exams", "Writing books"],
                "answer": "Assessing effectiveness of instructional materials"
            },
            {
                "question": "Why collaborate with subject matter experts?",
                "options": ["Ensure content accuracy and relevance", "Fill time", "Reduce teaching", "Organize events"],
                "answer": "Ensure content accuracy and relevance"
            },
            {
                "question": "What is the ultimate goal of instructional design?",
                "options": ["Facilitate effective and engaging learning", "Fill schedules", "Reduce exams", "Organize classes"],
                "answer": "Facilitate effective and engaging learning"
            }
        ],
        "School Counselor": [
            {
                "question": "What is the primary role of a school counselor?",
                "options": ["Support students’ academic, social, and emotional development", "Teach all subjects", "Manage school finances", "Organize sports events"],
                "answer": "Support students’ academic, social, and emotional development"
            },
            {
                "question": "Why is individual counseling important?",
                "options": ["Helps students deal with personal challenges", "Replaces teaching", "Fills class time", "Grades students"],
                "answer": "Helps students deal with personal challenges"
            },
            {
                "question": "What is career guidance?",
                "options": ["Helping students plan future careers", "Teaching exams only", "Managing school budget", "Organizing sports"],
                "answer": "Helping students plan future careers"
            },
            {
                "question": "Why is social-emotional learning important?",
                "options": ["Develops emotional intelligence and interpersonal skills", "Replaces academics", "Fills free time", "Simplifies grading"],
                "answer": "Develops emotional intelligence and interpersonal skills"
            },
            {
                "question": "What is group counseling?",
                "options": ["Counseling multiple students together", "Teaching large classes", "Exam preparation", "Sports training"],
                "answer": "Counseling multiple students together"
            },
            {
                "question": "Why maintain confidentiality as a counselor?",
                "options": ["Builds trust and protects students’ privacy", "Reduces paperwork", "Simplifies reporting", "Avoids exams"],
                "answer": "Builds trust and protects students’ privacy"
            },
            {
                "question": "What is academic advising?",
                "options": ["Helping students choose courses and plan studies", "Assigning grades", "Organizing sports", "Planning school trips"],
                "answer": "Helping students choose courses and plan studies"
            },
            {
                "question": "Why is crisis intervention important?",
                "options": ["Supports students in emergencies", "Reduces teaching", "Fills office hours", "Simplifies exams"],
                "answer": "Supports students in emergencies"
            },
            {
                "question": "What is the purpose of a student support plan?",
                "options": ["Provide targeted interventions for student needs", "Plan sports events", "Schedule exams", "Grade assignments"],
                "answer": "Provide targeted interventions for student needs"
            },
            {
                "question": "Why collaborate with parents?",
                "options": ["Ensure holistic student support", "Avoid teaching", "Fill office hours", "Organize events"],
                "answer": "Ensure holistic student support"
            },
            {
                "question": "What is peer mentoring?",
                "options": ["Students helping each other under guidance", "Teachers mentoring students", "Sports training", "Exam preparation"],
                "answer": "Students helping each other under guidance"
            },
            {
                "question": "What is the role in conflict resolution?",
                "options": ["Help students resolve interpersonal conflicts peacefully", "Organize exams", "Assign grades", "Plan trips"],
                "answer": "Help students resolve interpersonal conflicts peacefully"
            },
            {
                "question": "Why assess student needs?",
                "options": ["Identify challenges and strengths to guide support", "Reduce teaching", "Fill free time", "Simplify schedules"],
                "answer": "Identify challenges and strengths to guide support"
            },
            {
                "question": "What is the role in college preparation?",
                "options": ["Guide students in applications and readiness", "Teach math only", "Manage budgets", "Plan sports"],
                "answer": "Guide students in applications and readiness"
            },
            {
                "question": "Why is cultural competence important?",
                "options": ["Support diverse student backgrounds effectively", "Reduce grading", "Simplify exams", "Fill office hours"],
                "answer": "Support diverse student backgrounds effectively"
            },
            {
                "question": "What is preventive counseling?",
                "options": ["Address potential issues before they escalate", "Assign more homework", "Schedule exams", "Organize sports"],
                "answer": "Address potential issues before they escalate"
            },
            {
                "question": "Why use data in counseling?",
                "options": ["Track progress and improve interventions", "Reduce teaching", "Plan cafeteria meals", "Organize events"],
                "answer": "Track progress and improve interventions"
            },
            {
                "question": "What is student advocacy?",
                "options": ["Promoting students’ rights and needs", "Grading exams", "Organizing events", "Managing budgets"],
                "answer": "Promoting students’ rights and needs"
            },
            {
                "question": "Why teach study skills?",
                "options": ["Enhances learning and academic performance", "Fills free time", "Avoids teaching", "Simplifies grading"],
                "answer": "Enhances learning and academic performance"
            },
            {
                "question": "What is the role in mental health awareness?",
                "options": ["Promote understanding and support for mental health", "Manage finances", "Teach math", "Organize sports"],
                "answer": "Promote understanding and support for mental health"
            },
            {
                "question": "Why conduct career assessments?",
                "options": ["Identify student strengths and interests", "Assign random subjects", "Schedule exams", "Organize trips"],
                "answer": "Identify student strengths and interests"
            },
            {
                "question": "What is referral in counseling?",
                "options": ["Directing students to appropriate specialists or services", "Grading assignments", "Scheduling exams", "Planning events"],
                "answer": "Directing students to appropriate specialists or services"
            },
            {
                "question": "Why develop social skills programs?",
                "options": ["Enhances peer relationships and teamwork", "Reduce teaching", "Avoid grading", "Fill free time"],
                "answer": "Enhances peer relationships and teamwork"
            },
            {
                "question": "What is the importance of ethical practice?",
                "options": ["Protects students and maintains professional standards", "Simplifies teaching", "Avoids exams", "Fills office hours"],
                "answer": "Protects students and maintains professional standards"
            },
            {
                "question": "Why use assessment tools in counseling?",
                "options": ["Evaluate needs and progress objectively", "Schedule exams", "Organize sports", "Assign homework"],
                "answer": "Evaluate needs and progress objectively"
            },
            {
                "question": "What is role in attendance and academic monitoring?",
                "options": ["Identify students needing support", "Teach every class", "Grade all exams", "Organize trips"],
                "answer": "Identify students needing support"
            },
            {
                "question": "Why provide group workshops?",
                "options": ["Teach life skills and coping strategies", "Replace classes", "Organize sports", "Fill free time"],
                "answer": "Teach life skills and coping strategies"
            },
            {
                "question": "What is role in peer mediation?",
                "options": ["Train students to resolve conflicts independently", "Grade exams", "Manage events", "Plan sports"],
                "answer": "Train students to resolve conflicts independently"
            },
            {
                "question": "Why support at-risk students?",
                "options": ["Prevent academic failure and personal challenges", "Organize trips", "Reduce teaching", "Simplify grading"],
                "answer": "Prevent academic failure and personal challenges"
            },
            {
                "question": "What is role in fostering resilience?",
                "options": ["Help students cope with stress and setbacks", "Assign more homework", "Organize sports", "Plan budgets"],
                "answer": "Help students cope with stress and setbacks"
            },
            {
                "question": "Why conduct parent workshops?",
                "options": ["Guide parents in supporting students", "Organize exams", "Grade papers", "Plan events"],
                "answer": "Guide parents in supporting students"
            },
            {
                "question": "What is the role in transition planning?",
                "options": ["Support students moving to new grades or schools", "Grade assignments", "Organize sports", "Plan cafeteria menu"],
                "answer": "Support students moving to new grades or schools"
            },
            {
                "question": "Why collaborate with teachers?",
                "options": ["Coordinate academic and personal support for students", "Grade exams", "Organize events", "Manage finances"],
                "answer": "Coordinate academic and personal support for students"
            },
            {
                "question": "What is role in substance abuse prevention?",
                "options": ["Educate and provide resources to prevent risky behavior", "Assign extra homework", "Grade exams", "Organize sports"],
                "answer": "Educate and provide resources to prevent risky behavior"
            },
            {
                "question": "Why maintain professional boundaries?",
                "options": ["Protect both student and counselor safety and ethics", "Simplify grading", "Avoid teaching", "Fill office hours"],
                "answer": "Protect both student and counselor safety and ethics"
            },
            {
                "question": "What is role in academic goal setting?",
                "options": ["Guide students in planning achievable goals", "Grade exams", "Organize trips", "Plan budgets"],
                "answer": "Guide students in planning achievable goals"
            },
            {
                "question": "Why monitor social-emotional progress?",
                "options": ["Ensure interventions are effective", "Reduce teaching", "Simplify exams", "Fill free time"],
                "answer": "Ensure interventions are effective"
            },
            {
                "question": "What is role in diversity support?",
                "options": ["Support students from different backgrounds equitably", "Assign same homework", "Plan sports", "Manage classrooms"],
                "answer": "Support students from different backgrounds equitably"
            },
            {
                "question": "Why conduct needs assessments?",
                "options": ["Identify gaps and plan interventions", "Schedule exams", "Organize sports", "Assign grades"],
                "answer": "Identify gaps and plan interventions"
            }
        ],
        "Education Administrator": [
            {
                "question": "What is the primary role of an education administrator?",
                "options": ["Oversee school operations and ensure effective learning", "Teach every class", "Write textbooks", "Organize sports only"],
                "answer": "Oversee school operations and ensure effective learning"
            },
            {
                "question": "Why is strategic planning important in education administration?",
                "options": ["Guides long-term school goals and priorities", "Reduces teaching hours", "Fills office time", "Simplifies grading"],
                "answer": "Guides long-term school goals and priorities"
            },
            {
                "question": "What is the role in budgeting?",
                "options": ["Manage financial resources effectively", "Teach math", "Grade exams", "Organize events"],
                "answer": "Manage financial resources effectively"
            },
            {
                "question": "Why monitor school performance?",
                "options": ["Ensure academic standards and improvement", "Reduce teaching workload", "Fill office hours", "Simplify schedules"],
                "answer": "Ensure academic standards and improvement"
            },
            {
                "question": "What is policy implementation?",
                "options": ["Ensure school policies are followed correctly", "Assign homework", "Plan sports", "Grade exams"],
                "answer": "Ensure school policies are followed correctly"
            },
            {
                "question": "Why coordinate staff professional development?",
                "options": ["Enhance teacher skills and instructional quality", "Organize exams", "Fill schedules", "Simplify grading"],
                "answer": "Enhance teacher skills and instructional quality"
            },
            {
                "question": "What is accreditation management?",
                "options": ["Ensure school meets educational standards", "Teach all classes", "Manage cafeteria", "Plan sports"],
                "answer": "Ensure school meets educational standards"
            },
            {
                "question": "Why is data-driven decision making important?",
                "options": ["Informs policies and improvement strategies", "Reduces teaching", "Simplifies exams", "Fills free time"],
                "answer": "Informs policies and improvement strategies"
            },
            {
                "question": "What is role in curriculum oversight?",
                "options": ["Ensure alignment with standards and goals", "Grade papers", "Organize sports", "Plan field trips"],
                "answer": "Ensure alignment with standards and goals"
            },
            {
                "question": "Why manage student discipline?",
                "options": ["Maintain safe and productive learning environment", "Reduce teaching", "Fill office hours", "Simplify schedules"],
                "answer": "Maintain safe and productive learning environment"
            },
            {
                "question": "What is staff evaluation?",
                "options": ["Assess teacher performance and provide feedback", "Grade students", "Organize sports", "Plan events"],
                "answer": "Assess teacher performance and provide feedback"
            },
            {
                "question": "Why engage with the community?",
                "options": ["Build partnerships and support for school programs", "Fill office time", "Simplify grading", "Organize sports"],
                "answer": "Build partnerships and support for school programs"
            },
            {
                "question": "What is role in facility management?",
                "options": ["Ensure safe and functional school buildings", "Teach classes", "Grade exams", "Organize sports"],
                "answer": "Ensure safe and functional school buildings"
            },
            {
                "question": "Why conduct risk management?",
                "options": ["Prevent accidents and minimize liabilities", "Reduce teaching hours", "Fill free time", "Simplify grading"],
                "answer": "Prevent accidents and minimize liabilities"
            },
            {
                "question": "What is role in enrollment management?",
                "options": ["Ensure fair and organized student admissions", "Teach every class", "Grade exams", "Plan sports"],
                "answer": "Ensure fair and organized student admissions"
            },
            {
                "question": "Why develop school policies?",
                "options": ["Provide clear rules and guidelines for operations", "Reduce teaching", "Fill office hours", "Simplify grading"],
                "answer": "Provide clear rules and guidelines for operations"
            },
            {
                "question": "What is role in crisis management?",
                "options": ["Respond effectively to emergencies", "Assign homework", "Plan sports", "Grade exams"],
                "answer": "Respond effectively to emergencies"
            },
            {
                "question": "Why monitor compliance with regulations?",
                "options": ["Ensure legal and ethical standards are met", "Reduce teaching", "Simplify exams", "Fill free time"],
                "answer": "Ensure legal and ethical standards are met"
            },
            {
                "question": "What is role in budgeting for resources?",
                "options": ["Allocate funds for staffing, materials, and programs", "Grade exams", "Organize sports", "Plan field trips"],
                "answer": "Allocate funds for staffing, materials, and programs"
            },
            {
                "question": "Why plan school schedules?",
                "options": ["Ensure efficient use of time and resources", "Reduce teaching", "Fill office hours", "Simplify grading"],
                "answer": "Ensure efficient use of time and resources"
            },
            {
                "question": "What is role in stakeholder communication?",
                "options": ["Maintain clear communication with teachers, parents, and students", "Teach classes", "Grade exams", "Organize sports"],
                "answer": "Maintain clear communication with teachers, parents, and students"
            },
            {
                "question": "Why conduct performance audits?",
                "options": ["Evaluate effectiveness of programs and staff", "Reduce teaching", "Simplify exams", "Fill office time"],
                "answer": "Evaluate effectiveness of programs and staff"
            },
            {
                "question": "What is role in professional ethics?",
                "options": ["Ensure fair and responsible school leadership", "Grade papers", "Organize sports", "Plan events"],
                "answer": "Ensure fair and responsible school leadership"
            },
            {
                "question": "Why monitor student outcomes?",
                "options": ["Track academic achievement and progress", "Reduce teaching", "Fill office hours", "Simplify schedules"],
                "answer": "Track academic achievement and progress"
            },
            {
                "question": "What is role in technology integration?",
                "options": ["Ensure effective use of technology for learning", "Grade exams", "Organize sports", "Plan trips"],
                "answer": "Ensure effective use of technology for learning"
            },
            {
                "question": "Why develop strategic goals?",
                "options": ["Guide school improvement and resource allocation", "Reduce teaching", "Fill free time", "Simplify grading"],
                "answer": "Guide school improvement and resource allocation"
            },
            {
                "question": "What is role in accreditation preparation?",
                "options": ["Prepare documentation and processes for evaluation", "Grade students", "Organize sports", "Plan events"],
                "answer": "Prepare documentation and processes for evaluation"
            },
            {
                "question": "Why lead school committees?",
                "options": ["Coordinate initiatives and policies effectively", "Teach all classes", "Grade exams", "Organize trips"],
                "answer": "Coordinate initiatives and policies effectively"
            },
            {
                "question": "What is role in teacher recruitment?",
                "options": ["Hire qualified staff to meet school needs", "Grade students", "Organize sports", "Plan events"],
                "answer": "Hire qualified staff to meet school needs"
            },
            {
                "question": "Why monitor professional development?",
                "options": ["Ensure staff skills remain current and effective", "Reduce teaching", "Simplify exams", "Fill free time"],
                "answer": "Ensure staff skills remain current and effective"
            },
            {
                "question": "What is role in student support services?",
                "options": ["Coordinate counseling, health, and extracurricular programs", "Teach every class", "Grade exams", "Organize sports"],
                "answer": "Coordinate counseling, health, and extracurricular programs"
            },
            {
                "question": "Why conduct school inspections?",
                "options": ["Ensure standards, safety, and quality are maintained", "Reduce teaching", "Fill office hours", "Simplify grading"],
                "answer": "Ensure standards, safety, and quality are maintained"
            },
            {
                "question": "What is role in community engagement?",
                "options": ["Build partnerships to enhance school programs", "Grade exams", "Organize sports", "Plan trips"],
                "answer": "Build partnerships to enhance school programs"
            },
            {
                "question": "Why manage legal compliance?",
                "options": ["Avoid legal issues and ensure ethical practice", "Reduce teaching", "Simplify exams", "Fill free time"],
                "answer": "Avoid legal issues and ensure ethical practice"
            },
            {
                "question": "What is role in resource planning?",
                "options": ["Ensure appropriate staffing, materials, and facilities", "Teach all subjects", "Grade exams", "Organize sports"],
                "answer": "Ensure appropriate staffing, materials, and facilities"
            },
            {
                "question": "Why monitor school culture?",
                "options": ["Promote positive, safe, and inclusive environment", "Reduce teaching", "Fill office hours", "Simplify grading"],
                "answer": "Promote positive, safe, and inclusive environment"
            },
            {
                "question": "What is role in policy review?",
                "options": ["Evaluate and update school policies regularly", "Grade papers", "Organize sports", "Plan events"],
                "answer": "Evaluate and update school policies regularly"
            },
            {
                "question": "Why track enrollment trends?",
                "options": ["Plan staffing and resources effectively", "Reduce teaching", "Simplify exams", "Fill free time"],
                "answer": "Plan staffing and resources effectively"
            },
            {
                "question": "What is role in school improvement planning?",
                "options": ["Develop actionable plans to enhance teaching and learning", "Grade students", "Organize sports", "Plan events"],
                "answer": "Develop actionable plans to enhance teaching and learning"
            },
            {
                "question": "Why coordinate extracurricular programs?",
                "options": ["Support holistic student development", "Reduce teaching", "Fill office hours", "Simplify grading"],
                "answer": "Support holistic student development"
            }
        ],
        "Training Specialist": [
            {
                "question": "What is the primary role of a training specialist?",
                "options": ["Design and deliver employee learning programs", "Teach school classes", "Manage school finances", "Organize sports events"],
                "answer": "Design and deliver employee learning programs"
            },
            {
                "question": "Why conduct a training needs analysis?",
                "options": ["Identify skills gaps and learning requirements", "Assign homework", "Organize sports", "Grade exams"],
                "answer": "Identify skills gaps and learning requirements"
            },
            {
                "question": "What is instructional design in corporate training?",
                "options": ["Planning effective learning experiences for employees", "Teaching students", "Managing budgets", "Organizing events"],
                "answer": "Planning effective learning experiences for employees"
            },
            {
                "question": "Why set learning objectives?",
                "options": ["Clarify what trainees should achieve", "Fill office hours", "Reduce teaching", "Simplify grading"],
                "answer": "Clarify what trainees should achieve"
            },
            {
                "question": "What is blended learning?",
                "options": ["Combination of online and in-person training", "Sports training only", "Classroom lectures only", "Self-study only"],
                "answer": "Combination of online and in-person training"
            },
            {
                "question": "Why use e-learning platforms?",
                "options": ["Provide flexible and scalable learning options", "Replace instructors", "Fill office hours", "Simplify grading"],
                "answer": "Provide flexible and scalable learning options"
            },
            {
                "question": "What is formative assessment in training?",
                "options": ["Ongoing feedback to improve learner performance", "Final test only", "Attendance record", "Event planning"],
                "answer": "Ongoing feedback to improve learner performance"
            },
            {
                "question": "Why measure training effectiveness?",
                "options": ["Ensure learning achieves desired outcomes", "Fill free time", "Simplify exams", "Reduce teaching"],
                "answer": "Ensure learning achieves desired outcomes"
            },
            {
                "question": "What is the role of a facilitator?",
                "options": ["Guide learners through activities and discussions", "Teach every subject", "Organize budgets", "Plan sports"],
                "answer": "Guide learners through activities and discussions"
            },
            {
                "question": "Why use simulations in training?",
                "options": ["Allow safe practice of real-world tasks", "Fill free time", "Replace exams", "Assign homework"],
                "answer": "Allow safe practice of real-world tasks"
            },
            {
                "question": "What is learner engagement?",
                "options": ["Active participation and interest in training", "Attendance only", "Grading exams", "Organizing events"],
                "answer": "Active participation and interest in training"
            },
            {
                "question": "Why provide feedback?",
                "options": ["Improve performance and learning outcomes", "Reduce office work", "Simplify grading", "Fill free time"],
                "answer": "Improve performance and learning outcomes"
            },
            {
                "question": "What is on-the-job training?",
                "options": ["Learning while performing work tasks", "Classroom lectures only", "Watching videos silently", "Taking exams"],
                "answer": "Learning while performing work tasks"
            },
            {
                "question": "Why conduct post-training evaluation?",
                "options": ["Assess retention and application of skills", "Assign homework", "Organize sports", "Grade exams"],
                "answer": "Assess retention and application of skills"
            },
            {
                "question": "What is a training curriculum?",
                "options": ["Structured plan of learning content and activities", "Exam schedule", "Budget plan", "Classroom seating"],
                "answer": "Structured plan of learning content and activities"
            },
            {
                "question": "Why use adult learning principles?",
                "options": ["Ensure training is relevant and effective for adults", "Fill free time", "Simplify grading", "Replace instruction"],
                "answer": "Ensure training is relevant and effective for adults"
            },
            {
                "question": "What is a learning management system (LMS)?",
                "options": ["Platform to deliver, track, and manage training", "Classroom only", "Sports arena", "Budget software"],
                "answer": "Platform to deliver, track, and manage training"
            },
            {
                "question": "Why customize training programs?",
                "options": ["Address specific learner or organizational needs", "Fill free time", "Simplify grading", "Organize sports"],
                "answer": "Address specific learner or organizational needs"
            },
            {
                "question": "What is coaching in training?",
                "options": ["One-on-one guidance to improve skills", "Classroom lecture", "Watching videos silently", "Grading exams"],
                "answer": "One-on-one guidance to improve skills"
            },
            {
                "question": "Why facilitate workshops?",
                "options": ["Encourage hands-on learning and collaboration", "Fill free time", "Simplify grading", "Assign homework"],
                "answer": "Encourage hands-on learning and collaboration"
            },
            {
                "question": "What is competency-based training?",
                "options": ["Focus on achieving specific skills or abilities", "Filling time with lectures", "Watching videos silently", "Assigning homework"],
                "answer": "Focus on achieving specific skills or abilities"
            },
            {
                "question": "Why track training ROI?",
                "options": ["Measure return on investment and effectiveness", "Fill office hours", "Simplify exams", "Reduce teaching"],
                "answer": "Measure return on investment and effectiveness"
            },
            {
                "question": "What is microlearning?",
                "options": ["Short, focused learning modules", "Full-day workshops only", "Watching videos passively", "Assigning homework"],
                "answer": "Short, focused learning modules"
            },
            {
                "question": "Why conduct needs assessments?",
                "options": ["Identify skill gaps and learning priorities", "Reduce teaching", "Simplify exams", "Fill office hours"],
                "answer": "Identify skill gaps and learning priorities"
            },
            {
                "question": "What is blended facilitation?",
                "options": ["Combining in-person and digital instruction methods", "Sports coaching only", "Watching videos silently", "Grading exams"],
                "answer": "Combining in-person and digital instruction methods"
            },
            {
                "question": "Why encourage peer learning?",
                "options": ["Enhances collaboration and knowledge sharing", "Fill free time", "Simplify grading", "Assign homework"],
                "answer": "Enhances collaboration and knowledge sharing"
            },
            {
                "question": "What is training content development?",
                "options": ["Creating materials and resources for learning", "Organizing exams", "Scheduling sports", "Assigning homework"],
                "answer": "Creating materials and resources for learning"
            },
            {
                "question": "Why evaluate learning retention?",
                "options": ["Ensure learners remember and can apply skills", "Fill free time", "Simplify grading", "Reduce office work"],
                "answer": "Ensure learners remember and can apply skills"
            },
            {
                "question": "What is role in soft skills training?",
                "options": ["Develop communication, teamwork, and problem-solving skills", "Teach math only", "Grade exams", "Organize sports"],
                "answer": "Develop communication, teamwork, and problem-solving skills"
            },
            {
                "question": "Why use instructional technology?",
                "options": ["Enhance learning through digital tools and media", "Fill office hours", "Simplify grading", "Reduce teaching"],
                "answer": "Enhance learning through digital tools and media"
            },
            {
                "question": "What is role in onboarding training?",
                "options": ["Help new employees integrate into the organization", "Teach school subjects", "Plan sports", "Grade exams"],
                "answer": "Help new employees integrate into the organization"
            },
            {
                "question": "Why implement follow-up training?",
                "options": ["Reinforce learning and assess application on the job", "Fill free time", "Simplify grading", "Assign homework"],
                "answer": "Reinforce learning and assess application on the job"
            },
            {
                "question": "What is role in compliance training?",
                "options": ["Ensure employees understand regulations and policies", "Grade exams", "Organize sports", "Plan events"],
                "answer": "Ensure employees understand regulations and policies"
            },
            {
                "question": "Why use simulations and role-play?",
                "options": ["Provide practical experience in a safe environment", "Fill free time", "Simplify grading", "Assign homework"],
                "answer": "Provide practical experience in a safe environment"
            },
            {
                "question": "What is role in e-learning program management?",
                "options": ["Design, deliver, and monitor online learning courses", "Teach every class", "Grade exams", "Organize sports"],
                "answer": "Design, deliver, and monitor online learning courses"
            },
            {
                "question": "Why use learning analytics?",
                "options": ["Track learner progress and improve training", "Fill office hours", "Simplify grading", "Reduce teaching"],
                "answer": "Track learner progress and improve training"
            },
            {
                "question": "What is role in training evaluation?",
                "options": ["Measure effectiveness and impact of learning programs", "Grade papers", "Organize sports", "Plan events"],
                "answer": "Measure effectiveness and impact of learning programs"
            },
            {
                "question": "Why maintain training records?",
                "options": ["Document participation, progress, and compliance", "Fill free time", "Simplify grading", "Reduce teaching"],
                "answer": "Document participation, progress, and compliance"
            },
            {
                "question": "What is role in leadership training?",
                "options": ["Develop managerial and decision-making skills", "Teach math only", "Grade exams", "Organize sports"],
                "answer": "Develop managerial and decision-making skills"
            },
            {
                "question": "Why align training with organizational goals?",
                "options": ["Ensure learning supports business objectives", "Fill free time", "Simplify grading", "Reduce teaching"],
                "answer": "Ensure learning supports business objectives"
            },
            {
                "question": "What is role in competency assessment?",
                "options": ["Evaluate if employees have acquired the required skills", "Grade exams", "Organize sports", "Plan events"],
                "answer": "Evaluate if employees have acquired the required skills"
            }
        ],


    },
}

