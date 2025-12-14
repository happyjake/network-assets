# network-assets

Icons and rules for network routing.

## Directory Structure

```
network-assets/
├── IconSet/
│   └── Color/           # 128x128 PNG icons
├── Ruleset/
│   └── [Category]/      # Rule lists by category
└── Script/
    └── set_icon.js      # Icon mapping utility
```

## Icon Specifications

| Property | Value |
|----------|-------|
| Format | PNG |
| Dimensions | 128x128 pixels |
| File size | 5-25KB |
| Naming | PascalCase with underscores (e.g., `Hong_Kong.png`) |

## Ruleset Format

Each ruleset follows Surge RULE-SET format with metadata header:

```
# NAME: CategoryName
# AUTHOR: jake
# REPO: https://github.com/happyjake/network-assets
# UPDATED: YYYY-MM-DD
# TOTAL: X

DOMAIN-SUFFIX,example.com
DOMAIN-KEYWORD,example
IP-CIDR,192.168.0.0/16,no-resolve
```

## Usage

### Icons

```
img-url=https://raw.githubusercontent.com/happyjake/network-assets/main/IconSet/Color/IconName.png
```

### Rules

```
RULE-SET,https://raw.githubusercontent.com/happyjake/network-assets/main/Ruleset/Category/Category.list,PolicyName
```
