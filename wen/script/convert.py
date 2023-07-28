import json

def parse(line):
    ch, split = line.strip().split(",")
    return ch, split

def main():
    with open("chars.csv", "r") as f:
        mappings = [
            {"origin": ch, "split": split}
            for ch, split
            in sorted(map(parse, f.readlines()))
        ]
    with open("chars.json", "w", encoding="utf-8") as f:
        json.dump(mappings, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    main()
