FROM debian:latest

RUN echo "root:root" | chpasswd

RUN apt update -y \
    && apt install -y openssh-server vim
