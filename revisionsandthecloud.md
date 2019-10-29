# Revisions and The Cloud

## What is Version Control?
Version control software keeps track of every modification to the code in a special kind of database. If a mistake is made, developers can turn back the clock and compare earlier versions of the code to help fix the mistake while minimizing disruption to all team members.

One of the most popular VCS tools in use today is called Git. Git is a Distributed VCS (Version Control Systems)

## So What is Git?
Git is a free and open source program that tracks changes made to files. Once installed, Git can be initialized on a project to create a Git repository.

## Benefits of Git

1. Git is set up to greatly minimize the possibility of irreversible damage to files, such as accidentally lost data.
2. A complete long-term change history of every file.
3. Branching and merging. Having team members work concurrently is a no-brainer, but even individuals working on their own can benefit from the ability to work on independent streams of changes. Creating a "branch" in VCS tools keeps multiple streams of work independent from each other while also providing the facility to merge that work back together, enabling developers to verify that the changes on each branch do not conflict.
4. Traceability. Being able to trace each change made to the software and connect it to project management and bug tracking softwares, and being able to annotate each change with a message describing the purpose and intent of the change can help not only with root cause analysis and other forensics.

## Setting up a Git Repository

1. Locate your specific file
```
$ cd filename
```

2. Use the git init command
```
$ git init
```

3. Check status
```
$ git status
```
4. Adding a single file
```
$ git add filename
```

4. Adding all files
```
$ git add *
```
5. Check status again to verify if changes have been added
```
$ git status
```
6. Commit changes with a message. Write commit messages that explain WHY you made your changes, not what the changes were.
```
$ git commit -am"your message here"
```
7. Pushing changes
```
$ git push origin master
```

[Back to Main Page](https://daesystephens.github.io/learning-journal)