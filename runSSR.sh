#!/bin/sh

case "$1" in
    -d|--daemon)
        $0 < /dev/null &> /dev/null & disown
        exit 0
        ;;
    *)
        ;;
esac

git pull origin
npm run build
nohup npm run ssr &
echo 'Completed deploy'
