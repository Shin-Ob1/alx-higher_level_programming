#!/bin/bash
# send json post and display body
curl -s -H "Content-Type: application/json" -d "$(cat "$2")" "$1"
