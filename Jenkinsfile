pipeline {
    agent any
    stages {
        stage('Clone git repo') {
            steps {
                git url: "https://github.com/MuhammadFaizan77/Declarative-cicd-pipeline.git",branch:"main"
                
            }
        }
        stage('build image') {
            steps {
                echo "buidling image"
                sh "docker build -t react-app ."
            }
        }
        stage('SonarQube analysis') {
            steps {
                // Run SonarQube scanner with sonarqube server configuration
                withSonarQubeEnv('sonarqube') {
                    // Specify the scanner parameters
                    sh 'sonar-scanner \
                        -Dsonar.projectKey=react-app \
                        -Dsonar.sources=src \
                        -Dsonar.tests=src \
                        -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info'
                }
            }
        }
        stage('Pushing Docker image') {
            steps {
               echo "Pushing the Image"
                
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh "docker tag react-app ${env.DOCKER_USER}/react-app:latest"
                    sh "docker login -u ${env.DOCKER_USER} -p ${env.DOCKER_PASS}"
                    sh "docker push ${env.DOCKER_USER}/react-app:latest"
                } // Add this closing curly brace

                
            }
        }
    }
}
