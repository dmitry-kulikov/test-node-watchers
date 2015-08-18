#!/bin/sh

cd "$(dirname "$0")"

run_test()
{
    DIRECTORY_PATH=$1
    FILE_PATH=$2
    DELAY=$3

    mkdir ${DIRECTORY_PATH}
    sleep ${DELAY}

    touch ${FILE_PATH}
    sleep ${DELAY}

    echo 'Test text' > "${FILE_PATH}"
    sleep ${DELAY}

    echo 'New test text' > "${FILE_PATH}"
    sleep ${DELAY}

    mv ${FILE_PATH} "${FILE_PATH}_new"
    sleep ${DELAY}

    mv "${FILE_PATH}_new" ${FILE_PATH}
    sleep ${DELAY}

    mv ${DIRECTORY_PATH} "${DIRECTORY_PATH}_new"
    sleep ${DELAY}

    mv "${DIRECTORY_PATH}_new" ${DIRECTORY_PATH}
    sleep ${DELAY}

    rm ${FILE_PATH}
    sleep ${DELAY}

    rm -r ${DIRECTORY_PATH}
    sleep ${DELAY}
}

for DIRECTORY in 'backend-theme/tmp' 'project-files/tmp' 'frontend-theme/tmp'
do
    run_test ${DIRECTORY} "${DIRECTORY}/file" ${1:-0.5}
done
