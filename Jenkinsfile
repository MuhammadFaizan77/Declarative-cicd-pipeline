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
       stage('Static Code Analysis') {
            steps {
                script {
                    def scannerHome = tool name: 'SonarQubeScanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
                    withSonarQubeEnv('SonarQube') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
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
