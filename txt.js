"use strict";
(() => {
    // pretext.js
    var baseTypes = [
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "S",
        "B",
        "S",
        "WS",
        "B",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "B",
        "B",
        "B",
        "S",
        "WS",
        "ON",
        "ON",
        "ET",
        "ET",
        "ET",
        "ON",
        "ON",
        "ON",
        "ON",
        "ON",
        "ON",
        "CS",
        "ON",
        "CS",
        "ON",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "ON",
        "ON",
        "ON",
        "ON",
        "ON",
        "ON",
        "ON",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "ON",
        "ON",
        "ON",
        "ON",
        "ON",
        "ON",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "ON",
        "ON",
        "ON",
        "ON",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "B",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "CS",
        "ON",
        "ET",
        "ET",
        "ET",
        "ET",
        "ON",
        "ON",
        "ON",
        "ON",
        "L",
        "ON",
        "ON",
        "ON",
        "ON",
        "ON",
        "ET",
        "ET",
        "EN",
        "EN",
        "ON",
        "L",
        "ON",
        "ON",
        "ON",
        "EN",
        "L",
        "ON",
        "ON",
        "ON",
        "ON",
        "ON",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "ON",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "ON",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L"
    ];
    var arabicTypes = [
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "CS",
        "AL",
        "ON",
        "ON",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "ET",
        "AN",
        "AN",
        "AL",
        "AL",
        "AL",
        "NSM",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "ON",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL"
    ];
    function classifyChar(charCode) {
        if (charCode <= 255)
            return baseTypes[charCode];
        if (1424 <= charCode && charCode <= 1524)
            return "R";
        if (1536 <= charCode && charCode <= 1791)
            return arabicTypes[charCode & 255];
        if (1792 <= charCode && charCode <= 2220)
            return "AL";
        return "L";
    }
    function computeBidiLevels(str) {
        const len = str.length;
        if (len === 0)
            return null;
        const types = new Array(len);
        let numBidi = 0;
        for (let i = 0; i < len; i++) {
            const t = classifyChar(str.charCodeAt(i));
            if (t === "R" || t === "AL" || t === "AN")
                numBidi++;
            types[i] = t;
        }
        if (numBidi === 0)
            return null;
        const startLevel = len / numBidi < 0.3 ? 0 : 1;
        const levels = new Int8Array(len);
        for (let i = 0; i < len; i++)
            levels[i] = startLevel;
        const e = startLevel & 1 ? "R" : "L";
        const sor = e;
        let lastType = sor;
        for (let i = 0; i < len; i++) {
            if (types[i] === "NSM")
                types[i] = lastType;
            else
                lastType = types[i];
        }
        lastType = sor;
        for (let i = 0; i < len; i++) {
            const t = types[i];
            if (t === "EN")
                types[i] = lastType === "AL" ? "AN" : "EN";
            else if (t === "R" || t === "L" || t === "AL")
                lastType = t;
        }
        for (let i = 0; i < len; i++) {
            if (types[i] === "AL")
                types[i] = "R";
        }
        for (let i = 1; i < len - 1; i++) {
            if (types[i] === "ES" && types[i - 1] === "EN" && types[i + 1] === "EN") {
                types[i] = "EN";
            }
            if (types[i] === "CS" && (types[i - 1] === "EN" || types[i - 1] === "AN") && types[i + 1] === types[i - 1]) {
                types[i] = types[i - 1];
            }
        }
        for (let i = 0; i < len; i++) {
            if (types[i] !== "EN")
                continue;
            let j;
            for (j = i - 1; j >= 0 && types[j] === "ET"; j--)
                types[j] = "EN";
            for (j = i + 1; j < len && types[j] === "ET"; j++)
                types[j] = "EN";
        }
        for (let i = 0; i < len; i++) {
            const t = types[i];
            if (t === "WS" || t === "ES" || t === "ET" || t === "CS")
                types[i] = "ON";
        }
        lastType = sor;
        for (let i = 0; i < len; i++) {
            const t = types[i];
            if (t === "EN")
                types[i] = lastType === "L" ? "L" : "EN";
            else if (t === "R" || t === "L")
                lastType = t;
        }
        for (let i = 0; i < len; i++) {
            if (types[i] !== "ON")
                continue;
            let end = i + 1;
            while (end < len && types[end] === "ON")
                end++;
            const before = i > 0 ? types[i - 1] : sor;
            const after = end < len ? types[end] : sor;
            const bDir = before !== "L" ? "R" : "L";
            const aDir = after !== "L" ? "R" : "L";
            if (bDir === aDir) {
                for (let j = i; j < end; j++)
                    types[j] = bDir;
            }
            i = end - 1;
        }
        for (let i = 0; i < len; i++) {
            if (types[i] === "ON")
                types[i] = e;
        }
        for (let i = 0; i < len; i++) {
            const t = types[i];
            if ((levels[i] & 1) === 0) {
                if (t === "R")
                    levels[i]++;
                else if (t === "AN" || t === "EN")
                    levels[i] += 2;
            } else if (t === "L" || t === "AN" || t === "EN") {
                levels[i]++;
            }
        }
        return levels;
    }
    function computeSegmentLevels(normalized, segStarts) {
        const bidiLevels = computeBidiLevels(normalized);
        if (bidiLevels === null)
            return null;
        const segLevels = new Int8Array(segStarts.length);
        for (let i = 0; i < segStarts.length; i++) {
            segLevels[i] = bidiLevels[segStarts[i]];
        }
        return segLevels;
    }
    var collapsibleWhitespaceRunRe = /[ \t\n\r\f]+/g;
    var needsWhitespaceNormalizationRe = /[\t\n\r\f]| {2,}|^ | $/;
    function getWhiteSpaceProfile(whiteSpace) {
        const mode = whiteSpace ?? "normal";
        return mode === "pre-wrap" ? { mode, preserveOrdinarySpaces: true, preserveHardBreaks: true } : { mode, preserveOrdinarySpaces: false, preserveHardBreaks: false };
    }
    function normalizeWhitespaceNormal(text) {
        if (!needsWhitespaceNormalizationRe.test(text))
            return text;
        let normalized = text.replace(collapsibleWhitespaceRunRe, " ");
        if (normalized.charCodeAt(0) === 32) {
            normalized = normalized.slice(1);
        }
        if (normalized.length > 0 && normalized.charCodeAt(normalized.length - 1) === 32) {
            normalized = normalized.slice(0, -1);
        }
        return normalized;
    }
    function normalizeWhitespacePreWrap(text) {
        if (!/[\r\f]/.test(text))
            return text.replace(/\r\n/g, `
`);
        return text.replace(/\r\n/g, `
`).replace(/[\r\f]/g, `
`);
    }
    var sharedWordSegmenter = null;
    var segmenterLocale;
    function getSharedWordSegmenter() {
        if (sharedWordSegmenter === null) {
            sharedWordSegmenter = new Intl.Segmenter(segmenterLocale, { granularity: "word" });
        }
        return sharedWordSegmenter;
    }
    var arabicScriptRe = /\p{Script=Arabic}/u;
    var combiningMarkRe = /\p{M}/u;
    var decimalDigitRe = /\p{Nd}/u;
    function containsArabicScript(text) {
        return arabicScriptRe.test(text);
    }
    function isCJK(s) {
        for (const ch of s) {
            const c = ch.codePointAt(0);
            if (c >= 19968 && c <= 40959 || c >= 13312 && c <= 19903 || c >= 131072 && c <= 173791 || c >= 173824 && c <= 177983 || c >= 177984 && c <= 178207 || c >= 178208 && c <= 183983 || c >= 183984 && c <= 191471 || c >= 196608 && c <= 201551 || c >= 63744 && c <= 64255 || c >= 194560 && c <= 195103 || c >= 12288 && c <= 12351 || c >= 12352 && c <= 12447 || c >= 12448 && c <= 12543 || c >= 44032 && c <= 55215 || c >= 65280 && c <= 65519) {
                return true;
            }
        }
        return false;
    }
    var kinsokuStart = /* @__PURE__ */ new Set([
        "\uFF0C",
        "\uFF0E",
        "\uFF01",
        "\uFF1A",
        "\uFF1B",
        "\uFF1F",
        "\u3001",
        "\u3002",
        "\u30FB",
        "\uFF09",
        "\u3015",
        "\u3009",
        "\u300B",
        "\u300D",
        "\u300F",
        "\u3011",
        "\u3017",
        "\u3019",
        "\u301B",
        "\u30FC",
        "\u3005",
        "\u303B",
        "\u309D",
        "\u309E",
        "\u30FD",
        "\u30FE"
    ]);
    var kinsokuEnd = /* @__PURE__ */ new Set([
        '"',
        "(",
        "[",
        "{",
        "\u201C",
        "\u2018",
        "\xAB",
        "\u2039",
        "\uFF08",
        "\u3014",
        "\u3008",
        "\u300A",
        "\u300C",
        "\u300E",
        "\u3010",
        "\u3016",
        "\u3018",
        "\u301A"
    ]);
    var forwardStickyGlue = /* @__PURE__ */ new Set([
        "'",
        "\u2019"
    ]);
    var leftStickyPunctuation = /* @__PURE__ */ new Set([
        ".",
        ",",
        "!",
        "?",
        ":",
        ";",
        "\u060C",
        "\u061B",
        "\u061F",
        "\u0964",
        "\u0965",
        "\u104A",
        "\u104B",
        "\u104C",
        "\u104D",
        "\u104F",
        ")",
        "]",
        "}",
        "%",
        '"',
        "\u201D",
        "\u2019",
        "\xBB",
        "\u203A",
        "\u2026"
    ]);
    var arabicNoSpaceTrailingPunctuation = /* @__PURE__ */ new Set([
        ":",
        ".",
        "\u060C",
        "\u061B"
    ]);
    var myanmarMedialGlue = /* @__PURE__ */ new Set([
        "\u104F"
    ]);
    var closingQuoteChars = /* @__PURE__ */ new Set([
        "\u201D",
        "\u2019",
        "\xBB",
        "\u203A",
        "\u300D",
        "\u300F",
        "\u3011",
        "\u300B",
        "\u3009",
        "\u3015",
        "\uFF09"
    ]);
    function isLeftStickyPunctuationSegment(segment) {
        if (isEscapedQuoteClusterSegment(segment))
            return true;
        let sawPunctuation = false;
        for (const ch of segment) {
            if (leftStickyPunctuation.has(ch)) {
                sawPunctuation = true;
                continue;
            }
            if (sawPunctuation && combiningMarkRe.test(ch))
                continue;
            return false;
        }
        return sawPunctuation;
    }
    function isCJKLineStartProhibitedSegment(segment) {
        for (const ch of segment) {
            if (!kinsokuStart.has(ch) && !leftStickyPunctuation.has(ch))
                return false;
        }
        return segment.length > 0;
    }
    function isForwardStickyClusterSegment(segment) {
        if (isEscapedQuoteClusterSegment(segment))
            return true;
        for (const ch of segment) {
            if (!kinsokuEnd.has(ch) && !forwardStickyGlue.has(ch) && !combiningMarkRe.test(ch))
                return false;
        }
        return segment.length > 0;
    }
    function isEscapedQuoteClusterSegment(segment) {
        let sawQuote = false;
        for (const ch of segment) {
            if (ch === "\\" || combiningMarkRe.test(ch))
                continue;
            if (kinsokuEnd.has(ch) || leftStickyPunctuation.has(ch) || forwardStickyGlue.has(ch)) {
                sawQuote = true;
                continue;
            }
            return false;
        }
        return sawQuote;
    }
    function splitTrailingForwardStickyCluster(text) {
        const chars = Array.from(text);
        let splitIndex = chars.length;
        while (splitIndex > 0) {
            const ch = chars[splitIndex - 1];
            if (combiningMarkRe.test(ch)) {
                splitIndex--;
                continue;
            }
            if (kinsokuEnd.has(ch) || forwardStickyGlue.has(ch)) {
                splitIndex--;
                continue;
            }
            break;
        }
        if (splitIndex <= 0 || splitIndex === chars.length)
            return null;
        return {
            head: chars.slice(0, splitIndex).join(""),
            tail: chars.slice(splitIndex).join("")
        };
    }
    function isRepeatedSingleCharRun(segment, ch) {
        if (segment.length === 0)
            return false;
        for (const part of segment) {
            if (part !== ch)
                return false;
        }
        return true;
    }
    function endsWithArabicNoSpacePunctuation(segment) {
        if (!containsArabicScript(segment) || segment.length === 0)
            return false;
        return arabicNoSpaceTrailingPunctuation.has(segment[segment.length - 1]);
    }
    function endsWithMyanmarMedialGlue(segment) {
        if (segment.length === 0)
            return false;
        return myanmarMedialGlue.has(segment[segment.length - 1]);
    }
    function splitLeadingSpaceAndMarks(segment) {
        if (segment.length < 2 || segment[0] !== " ")
            return null;
        const marks = segment.slice(1);
        if (/^\p{M}+$/u.test(marks)) {
            return { space: " ", marks };
        }
        return null;
    }
    function endsWithClosingQuote(text) {
        for (let i = text.length - 1; i >= 0; i--) {
            const ch = text[i];
            if (closingQuoteChars.has(ch))
                return true;
            if (!leftStickyPunctuation.has(ch))
                return false;
        }
        return false;
    }
    function classifySegmentBreakChar(ch, whiteSpaceProfile) {
        if (whiteSpaceProfile.preserveOrdinarySpaces || whiteSpaceProfile.preserveHardBreaks) {
            if (ch === " ")
                return "preserved-space";
            if (ch === "	")
                return "tab";
            if (whiteSpaceProfile.preserveHardBreaks && ch === `
`)
                return "hard-break";
        }
        if (ch === " ")
            return "space";
        if (ch === "\xA0" || ch === "\u202F" || ch === "\u2060" || ch === "\uFEFF") {
            return "glue";
        }
        if (ch === "\u200B")
            return "zero-width-break";
        if (ch === "\xAD")
            return "soft-hyphen";
        return "text";
    }
    function splitSegmentByBreakKind(segment, isWordLike, start, whiteSpaceProfile) {
        const pieces = [];
        let currentKind = null;
        let currentText = "";
        let currentStart = start;
        let currentWordLike = false;
        let offset = 0;
        for (const ch of segment) {
            const kind = classifySegmentBreakChar(ch, whiteSpaceProfile);
            const wordLike = kind === "text" && isWordLike;
            if (currentKind !== null && kind === currentKind && wordLike === currentWordLike) {
                currentText += ch;
                offset += ch.length;
                continue;
            }
            if (currentKind !== null) {
                pieces.push({
                    text: currentText,
                    isWordLike: currentWordLike,
                    kind: currentKind,
                    start: currentStart
                });
            }
            currentKind = kind;
            currentText = ch;
            currentStart = start + offset;
            currentWordLike = wordLike;
            offset += ch.length;
        }
        if (currentKind !== null) {
            pieces.push({
                text: currentText,
                isWordLike: currentWordLike,
                kind: currentKind,
                start: currentStart
            });
        }
        return pieces;
    }
    function isTextRunBoundary(kind) {
        return kind === "space" || kind === "preserved-space" || kind === "zero-width-break" || kind === "hard-break";
    }
    var urlSchemeSegmentRe = /^[A-Za-z][A-Za-z0-9+.-]*:$/;
    function isUrlLikeRunStart(segmentation, index) {
        const text = segmentation.texts[index];
        if (text.startsWith("www."))
            return true;
        return urlSchemeSegmentRe.test(text) && index + 1 < segmentation.len && segmentation.kinds[index + 1] === "text" && segmentation.texts[index + 1] === "//";
    }
    function isUrlQueryBoundarySegment(text) {
        return text.includes("?") && (text.includes("://") || text.startsWith("www."));
    }
    function mergeUrlLikeRuns(segmentation) {
        const texts = segmentation.texts.slice();
        const isWordLike = segmentation.isWordLike.slice();
        const kinds = segmentation.kinds.slice();
        const starts = segmentation.starts.slice();
        for (let i = 0; i < segmentation.len; i++) {
            if (kinds[i] !== "text" || !isUrlLikeRunStart(segmentation, i))
                continue;
            let j = i + 1;
            while (j < segmentation.len && !isTextRunBoundary(kinds[j])) {
                texts[i] += texts[j];
                isWordLike[i] = true;
                const endsQueryPrefix = texts[j].includes("?");
                kinds[j] = "text";
                texts[j] = "";
                j++;
                if (endsQueryPrefix)
                    break;
            }
        }
        let compactLen = 0;
        for (let read = 0; read < texts.length; read++) {
            const text = texts[read];
            if (text.length === 0)
                continue;
            if (compactLen !== read) {
                texts[compactLen] = text;
                isWordLike[compactLen] = isWordLike[read];
                kinds[compactLen] = kinds[read];
                starts[compactLen] = starts[read];
            }
            compactLen++;
        }
        texts.length = compactLen;
        isWordLike.length = compactLen;
        kinds.length = compactLen;
        starts.length = compactLen;
        return {
            len: compactLen,
            texts,
            isWordLike,
            kinds,
            starts
        };
    }
    function mergeUrlQueryRuns(segmentation) {
        const texts = [];
        const isWordLike = [];
        const kinds = [];
        const starts = [];
        for (let i = 0; i < segmentation.len; i++) {
            const text = segmentation.texts[i];
            texts.push(text);
            isWordLike.push(segmentation.isWordLike[i]);
            kinds.push(segmentation.kinds[i]);
            starts.push(segmentation.starts[i]);
            if (!isUrlQueryBoundarySegment(text))
                continue;
            const nextIndex = i + 1;
            if (nextIndex >= segmentation.len || isTextRunBoundary(segmentation.kinds[nextIndex])) {
                continue;
            }
            let queryText = "";
            const queryStart = segmentation.starts[nextIndex];
            let j = nextIndex;
            while (j < segmentation.len && !isTextRunBoundary(segmentation.kinds[j])) {
                queryText += segmentation.texts[j];
                j++;
            }
            if (queryText.length > 0) {
                texts.push(queryText);
                isWordLike.push(true);
                kinds.push("text");
                starts.push(queryStart);
                i = j - 1;
            }
        }
        return {
            len: texts.length,
            texts,
            isWordLike,
            kinds,
            starts
        };
    }
    var numericJoinerChars = /* @__PURE__ */ new Set([
        ":",
        "-",
        "/",
        "\xD7",
        ",",
        ".",
        "+",
        "\u2013",
        "\u2014"
    ]);
    var asciiPunctuationChainSegmentRe = /^[A-Za-z0-9_]+[,:;]*$/;
    var asciiPunctuationChainTrailingJoinersRe = /[,:;]+$/;
    function segmentContainsDecimalDigit(text) {
        for (const ch of text) {
            if (decimalDigitRe.test(ch))
                return true;
        }
        return false;
    }
    function isNumericRunSegment(text) {
        if (text.length === 0)
            return false;
        for (const ch of text) {
            if (decimalDigitRe.test(ch) || numericJoinerChars.has(ch))
                continue;
            return false;
        }
        return true;
    }
    function mergeNumericRuns(segmentation) {
        const texts = [];
        const isWordLike = [];
        const kinds = [];
        const starts = [];
        for (let i = 0; i < segmentation.len; i++) {
            const text = segmentation.texts[i];
            const kind = segmentation.kinds[i];
            if (kind === "text" && isNumericRunSegment(text) && segmentContainsDecimalDigit(text)) {
                let mergedText = text;
                let j = i + 1;
                while (j < segmentation.len && segmentation.kinds[j] === "text" && isNumericRunSegment(segmentation.texts[j])) {
                    mergedText += segmentation.texts[j];
                    j++;
                }
                texts.push(mergedText);
                isWordLike.push(true);
                kinds.push("text");
                starts.push(segmentation.starts[i]);
                i = j - 1;
                continue;
            }
            texts.push(text);
            isWordLike.push(segmentation.isWordLike[i]);
            kinds.push(kind);
            starts.push(segmentation.starts[i]);
        }
        return {
            len: texts.length,
            texts,
            isWordLike,
            kinds,
            starts
        };
    }
    function mergeAsciiPunctuationChains(segmentation) {
        const texts = [];
        const isWordLike = [];
        const kinds = [];
        const starts = [];
        for (let i = 0; i < segmentation.len; i++) {
            const text = segmentation.texts[i];
            const kind = segmentation.kinds[i];
            const wordLike = segmentation.isWordLike[i];
            if (kind === "text" && wordLike && asciiPunctuationChainSegmentRe.test(text)) {
                let mergedText = text;
                let j = i + 1;
                while (asciiPunctuationChainTrailingJoinersRe.test(mergedText) && j < segmentation.len && segmentation.kinds[j] === "text" && segmentation.isWordLike[j] && asciiPunctuationChainSegmentRe.test(segmentation.texts[j])) {
                    mergedText += segmentation.texts[j];
                    j++;
                }
                texts.push(mergedText);
                isWordLike.push(true);
                kinds.push("text");
                starts.push(segmentation.starts[i]);
                i = j - 1;
                continue;
            }
            texts.push(text);
            isWordLike.push(wordLike);
            kinds.push(kind);
            starts.push(segmentation.starts[i]);
        }
        return {
            len: texts.length,
            texts,
            isWordLike,
            kinds,
            starts
        };
    }
    function splitHyphenatedNumericRuns(segmentation) {
        const texts = [];
        const isWordLike = [];
        const kinds = [];
        const starts = [];
        for (let i = 0; i < segmentation.len; i++) {
            const text = segmentation.texts[i];
            if (segmentation.kinds[i] === "text" && text.includes("-")) {
                const parts = text.split("-");
                let shouldSplit = parts.length > 1;
                for (let j = 0; j < parts.length; j++) {
                    const part = parts[j];
                    if (!shouldSplit)
                        break;
                    if (part.length === 0 || !segmentContainsDecimalDigit(part) || !isNumericRunSegment(part)) {
                        shouldSplit = false;
                    }
                }
                if (shouldSplit) {
                    let offset = 0;
                    for (let j = 0; j < parts.length; j++) {
                        const part = parts[j];
                        const splitText = j < parts.length - 1 ? `${part}-` : part;
                        texts.push(splitText);
                        isWordLike.push(true);
                        kinds.push("text");
                        starts.push(segmentation.starts[i] + offset);
                        offset += splitText.length;
                    }
                    continue;
                }
            }
            texts.push(text);
            isWordLike.push(segmentation.isWordLike[i]);
            kinds.push(segmentation.kinds[i]);
            starts.push(segmentation.starts[i]);
        }
        return {
            len: texts.length,
            texts,
            isWordLike,
            kinds,
            starts
        };
    }
    function mergeGlueConnectedTextRuns(segmentation) {
        const texts = [];
        const isWordLike = [];
        const kinds = [];
        const starts = [];
        let read = 0;
        while (read < segmentation.len) {
            let text = segmentation.texts[read];
            let wordLike = segmentation.isWordLike[read];
            let kind = segmentation.kinds[read];
            let start = segmentation.starts[read];
            if (kind === "glue") {
                let glueText = text;
                const glueStart = start;
                read++;
                while (read < segmentation.len && segmentation.kinds[read] === "glue") {
                    glueText += segmentation.texts[read];
                    read++;
                }
                if (read < segmentation.len && segmentation.kinds[read] === "text") {
                    text = glueText + segmentation.texts[read];
                    wordLike = segmentation.isWordLike[read];
                    kind = "text";
                    start = glueStart;
                    read++;
                } else {
                    texts.push(glueText);
                    isWordLike.push(false);
                    kinds.push("glue");
                    starts.push(glueStart);
                    continue;
                }
            } else {
                read++;
            }
            if (kind === "text") {
                while (read < segmentation.len && segmentation.kinds[read] === "glue") {
                    let glueText = "";
                    while (read < segmentation.len && segmentation.kinds[read] === "glue") {
                        glueText += segmentation.texts[read];
                        read++;
                    }
                    if (read < segmentation.len && segmentation.kinds[read] === "text") {
                        text += glueText + segmentation.texts[read];
                        wordLike = wordLike || segmentation.isWordLike[read];
                        read++;
                        continue;
                    }
                    text += glueText;
                }
            }
            texts.push(text);
            isWordLike.push(wordLike);
            kinds.push(kind);
            starts.push(start);
        }
        return {
            len: texts.length,
            texts,
            isWordLike,
            kinds,
            starts
        };
    }
    function carryTrailingForwardStickyAcrossCJKBoundary(segmentation) {
        const texts = segmentation.texts.slice();
        const isWordLike = segmentation.isWordLike.slice();
        const kinds = segmentation.kinds.slice();
        const starts = segmentation.starts.slice();
        for (let i = 0; i < texts.length - 1; i++) {
            if (kinds[i] !== "text" || kinds[i + 1] !== "text")
                continue;
            if (!isCJK(texts[i]) || !isCJK(texts[i + 1]))
                continue;
            const split = splitTrailingForwardStickyCluster(texts[i]);
            if (split === null)
                continue;
            texts[i] = split.head;
            texts[i + 1] = split.tail + texts[i + 1];
            starts[i + 1] = starts[i] + split.head.length;
        }
        return {
            len: texts.length,
            texts,
            isWordLike,
            kinds,
            starts
        };
    }
    function buildMergedSegmentation(normalized, profile, whiteSpaceProfile) {
        const wordSegmenter = getSharedWordSegmenter();
        let mergedLen = 0;
        const mergedTexts = [];
        const mergedWordLike = [];
        const mergedKinds = [];
        const mergedStarts = [];
        for (const s of wordSegmenter.segment(normalized)) {
            for (const piece of splitSegmentByBreakKind(s.segment, s.isWordLike ?? false, s.index, whiteSpaceProfile)) {
                const isText = piece.kind === "text";
                if (profile.carryCJKAfterClosingQuote && isText && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && isCJK(piece.text) && isCJK(mergedTexts[mergedLen - 1]) && endsWithClosingQuote(mergedTexts[mergedLen - 1])) {
                    mergedTexts[mergedLen - 1] += piece.text;
                    mergedWordLike[mergedLen - 1] = mergedWordLike[mergedLen - 1] || piece.isWordLike;
                } else if (isText && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && isCJKLineStartProhibitedSegment(piece.text) && isCJK(mergedTexts[mergedLen - 1])) {
                    mergedTexts[mergedLen - 1] += piece.text;
                    mergedWordLike[mergedLen - 1] = mergedWordLike[mergedLen - 1] || piece.isWordLike;
                } else if (isText && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && endsWithMyanmarMedialGlue(mergedTexts[mergedLen - 1])) {
                    mergedTexts[mergedLen - 1] += piece.text;
                    mergedWordLike[mergedLen - 1] = mergedWordLike[mergedLen - 1] || piece.isWordLike;
                } else if (isText && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && piece.isWordLike && containsArabicScript(piece.text) && endsWithArabicNoSpacePunctuation(mergedTexts[mergedLen - 1])) {
                    mergedTexts[mergedLen - 1] += piece.text;
                    mergedWordLike[mergedLen - 1] = true;
                } else if (isText && !piece.isWordLike && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && piece.text.length === 1 && piece.text !== "-" && piece.text !== "\u2014" && isRepeatedSingleCharRun(mergedTexts[mergedLen - 1], piece.text)) {
                    mergedTexts[mergedLen - 1] += piece.text;
                } else if (isText && !piece.isWordLike && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && (isLeftStickyPunctuationSegment(piece.text) || piece.text === "-" && mergedWordLike[mergedLen - 1])) {
                    mergedTexts[mergedLen - 1] += piece.text;
                } else {
                    mergedTexts[mergedLen] = piece.text;
                    mergedWordLike[mergedLen] = piece.isWordLike;
                    mergedKinds[mergedLen] = piece.kind;
                    mergedStarts[mergedLen] = piece.start;
                    mergedLen++;
                }
            }
        }
        for (let i = 1; i < mergedLen; i++) {
            if (mergedKinds[i] === "text" && !mergedWordLike[i] && isEscapedQuoteClusterSegment(mergedTexts[i]) && mergedKinds[i - 1] === "text") {
                mergedTexts[i - 1] += mergedTexts[i];
                mergedWordLike[i - 1] = mergedWordLike[i - 1] || mergedWordLike[i];
                mergedTexts[i] = "";
            }
        }
        for (let i = mergedLen - 2; i >= 0; i--) {
            if (mergedKinds[i] === "text" && !mergedWordLike[i] && isForwardStickyClusterSegment(mergedTexts[i])) {
                let j = i + 1;
                while (j < mergedLen && mergedTexts[j] === "")
                    j++;
                if (j < mergedLen && mergedKinds[j] === "text") {
                    mergedTexts[j] = mergedTexts[i] + mergedTexts[j];
                    mergedStarts[j] = mergedStarts[i];
                    mergedTexts[i] = "";
                }
            }
        }
        let compactLen = 0;
        for (let read = 0; read < mergedLen; read++) {
            const text = mergedTexts[read];
            if (text.length === 0)
                continue;
            if (compactLen !== read) {
                mergedTexts[compactLen] = text;
                mergedWordLike[compactLen] = mergedWordLike[read];
                mergedKinds[compactLen] = mergedKinds[read];
                mergedStarts[compactLen] = mergedStarts[read];
            }
            compactLen++;
        }
        mergedTexts.length = compactLen;
        mergedWordLike.length = compactLen;
        mergedKinds.length = compactLen;
        mergedStarts.length = compactLen;
        const compacted = mergeGlueConnectedTextRuns({
            len: compactLen,
            texts: mergedTexts,
            isWordLike: mergedWordLike,
            kinds: mergedKinds,
            starts: mergedStarts
        });
        const withMergedUrls = carryTrailingForwardStickyAcrossCJKBoundary(mergeAsciiPunctuationChains(splitHyphenatedNumericRuns(mergeNumericRuns(mergeUrlQueryRuns(mergeUrlLikeRuns(compacted))))));
        for (let i = 0; i < withMergedUrls.len - 1; i++) {
            const split = splitLeadingSpaceAndMarks(withMergedUrls.texts[i]);
            if (split === null)
                continue;
            if (withMergedUrls.kinds[i] !== "space" && withMergedUrls.kinds[i] !== "preserved-space" || withMergedUrls.kinds[i + 1] !== "text" || !containsArabicScript(withMergedUrls.texts[i + 1])) {
                continue;
            }
            withMergedUrls.texts[i] = split.space;
            withMergedUrls.isWordLike[i] = false;
            withMergedUrls.kinds[i] = withMergedUrls.kinds[i] === "preserved-space" ? "preserved-space" : "space";
            withMergedUrls.texts[i + 1] = split.marks + withMergedUrls.texts[i + 1];
            withMergedUrls.starts[i + 1] = withMergedUrls.starts[i] + split.space.length;
        }
        return withMergedUrls;
    }
    function compileAnalysisChunks(segmentation, whiteSpaceProfile) {
        if (segmentation.len === 0)
            return [];
        if (!whiteSpaceProfile.preserveHardBreaks) {
            return [{
                startSegmentIndex: 0,
                endSegmentIndex: segmentation.len,
                consumedEndSegmentIndex: segmentation.len
            }];
        }
        const chunks = [];
        let startSegmentIndex = 0;
        for (let i = 0; i < segmentation.len; i++) {
            if (segmentation.kinds[i] !== "hard-break")
                continue;
            chunks.push({
                startSegmentIndex,
                endSegmentIndex: i,
                consumedEndSegmentIndex: i + 1
            });
            startSegmentIndex = i + 1;
        }
        if (startSegmentIndex < segmentation.len) {
            chunks.push({
                startSegmentIndex,
                endSegmentIndex: segmentation.len,
                consumedEndSegmentIndex: segmentation.len
            });
        }
        return chunks;
    }
    function analyzeText(text, profile, whiteSpace = "normal") {
        const whiteSpaceProfile = getWhiteSpaceProfile(whiteSpace);
        const normalized = whiteSpaceProfile.mode === "pre-wrap" ? normalizeWhitespacePreWrap(text) : normalizeWhitespaceNormal(text);
        if (normalized.length === 0) {
            return {
                normalized,
                chunks: [],
                len: 0,
                texts: [],
                isWordLike: [],
                kinds: [],
                starts: []
            };
        }
        const segmentation = buildMergedSegmentation(normalized, profile, whiteSpaceProfile);
        return {
            normalized,
            chunks: compileAnalysisChunks(segmentation, whiteSpaceProfile),
            ...segmentation
        };
    }
    var measureContext = null;
    var segmentMetricCaches = /* @__PURE__ */ new Map();
    var cachedEngineProfile = null;
    var emojiPresentationRe = /\p{Emoji_Presentation}/u;
    var maybeEmojiRe = /[\p{Emoji_Presentation}\p{Extended_Pictographic}\p{Regional_Indicator}\uFE0F\u20E3]/u;
    var sharedGraphemeSegmenter = null;
    var emojiCorrectionCache = /* @__PURE__ */ new Map();
    function getMeasureContext() {
        if (measureContext !== null)
            return measureContext;
        if (typeof OffscreenCanvas !== "undefined") {
            measureContext = new OffscreenCanvas(1, 1).getContext("2d");
            return measureContext;
        }
        if (typeof document !== "undefined") {
            measureContext = document.createElement("canvas").getContext("2d");
            return measureContext;
        }
        throw new Error("Text measurement requires OffscreenCanvas or a DOM canvas context.");
    }
    function getSegmentMetricCache(font) {
        let cache = segmentMetricCaches.get(font);
        if (!cache) {
            cache = /* @__PURE__ */ new Map();
            segmentMetricCaches.set(font, cache);
        }
        return cache;
    }
    function getSegmentMetrics(seg, cache) {
        let metrics = cache.get(seg);
        if (metrics === void 0) {
            const ctx = getMeasureContext();
            metrics = {
                width: ctx.measureText(seg).width,
                containsCJK: isCJK(seg)
            };
            cache.set(seg, metrics);
        }
        return metrics;
    }
    function getEngineProfile() {
        if (cachedEngineProfile !== null)
            return cachedEngineProfile;
        if (typeof navigator === "undefined") {
            cachedEngineProfile = {
                lineFitEpsilon: 5e-3,
                carryCJKAfterClosingQuote: false,
                preferPrefixWidthsForBreakableRuns: false,
                preferEarlySoftHyphenBreak: false
            };
            return cachedEngineProfile;
        }
        const ua = navigator.userAgent;
        const vendor = navigator.vendor;
        const isSafari = vendor === "Apple Computer, Inc." && ua.includes("Safari/") && !ua.includes("Chrome/") && !ua.includes("Chromium/") && !ua.includes("CriOS/") && !ua.includes("FxiOS/") && !ua.includes("EdgiOS/");
        const isChromium = ua.includes("Chrome/") || ua.includes("Chromium/") || ua.includes("CriOS/") || ua.includes("Edg/");
        cachedEngineProfile = {
            lineFitEpsilon: isSafari ? 1 / 64 : 5e-3,
            carryCJKAfterClosingQuote: isChromium,
            preferPrefixWidthsForBreakableRuns: isSafari,
            preferEarlySoftHyphenBreak: isSafari
        };
        return cachedEngineProfile;
    }
    function parseFontSize(font) {
        const m = font.match(/(\d+(?:\.\d+)?)\s*px/);
        return m ? parseFloat(m[1]) : 16;
    }
    function getSharedGraphemeSegmenter() {
        if (sharedGraphemeSegmenter === null) {
            sharedGraphemeSegmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
        }
        return sharedGraphemeSegmenter;
    }
    function isEmojiGrapheme(g) {
        return emojiPresentationRe.test(g) || g.includes("\uFE0F");
    }
    function textMayContainEmoji(text) {
        return maybeEmojiRe.test(text);
    }
    function getEmojiCorrection(font, fontSize) {
        let correction = emojiCorrectionCache.get(font);
        if (correction !== void 0)
            return correction;
        const ctx = getMeasureContext();
        ctx.font = font;
        const canvasW = ctx.measureText("\u{1F600}").width;
        correction = 0;
        if (canvasW > fontSize + 0.5 && typeof document !== "undefined" && document.body !== null) {
            const span = document.createElement("span");
            span.style.font = font;
            span.style.display = "inline-block";
            span.style.visibility = "hidden";
            span.style.position = "absolute";
            span.textContent = "\u{1F600}";
            document.body.appendChild(span);
            const domW = span.getBoundingClientRect().width;
            document.body.removeChild(span);
            if (canvasW - domW > 0.5) {
                correction = canvasW - domW;
            }
        }
        emojiCorrectionCache.set(font, correction);
        return correction;
    }
    function countEmojiGraphemes(text) {
        let count = 0;
        const graphemeSegmenter = getSharedGraphemeSegmenter();
        for (const g of graphemeSegmenter.segment(text)) {
            if (isEmojiGrapheme(g.segment))
                count++;
        }
        return count;
    }
    function getEmojiCount(seg, metrics) {
        if (metrics.emojiCount === void 0) {
            metrics.emojiCount = countEmojiGraphemes(seg);
        }
        return metrics.emojiCount;
    }
    function getCorrectedSegmentWidth(seg, metrics, emojiCorrection) {
        if (emojiCorrection === 0)
            return metrics.width;
        return metrics.width - getEmojiCount(seg, metrics) * emojiCorrection;
    }
    function getSegmentGraphemeWidths(seg, metrics, cache, emojiCorrection) {
        if (metrics.graphemeWidths !== void 0)
            return metrics.graphemeWidths;
        const widths = [];
        const graphemeSegmenter = getSharedGraphemeSegmenter();
        for (const gs of graphemeSegmenter.segment(seg)) {
            const graphemeMetrics = getSegmentMetrics(gs.segment, cache);
            widths.push(getCorrectedSegmentWidth(gs.segment, graphemeMetrics, emojiCorrection));
        }
        metrics.graphemeWidths = widths.length > 1 ? widths : null;
        return metrics.graphemeWidths;
    }
    function getSegmentGraphemePrefixWidths(seg, metrics, cache, emojiCorrection) {
        if (metrics.graphemePrefixWidths !== void 0)
            return metrics.graphemePrefixWidths;
        const prefixWidths = [];
        const graphemeSegmenter = getSharedGraphemeSegmenter();
        let prefix = "";
        for (const gs of graphemeSegmenter.segment(seg)) {
            prefix += gs.segment;
            const prefixMetrics = getSegmentMetrics(prefix, cache);
            prefixWidths.push(getCorrectedSegmentWidth(prefix, prefixMetrics, emojiCorrection));
        }
        metrics.graphemePrefixWidths = prefixWidths.length > 1 ? prefixWidths : null;
        return metrics.graphemePrefixWidths;
    }
    function getFontMeasurementState(font, needsEmojiCorrection) {
        const ctx = getMeasureContext();
        ctx.font = font;
        const cache = getSegmentMetricCache(font);
        const fontSize = parseFontSize(font);
        const emojiCorrection = needsEmojiCorrection ? getEmojiCorrection(font, fontSize) : 0;
        return { cache, fontSize, emojiCorrection };
    }
    function canBreakAfter(kind) {
        return kind === "space" || kind === "preserved-space" || kind === "tab" || kind === "zero-width-break" || kind === "soft-hyphen";
    }
    function getTabAdvance(lineWidth, tabStopAdvance) {
        if (tabStopAdvance <= 0)
            return 0;
        const remainder = lineWidth % tabStopAdvance;
        if (Math.abs(remainder) <= 1e-6)
            return tabStopAdvance;
        return tabStopAdvance - remainder;
    }
    function getBreakableAdvance(graphemeWidths2, graphemePrefixWidths, graphemeIndex, preferPrefixWidths) {
        if (!preferPrefixWidths || graphemePrefixWidths === null) {
            return graphemeWidths2[graphemeIndex];
        }
        return graphemePrefixWidths[graphemeIndex] - (graphemeIndex > 0 ? graphemePrefixWidths[graphemeIndex - 1] : 0);
    }
    function fitSoftHyphenBreak(graphemeWidths2, initialWidth, maxWidth, lineFitEpsilon, discretionaryHyphenWidth, cumulativeWidths) {
        let fitCount = 0;
        let fittedWidth = initialWidth;
        while (fitCount < graphemeWidths2.length) {
            const nextWidth = cumulativeWidths ? initialWidth + graphemeWidths2[fitCount] : fittedWidth + graphemeWidths2[fitCount];
            const nextLineWidth = fitCount + 1 < graphemeWidths2.length ? nextWidth + discretionaryHyphenWidth : nextWidth;
            if (nextLineWidth > maxWidth + lineFitEpsilon)
                break;
            fittedWidth = nextWidth;
            fitCount++;
        }
        return { fitCount, fittedWidth };
    }
    function walkPreparedLinesSimple(prepared2, maxWidth, onLine) {
        const { widths, kinds, breakableWidths, breakablePrefixWidths } = prepared2;
        if (widths.length === 0)
            return 0;
        const engineProfile = getEngineProfile();
        const lineFitEpsilon = engineProfile.lineFitEpsilon;
        let lineCount = 0;
        let lineW = 0;
        let hasContent = false;
        let lineStartSegmentIndex = 0;
        let lineStartGraphemeIndex = 0;
        let lineEndSegmentIndex = 0;
        let lineEndGraphemeIndex = 0;
        let pendingBreakSegmentIndex = -1;
        let pendingBreakPaintWidth = 0;
        function clearPendingBreak() {
            pendingBreakSegmentIndex = -1;
            pendingBreakPaintWidth = 0;
        }
        function emitCurrentLine(endSegmentIndex = lineEndSegmentIndex, endGraphemeIndex = lineEndGraphemeIndex, width = lineW) {
            lineCount++;
            onLine?.({
                startSegmentIndex: lineStartSegmentIndex,
                startGraphemeIndex: lineStartGraphemeIndex,
                endSegmentIndex,
                endGraphemeIndex,
                width
            });
            lineW = 0;
            hasContent = false;
            clearPendingBreak();
        }
        function startLineAtSegment(segmentIndex, width) {
            hasContent = true;
            lineStartSegmentIndex = segmentIndex;
            lineStartGraphemeIndex = 0;
            lineEndSegmentIndex = segmentIndex + 1;
            lineEndGraphemeIndex = 0;
            lineW = width;
        }
        function startLineAtGrapheme(segmentIndex, graphemeIndex, width) {
            hasContent = true;
            lineStartSegmentIndex = segmentIndex;
            lineStartGraphemeIndex = graphemeIndex;
            lineEndSegmentIndex = segmentIndex;
            lineEndGraphemeIndex = graphemeIndex + 1;
            lineW = width;
        }
        function appendWholeSegment(segmentIndex, width) {
            if (!hasContent) {
                startLineAtSegment(segmentIndex, width);
                return;
            }
            lineW += width;
            lineEndSegmentIndex = segmentIndex + 1;
            lineEndGraphemeIndex = 0;
        }
        function updatePendingBreak(segmentIndex, segmentWidth) {
            if (!canBreakAfter(kinds[segmentIndex]))
                return;
            pendingBreakSegmentIndex = segmentIndex + 1;
            pendingBreakPaintWidth = lineW - segmentWidth;
        }
        function appendBreakableSegment(segmentIndex) {
            appendBreakableSegmentFrom(segmentIndex, 0);
        }
        function appendBreakableSegmentFrom(segmentIndex, startGraphemeIndex) {
            const gWidths = breakableWidths[segmentIndex];
            const gPrefixWidths = breakablePrefixWidths[segmentIndex] ?? null;
            for (let g = startGraphemeIndex; g < gWidths.length; g++) {
                const gw = getBreakableAdvance(gWidths, gPrefixWidths, g, engineProfile.preferPrefixWidthsForBreakableRuns);
                if (!hasContent) {
                    startLineAtGrapheme(segmentIndex, g, gw);
                    continue;
                }
                if (lineW + gw > maxWidth + lineFitEpsilon) {
                    emitCurrentLine();
                    startLineAtGrapheme(segmentIndex, g, gw);
                } else {
                    lineW += gw;
                    lineEndSegmentIndex = segmentIndex;
                    lineEndGraphemeIndex = g + 1;
                }
            }
            if (hasContent && lineEndSegmentIndex === segmentIndex && lineEndGraphemeIndex === gWidths.length) {
                lineEndSegmentIndex = segmentIndex + 1;
                lineEndGraphemeIndex = 0;
            }
        }
        let i = 0;
        while (i < widths.length) {
            const w = widths[i];
            const kind = kinds[i];
            if (!hasContent) {
                if (w > maxWidth && breakableWidths[i] !== null) {
                    appendBreakableSegment(i);
                } else {
                    startLineAtSegment(i, w);
                }
                updatePendingBreak(i, w);
                i++;
                continue;
            }
            const newW = lineW + w;
            if (newW > maxWidth + lineFitEpsilon) {
                if (canBreakAfter(kind)) {
                    appendWholeSegment(i, w);
                    emitCurrentLine(i + 1, 0, lineW - w);
                    i++;
                    continue;
                }
                if (pendingBreakSegmentIndex >= 0) {
                    emitCurrentLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
                    continue;
                }
                if (w > maxWidth && breakableWidths[i] !== null) {
                    emitCurrentLine();
                    appendBreakableSegment(i);
                    i++;
                    continue;
                }
                emitCurrentLine();
                continue;
            }
            appendWholeSegment(i, w);
            updatePendingBreak(i, w);
            i++;
        }
        if (hasContent)
            emitCurrentLine();
        return lineCount;
    }
    function walkPreparedLines(prepared2, maxWidth, onLine) {
        if (prepared2.simpleLineWalkFastPath) {
            return walkPreparedLinesSimple(prepared2, maxWidth, onLine);
        }
        const { widths, lineEndFitAdvances, lineEndPaintAdvances, kinds, breakableWidths, breakablePrefixWidths, discretionaryHyphenWidth, tabStopAdvance, chunks } = prepared2;
        if (widths.length === 0 || chunks.length === 0)
            return 0;
        const engineProfile = getEngineProfile();
        const lineFitEpsilon = engineProfile.lineFitEpsilon;
        let lineCount = 0;
        let lineW = 0;
        let hasContent = false;
        let lineStartSegmentIndex = 0;
        let lineStartGraphemeIndex = 0;
        let lineEndSegmentIndex = 0;
        let lineEndGraphemeIndex = 0;
        let pendingBreakSegmentIndex = -1;
        let pendingBreakFitWidth = 0;
        let pendingBreakPaintWidth = 0;
        let pendingBreakKind = null;
        function clearPendingBreak() {
            pendingBreakSegmentIndex = -1;
            pendingBreakFitWidth = 0;
            pendingBreakPaintWidth = 0;
            pendingBreakKind = null;
        }
        function emitCurrentLine(endSegmentIndex = lineEndSegmentIndex, endGraphemeIndex = lineEndGraphemeIndex, width = lineW) {
            lineCount++;
            onLine?.({
                startSegmentIndex: lineStartSegmentIndex,
                startGraphemeIndex: lineStartGraphemeIndex,
                endSegmentIndex,
                endGraphemeIndex,
                width
            });
            lineW = 0;
            hasContent = false;
            clearPendingBreak();
        }
        function startLineAtSegment(segmentIndex, width) {
            hasContent = true;
            lineStartSegmentIndex = segmentIndex;
            lineStartGraphemeIndex = 0;
            lineEndSegmentIndex = segmentIndex + 1;
            lineEndGraphemeIndex = 0;
            lineW = width;
        }
        function startLineAtGrapheme(segmentIndex, graphemeIndex, width) {
            hasContent = true;
            lineStartSegmentIndex = segmentIndex;
            lineStartGraphemeIndex = graphemeIndex;
            lineEndSegmentIndex = segmentIndex;
            lineEndGraphemeIndex = graphemeIndex + 1;
            lineW = width;
        }
        function appendWholeSegment(segmentIndex, width) {
            if (!hasContent) {
                startLineAtSegment(segmentIndex, width);
                return;
            }
            lineW += width;
            lineEndSegmentIndex = segmentIndex + 1;
            lineEndGraphemeIndex = 0;
        }
        function updatePendingBreakForWholeSegment(segmentIndex, segmentWidth) {
            if (!canBreakAfter(kinds[segmentIndex]))
                return;
            const fitAdvance = kinds[segmentIndex] === "tab" ? 0 : lineEndFitAdvances[segmentIndex];
            const paintAdvance = kinds[segmentIndex] === "tab" ? segmentWidth : lineEndPaintAdvances[segmentIndex];
            pendingBreakSegmentIndex = segmentIndex + 1;
            pendingBreakFitWidth = lineW - segmentWidth + fitAdvance;
            pendingBreakPaintWidth = lineW - segmentWidth + paintAdvance;
            pendingBreakKind = kinds[segmentIndex];
        }
        function appendBreakableSegment(segmentIndex) {
            appendBreakableSegmentFrom(segmentIndex, 0);
        }
        function appendBreakableSegmentFrom(segmentIndex, startGraphemeIndex) {
            const gWidths = breakableWidths[segmentIndex];
            const gPrefixWidths = breakablePrefixWidths[segmentIndex] ?? null;
            for (let g = startGraphemeIndex; g < gWidths.length; g++) {
                const gw = getBreakableAdvance(gWidths, gPrefixWidths, g, engineProfile.preferPrefixWidthsForBreakableRuns);
                if (!hasContent) {
                    startLineAtGrapheme(segmentIndex, g, gw);
                    continue;
                }
                if (lineW + gw > maxWidth + lineFitEpsilon) {
                    emitCurrentLine();
                    startLineAtGrapheme(segmentIndex, g, gw);
                } else {
                    lineW += gw;
                    lineEndSegmentIndex = segmentIndex;
                    lineEndGraphemeIndex = g + 1;
                }
            }
            if (hasContent && lineEndSegmentIndex === segmentIndex && lineEndGraphemeIndex === gWidths.length) {
                lineEndSegmentIndex = segmentIndex + 1;
                lineEndGraphemeIndex = 0;
            }
        }
        function continueSoftHyphenBreakableSegment(segmentIndex) {
            if (pendingBreakKind !== "soft-hyphen")
                return false;
            const gWidths = breakableWidths[segmentIndex];
            if (gWidths === null)
                return false;
            const fitWidths = engineProfile.preferPrefixWidthsForBreakableRuns ? breakablePrefixWidths[segmentIndex] ?? gWidths : gWidths;
            const usesPrefixWidths = fitWidths !== gWidths;
            const { fitCount, fittedWidth } = fitSoftHyphenBreak(fitWidths, lineW, maxWidth, lineFitEpsilon, discretionaryHyphenWidth, usesPrefixWidths);
            if (fitCount === 0)
                return false;
            lineW = fittedWidth;
            lineEndSegmentIndex = segmentIndex;
            lineEndGraphemeIndex = fitCount;
            clearPendingBreak();
            if (fitCount === gWidths.length) {
                lineEndSegmentIndex = segmentIndex + 1;
                lineEndGraphemeIndex = 0;
                return true;
            }
            emitCurrentLine(segmentIndex, fitCount, fittedWidth + discretionaryHyphenWidth);
            appendBreakableSegmentFrom(segmentIndex, fitCount);
            return true;
        }
        function emitEmptyChunk(chunk) {
            lineCount++;
            onLine?.({
                startSegmentIndex: chunk.startSegmentIndex,
                startGraphemeIndex: 0,
                endSegmentIndex: chunk.consumedEndSegmentIndex,
                endGraphemeIndex: 0,
                width: 0
            });
            clearPendingBreak();
        }
        for (let chunkIndex = 0; chunkIndex < chunks.length; chunkIndex++) {
            const chunk = chunks[chunkIndex];
            if (chunk.startSegmentIndex === chunk.endSegmentIndex) {
                emitEmptyChunk(chunk);
                continue;
            }
            hasContent = false;
            lineW = 0;
            lineStartSegmentIndex = chunk.startSegmentIndex;
            lineStartGraphemeIndex = 0;
            lineEndSegmentIndex = chunk.startSegmentIndex;
            lineEndGraphemeIndex = 0;
            clearPendingBreak();
            let i = chunk.startSegmentIndex;
            while (i < chunk.endSegmentIndex) {
                const kind = kinds[i];
                const w = kind === "tab" ? getTabAdvance(lineW, tabStopAdvance) : widths[i];
                if (kind === "soft-hyphen") {
                    if (hasContent) {
                        lineEndSegmentIndex = i + 1;
                        lineEndGraphemeIndex = 0;
                        pendingBreakSegmentIndex = i + 1;
                        pendingBreakFitWidth = lineW + discretionaryHyphenWidth;
                        pendingBreakPaintWidth = lineW + discretionaryHyphenWidth;
                        pendingBreakKind = kind;
                    }
                    i++;
                    continue;
                }
                if (!hasContent) {
                    if (w > maxWidth && breakableWidths[i] !== null) {
                        appendBreakableSegment(i);
                    } else {
                        startLineAtSegment(i, w);
                    }
                    updatePendingBreakForWholeSegment(i, w);
                    i++;
                    continue;
                }
                const newW = lineW + w;
                if (newW > maxWidth + lineFitEpsilon) {
                    const currentBreakFitWidth = lineW + (kind === "tab" ? 0 : lineEndFitAdvances[i]);
                    const currentBreakPaintWidth = lineW + (kind === "tab" ? w : lineEndPaintAdvances[i]);
                    if (pendingBreakKind === "soft-hyphen" && engineProfile.preferEarlySoftHyphenBreak && pendingBreakFitWidth <= maxWidth + lineFitEpsilon) {
                        emitCurrentLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
                        continue;
                    }
                    if (pendingBreakKind === "soft-hyphen" && continueSoftHyphenBreakableSegment(i)) {
                        i++;
                        continue;
                    }
                    if (canBreakAfter(kind) && currentBreakFitWidth <= maxWidth + lineFitEpsilon) {
                        appendWholeSegment(i, w);
                        emitCurrentLine(i + 1, 0, currentBreakPaintWidth);
                        i++;
                        continue;
                    }
                    if (pendingBreakSegmentIndex >= 0 && pendingBreakFitWidth <= maxWidth + lineFitEpsilon) {
                        emitCurrentLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
                        continue;
                    }
                    if (w > maxWidth && breakableWidths[i] !== null) {
                        emitCurrentLine();
                        appendBreakableSegment(i);
                        i++;
                        continue;
                    }
                    emitCurrentLine();
                    continue;
                }
                appendWholeSegment(i, w);
                updatePendingBreakForWholeSegment(i, w);
                i++;
            }
            if (hasContent) {
                const finalPaintWidth = pendingBreakSegmentIndex === chunk.consumedEndSegmentIndex ? pendingBreakPaintWidth : lineW;
                emitCurrentLine(chunk.consumedEndSegmentIndex, 0, finalPaintWidth);
            }
        }
        return lineCount;
    }
    var sharedGraphemeSegmenter2 = null;
    var sharedLineTextCaches = /* @__PURE__ */ new WeakMap();
    function getSharedGraphemeSegmenter2() {
        if (sharedGraphemeSegmenter2 === null) {
            sharedGraphemeSegmenter2 = new Intl.Segmenter(void 0, { granularity: "grapheme" });
        }
        return sharedGraphemeSegmenter2;
    }
    function createEmptyPrepared(includeSegments) {
        if (includeSegments) {
            return {
                widths: [],
                lineEndFitAdvances: [],
                lineEndPaintAdvances: [],
                kinds: [],
                simpleLineWalkFastPath: true,
                segLevels: null,
                breakableWidths: [],
                breakablePrefixWidths: [],
                discretionaryHyphenWidth: 0,
                tabStopAdvance: 0,
                chunks: [],
                segments: []
            };
        }
        return {
            widths: [],
            lineEndFitAdvances: [],
            lineEndPaintAdvances: [],
            kinds: [],
            simpleLineWalkFastPath: true,
            segLevels: null,
            breakableWidths: [],
            breakablePrefixWidths: [],
            discretionaryHyphenWidth: 0,
            tabStopAdvance: 0,
            chunks: []
        };
    }
    function measureAnalysis(analysis, font, includeSegments) {
        const graphemeSegmenter = getSharedGraphemeSegmenter2();
        const engineProfile = getEngineProfile();
        const { cache, emojiCorrection } = getFontMeasurementState(font, textMayContainEmoji(analysis.normalized));
        const discretionaryHyphenWidth = getCorrectedSegmentWidth("-", getSegmentMetrics("-", cache), emojiCorrection);
        const spaceWidth = getCorrectedSegmentWidth(" ", getSegmentMetrics(" ", cache), emojiCorrection);
        const tabStopAdvance = spaceWidth * 8;
        if (analysis.len === 0)
            return createEmptyPrepared(includeSegments);
        const widths = [];
        const lineEndFitAdvances = [];
        const lineEndPaintAdvances = [];
        const kinds = [];
        let simpleLineWalkFastPath = analysis.chunks.length <= 1;
        const segStarts = includeSegments ? [] : null;
        const breakableWidths = [];
        const breakablePrefixWidths = [];
        const segments = includeSegments ? [] : null;
        const preparedStartByAnalysisIndex = Array.from({ length: analysis.len });
        const preparedEndByAnalysisIndex = Array.from({ length: analysis.len });
        function pushMeasuredSegment(text, width, lineEndFitAdvance, lineEndPaintAdvance, kind, start, breakable, breakablePrefix) {
            if (kind !== "text" && kind !== "space" && kind !== "zero-width-break") {
                simpleLineWalkFastPath = false;
            }
            widths.push(width);
            lineEndFitAdvances.push(lineEndFitAdvance);
            lineEndPaintAdvances.push(lineEndPaintAdvance);
            kinds.push(kind);
            segStarts?.push(start);
            breakableWidths.push(breakable);
            breakablePrefixWidths.push(breakablePrefix);
            if (segments !== null)
                segments.push(text);
        }
        for (let mi = 0; mi < analysis.len; mi++) {
            preparedStartByAnalysisIndex[mi] = widths.length;
            const segText = analysis.texts[mi];
            const segWordLike = analysis.isWordLike[mi];
            const segKind = analysis.kinds[mi];
            const segStart = analysis.starts[mi];
            if (segKind === "soft-hyphen") {
                pushMeasuredSegment(segText, 0, discretionaryHyphenWidth, discretionaryHyphenWidth, segKind, segStart, null, null);
                preparedEndByAnalysisIndex[mi] = widths.length;
                continue;
            }
            if (segKind === "hard-break") {
                pushMeasuredSegment(segText, 0, 0, 0, segKind, segStart, null, null);
                preparedEndByAnalysisIndex[mi] = widths.length;
                continue;
            }
            if (segKind === "tab") {
                pushMeasuredSegment(segText, 0, 0, 0, segKind, segStart, null, null);
                preparedEndByAnalysisIndex[mi] = widths.length;
                continue;
            }
            const segMetrics = getSegmentMetrics(segText, cache);
            if (segKind === "text" && segMetrics.containsCJK) {
                let unitText = "";
                let unitStart = 0;
                for (const gs of graphemeSegmenter.segment(segText)) {
                    const grapheme = gs.segment;
                    if (unitText.length === 0) {
                        unitText = grapheme;
                        unitStart = gs.index;
                        continue;
                    }
                    if (kinsokuEnd.has(unitText) || kinsokuStart.has(grapheme) || leftStickyPunctuation.has(grapheme) || engineProfile.carryCJKAfterClosingQuote && isCJK(grapheme) && endsWithClosingQuote(unitText)) {
                        unitText += grapheme;
                        continue;
                    }
                    const unitMetrics = getSegmentMetrics(unitText, cache);
                    const w2 = getCorrectedSegmentWidth(unitText, unitMetrics, emojiCorrection);
                    pushMeasuredSegment(unitText, w2, w2, w2, "text", segStart + unitStart, null, null);
                    unitText = grapheme;
                    unitStart = gs.index;
                }
                if (unitText.length > 0) {
                    const unitMetrics = getSegmentMetrics(unitText, cache);
                    const w2 = getCorrectedSegmentWidth(unitText, unitMetrics, emojiCorrection);
                    pushMeasuredSegment(unitText, w2, w2, w2, "text", segStart + unitStart, null, null);
                }
                preparedEndByAnalysisIndex[mi] = widths.length;
                continue;
            }
            const w = getCorrectedSegmentWidth(segText, segMetrics, emojiCorrection);
            const lineEndFitAdvance = segKind === "space" || segKind === "preserved-space" || segKind === "zero-width-break" ? 0 : w;
            const lineEndPaintAdvance = segKind === "space" || segKind === "zero-width-break" ? 0 : w;
            if (segWordLike && segText.length > 1) {
                const graphemeWidths2 = getSegmentGraphemeWidths(segText, segMetrics, cache, emojiCorrection);
                const graphemePrefixWidths = engineProfile.preferPrefixWidthsForBreakableRuns ? getSegmentGraphemePrefixWidths(segText, segMetrics, cache, emojiCorrection) : null;
                pushMeasuredSegment(segText, w, lineEndFitAdvance, lineEndPaintAdvance, segKind, segStart, graphemeWidths2, graphemePrefixWidths);
            } else {
                pushMeasuredSegment(segText, w, lineEndFitAdvance, lineEndPaintAdvance, segKind, segStart, null, null);
            }
            preparedEndByAnalysisIndex[mi] = widths.length;
        }
        const chunks = mapAnalysisChunksToPreparedChunks(analysis.chunks, preparedStartByAnalysisIndex, preparedEndByAnalysisIndex);
        const segLevels = segStarts === null ? null : computeSegmentLevels(analysis.normalized, segStarts);
        if (segments !== null) {
            return {
                widths,
                lineEndFitAdvances,
                lineEndPaintAdvances,
                kinds,
                simpleLineWalkFastPath,
                segLevels,
                breakableWidths,
                breakablePrefixWidths,
                discretionaryHyphenWidth,
                tabStopAdvance,
                chunks,
                segments
            };
        }
        return {
            widths,
            lineEndFitAdvances,
            lineEndPaintAdvances,
            kinds,
            simpleLineWalkFastPath,
            segLevels,
            breakableWidths,
            breakablePrefixWidths,
            discretionaryHyphenWidth,
            tabStopAdvance,
            chunks
        };
    }
    function mapAnalysisChunksToPreparedChunks(chunks, preparedStartByAnalysisIndex, preparedEndByAnalysisIndex) {
        const preparedChunks = [];
        for (let i = 0; i < chunks.length; i++) {
            const chunk = chunks[i];
            const startSegmentIndex = chunk.startSegmentIndex < preparedStartByAnalysisIndex.length ? preparedStartByAnalysisIndex[chunk.startSegmentIndex] : preparedEndByAnalysisIndex[preparedEndByAnalysisIndex.length - 1] ?? 0;
            const endSegmentIndex = chunk.endSegmentIndex < preparedStartByAnalysisIndex.length ? preparedStartByAnalysisIndex[chunk.endSegmentIndex] : preparedEndByAnalysisIndex[preparedEndByAnalysisIndex.length - 1] ?? 0;
            const consumedEndSegmentIndex = chunk.consumedEndSegmentIndex < preparedStartByAnalysisIndex.length ? preparedStartByAnalysisIndex[chunk.consumedEndSegmentIndex] : preparedEndByAnalysisIndex[preparedEndByAnalysisIndex.length - 1] ?? 0;
            preparedChunks.push({
                startSegmentIndex,
                endSegmentIndex,
                consumedEndSegmentIndex
            });
        }
        return preparedChunks;
    }
    function prepareInternal(text, font, includeSegments, options) {
        const analysis = analyzeText(text, getEngineProfile(), options?.whiteSpace);
        return measureAnalysis(analysis, font, includeSegments);
    }
    function prepareWithSegments(text, font, options) {
        return prepareInternal(text, font, true, options);
    }
    function getInternalPrepared(prepared2) {
        return prepared2;
    }
    function getSegmentGraphemes(segmentIndex, segments, cache) {
        let graphemes = cache.get(segmentIndex);
        if (graphemes !== void 0)
            return graphemes;
        graphemes = [];
        const graphemeSegmenter = getSharedGraphemeSegmenter2();
        for (const gs of graphemeSegmenter.segment(segments[segmentIndex])) {
            graphemes.push(gs.segment);
        }
        cache.set(segmentIndex, graphemes);
        return graphemes;
    }
    function getLineTextCache(prepared2) {
        let cache = sharedLineTextCaches.get(prepared2);
        if (cache !== void 0)
            return cache;
        cache = /* @__PURE__ */ new Map();
        sharedLineTextCaches.set(prepared2, cache);
        return cache;
    }
    function lineHasDiscretionaryHyphen(kinds, startSegmentIndex, startGraphemeIndex, endSegmentIndex) {
        return endSegmentIndex > 0 && kinds[endSegmentIndex - 1] === "soft-hyphen" && !(startSegmentIndex === endSegmentIndex && startGraphemeIndex > 0);
    }
    function buildLineTextFromRange(segments, kinds, cache, startSegmentIndex, startGraphemeIndex, endSegmentIndex, endGraphemeIndex) {
        let text = "";
        const endsWithDiscretionaryHyphen = lineHasDiscretionaryHyphen(kinds, startSegmentIndex, startGraphemeIndex, endSegmentIndex);
        for (let i = startSegmentIndex; i < endSegmentIndex; i++) {
            if (kinds[i] === "soft-hyphen" || kinds[i] === "hard-break")
                continue;
            if (i === startSegmentIndex && startGraphemeIndex > 0) {
                text += getSegmentGraphemes(i, segments, cache).slice(startGraphemeIndex).join("");
            } else {
                text += segments[i];
            }
        }
        if (endGraphemeIndex > 0) {
            if (endsWithDiscretionaryHyphen)
                text += "-";
            text += getSegmentGraphemes(endSegmentIndex, segments, cache).slice(startSegmentIndex === endSegmentIndex ? startGraphemeIndex : 0, endGraphemeIndex).join("");
        } else if (endsWithDiscretionaryHyphen) {
            text += "-";
        }
        return text;
    }
    function createLayoutLine(prepared2, cache, width, startSegmentIndex, startGraphemeIndex, endSegmentIndex, endGraphemeIndex) {
        return {
            text: buildLineTextFromRange(prepared2.segments, prepared2.kinds, cache, startSegmentIndex, startGraphemeIndex, endSegmentIndex, endGraphemeIndex),
            width,
            start: {
                segmentIndex: startSegmentIndex,
                graphemeIndex: startGraphemeIndex
            },
            end: {
                segmentIndex: endSegmentIndex,
                graphemeIndex: endGraphemeIndex
            }
        };
    }
    function materializeLayoutLine(prepared2, cache, line) {
        return createLayoutLine(prepared2, cache, line.width, line.startSegmentIndex, line.startGraphemeIndex, line.endSegmentIndex, line.endGraphemeIndex);
    }
    function layoutWithLines(prepared2, maxWidth, lineHeight) {
        const lines = [];
        if (prepared2.widths.length === 0)
            return { lineCount: 0, height: 0, lines };
        const graphemeCache = getLineTextCache(prepared2);
        const lineCount = walkPreparedLines(getInternalPrepared(prepared2), maxWidth, (line) => {
            lines.push(materializeLayoutLine(prepared2, graphemeCache, line));
        });
        return { lineCount, height: lineCount * lineHeight, lines };
    }

    // main.ts
    var FULL_TEXT = "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, \u201Cand what is the use of a book,\u201D thought Alice \u201Cwithout pictures or conversations?\u201D So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her. There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, \u201COh dear! Oh dear! I shall be late!\u201D";
    var SHORT_TEXT = "Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, \u201Cand what is the use of a book,\u201D thought Alice \u201Cwithout pictures or conversations?\u201D So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid).";
    var TEXT = window.innerWidth < 600 ? SHORT_TEXT : FULL_TEXT;
    var FONT = "20px Georgia";
    var LINE_HEIGHT = 28;
    var CONSTRAINT_DIST = 1.2;
    var UNLOCK_THRESHOLD = 1;
    var ITERATIONS = 12;
    var DAMPING = 0.97;
    var GRAVITY = 0.15;
    var gravityOn = true;
    var unraveling = false;
    var unravelIdx = -1;
    var container = document.getElementById("container");
    var measureCtx = document.createElement("canvas").getContext("2d");
    measureCtx.font = FONT;
    var prepared = prepareWithSegments(TEXT, FONT);
    var MARGIN = 20;
    var segmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    function getMaxWidth() {
        return container.getBoundingClientRect().width - MARGIN * 2;
    }
    var allGraphemes = [...segmenter.segment(TEXT)].map((s) => s.segment);
    var graphemeWidths = allGraphemes.map((g) => measureCtx.measureText(g).width);
    function layoutPositions(maxWidth) {
        const rawPositions = [];
        let x = 0;
        let lineY = 0;
        for (let gi = 0; gi < allGraphemes.length; gi++) {
            const g = allGraphemes[gi];
            const w = graphemeWidths[gi];
            if (g === " " && x > 0) {
                let wordW = 0;
                for (let j = gi + 1; j < allGraphemes.length && allGraphemes[j] !== " "; j++) {
                    wordW += graphemeWidths[j];
                }
                if (x + w + wordW > maxWidth) {
                    rawPositions.push({ x: x + MARGIN, y: lineY, w });
                    x = 0;
                    lineY += LINE_HEIGHT;
                    continue;
                }
            }
            rawPositions.push({ x: x + MARGIN, y: lineY, w });
            x += w;
        }
        const totalHeight = lineY + LINE_HEIGHT;
        const containerRect = container.getBoundingClientRect();
        const offsetY = Math.max(0, (window.innerHeight - containerRect.top - totalHeight) * 0.3);
        return rawPositions.map((p) => ({ x: p.x, y: p.y + offsetY, w: p.w }));
    }
    var positions = layoutPositions(getMaxWidth());
    function buildZigzagMapping(maxWidth) {
        const { lines } = layoutWithLines(prepared, maxWidth, LINE_HEIGHT);
        const lineIndices = [];
        let gi = 0;
        for (let li = 0; li < lines.length; li++) {
            const lineGraphemes = [...segmenter.segment(lines[li].text)].map((s) => s.segment);
            const indices = [];
            for (let j = 0; j < lineGraphemes.length; j++) {
                indices.push(gi++);
            }
            lineIndices.push(indices);
        }
        const lastLineIdx = lineIndices.length - 1;
        const needFlip = lastLineIdx % 2 === 1;
        const stringOrder2 = [];
        for (let li = 0; li < lineIndices.length; li++) {
            const reversed = needFlip ? li % 2 === 0 : li % 2 === 1;
            if (reversed) {
                stringOrder2.push(...[...lineIndices[li]].reverse());
            } else {
                stringOrder2.push(...lineIndices[li]);
            }
        }
        return stringOrder2;
    }
    var stringOrder = buildZigzagMapping(getMaxWidth());
    var letters = stringOrder.map((ri) => {
        const p = positions[ri];
        return {
            ch: allGraphemes[ri],
            w: p.w,
            x: p.x,
            y: p.y,
            ox: p.x,
            oy: p.y,
            px: p.x,
            py: p.y,
            readingIdx: ri,
            locked: true
        };
    });
    function computeRestLengths() {
        const rests = [];
        for (let i = 0; i < letters.length - 1; i++) {
            const a = letters[i], b = letters[i + 1];
            const dist = Math.hypot(
                b.ox + b.w / 2 - (a.ox + a.w / 2),
                b.oy + LINE_HEIGHT / 2 - (a.oy + LINE_HEIGHT / 2)
            );
            rests.push(dist * CONSTRAINT_DIST);
        }
        return rests;
    }
    var restLengths = computeRestLengths();
    var els = [];
    for (const l of letters) {
        const span = document.createElement("span");
        span.className = "letter";
        span.textContent = l.ch;
        container.appendChild(span);
        els.push(span);
    }
    var lastIdx = letters.length - 1;
    for (let i = lastIdx; i > lastIdx - 6; i--) {
        letters[i].locked = false;
        els[i].classList.add("draggable");
    }
    var hint = document.createElement("img");
    hint.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAABiCAYAAABarl2DAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAACjtJREFUeJztXQuQXuMZTsQ9hBajdRmXQdtB6haXjhIGi5DRlBnXGHVpUaXqUi3NEpKsze7+m5VhEUlIRFdr8I0EcYlbTBiXVCNUG6SsSYIg2dxc1vPmPCd5c/Zcvn/t+vzxPjPPnP8/5/u+837fc97vdr5zTo8eBXDObQz+EhwAHgnuUBTHEBgQqQH8BPwMXAh+AE4Dh4NV4KahbTQkAFHeAr8A28BF4HJwGSlC/ge8DzwL3BfcEewN9gxt+/cSKPhNwPngV+BL4DHglS7C2xRRxFsBLgY/pCe+Ab4IPg5OAOsY79fg9qHztVYDBfwjcCnYTmHEo/rw2BbgQLAJnElx2xhuGT0y/h3/X0zx+4bO21oNFPA79LTPKeCrYL9EmHXBfcCTwYvAq8B6cBI4mUL9H/yYHjogVH6+F0ABv0ZPeYUdEvndKlVdGWn0BH8AHgr270ZzDQIlWjV4Jtus5awOfxvaPkMK2KkQkYbx/8Hgu9wn1d0NYK/QdhoUtKepfbuDr3P/p+A94MYBzTRopInG/duC08El5DPg1oHMNGgkq8fEsd70sni89m9wjxB2GhSyPE0dl57hMBdNccmQYI71EAOjSDQV7nfsUYpw74HHfksmGpLIqx5Twg4C36dwrSZcILhoRl8G1X/yDF9F4ZZTuEO620ZDAij0o8FacKsy4lRRMJl7nCtTXN1po6GLAKGOB+dRuP+Bu4W2yeABCHW6i27XSFU5C9wmtE0GD0CoP6jhwAvgJqFtMngAQg3hdJfMnDwJbhDaJkMBOABvdNFNUPG4h8B1Q9tlKACFG6PmKuUu+Hqh7TJ4AELdrYS714SrAECkdcB/UjRZU3KXVZUVAIi0vovWjohwsgzvxtA2GTzgopXLz7BjInfAfxPaJoMH5KYpJ6RXcNrrgNA2GTzgolXJ8QTzTBvDVQgg1DmcNZE27s7Q9hg8AKF6gX9n+yYdk/ND22TwAITazEUrkZfxzvfPQttk8ACE2lPd+Z5hk8sVAgh1CecopX2bKIPx0DYZPOCiBzeW8M7AuaHtMXjAResp4/ZNnrb5aWibDB6AUAdyuYKM3553tuy8MgChLucQQCaWa0LbY/AEJ5aX0ev6h7bH4AEItROX4a2waa4KAoQ6z0ULZqWaHBHaHoMHeON0CjslUk3+IrRNBg+46P0kc9m+PRfaHoMnINbF7E3KjMlfQ9tj8IB0QsCnWE3KHOVPQttk8IAIpSaVJ4e2x+AJF722KV4UdFJoewwegFB9XPTmoHiJgr0JrxLgoqdOF9Hjrg5tj8EDsjLZRQ9zyBDgTXDL0DYZPCBL7tSCoOtD22PwgJopEW+Tl4l6P2JsCAgItR9XKIu3DQ9tj8EDLnqEarJ5W4WBq5Tjtm1IaHsMHmDb9ii97TXHV/YavuNw0XcDFvOe26mh7TF4AEJtxBVcMksy1dZLVggg1DWcSF5gy8orBBBqGxe9qleEuym0PQZPQKwWVpHyZY7NQ9tj8ACEOpzLyaVDYo8EVwIg1IYueuJGvO2p0PYYPAGxLuVA+yNnz3FXBuQ2Dae0ZLA9KbQ9Bk9ArGZWkfLFDvuSVCUAQv3cRS/ClmryitD2GDzgoofvp/EZgGdD22PwBDskbfS4vULbY/AAhNrBRU+SygyJPd9WKXARpIqU77/Z2+4qARBqMJfayZKE/qHtMXjARV9InMPu/62h7TF4AmKN4xJyG2hXCiDWdlz/f3BoWwwGg8FgMCg0NDQMAqs1S6XSn8HBjY2Nh9XX1+9SXV1dOChNSwfxh2B7EXgi0tm5HLvq6uq2V2kNKjdfON/+4HnIxwjwH+DDSGcCtjCr8eJRo0ZtV26agkQ+r2lvb++ZF76pqWmnRNn2LUgzl4jfrwcz0p5HhFkOjskr+KJ0cPxLpvFDn8JBnKEq/nxcOF5L4hB2a7ClKE/gV+D40aNHl/VOScSZmMhX/7zwOF6TCH9GUZoF5XihLuz/KjWHYns3ti+DS1WEJeApGcalpXMteBd+z1UnfrioYOTqVXFWcDvQo0CrEO8TZe+L2NZjew44ALwU/2/H9vU4DLyurK8Fq3x+we0dWWFbWlp6Ify8RPjTc9JcVXa5nharjB2PpJ1Yqka5OsB/xSfH7w4z5urEHUQR47H/FlVQud8KhTceFXsYOJz23Z8Xp6amZlOEaWXYBWlXdAxeFKeB73RWNGynSu2B34vGjh27YVpYpH00wz4LflbkaVkadIBvBMkows1kYc5KtnN5oglqa2t7s0qSc11VYNM9TKte2oS4ekU7lPlEDI7Xles9zc3N64FlvZJQiSY10QNZQuh80NO/fdEYtp+q5o5My0xe9Ycw7zHM7VlhUIibxVUiRNqb8WYwXubHZHGsjfkYV5SPbwItGi6OX9Gux1LCbc58LJULNphoDD+b4dd4Y46Pp7E6kTBDc9L/PcPMVvsu4L430uJIDzfrYupqaNHEU/F7odQgsGHbRLjzGW4C/4cTDeEeTGtjitIpRcOIlQWLDO6XY8/LTOcydc74qpW4+6fYdGKcdme78r4ore7pTeL/Rv7/S8KmGbT3CP7PFE1d8C9IbzSP0j/ojGh1DD+v6MQyzsP/s+Ucyssye1s41jfu7CTbL+y7j8duTokXDw8WZaUNW3ZNKwS0mWW9HzkpmlTh/D8nDiNpct/78TjOx9N8iPP18WqLNKQTESewUvXV+4vGaWL0BTpOStqjsmzBsROYzuJkbw37b2W8d3PSvinDrnE++VbnWkM07pvNAj2Q54rHZquaAU9P+xi/p+VxZcepE552W/LKSpxYjzVqwemqgMZkzSBI+9DAMRa8osNDgar96HAc8a5g+l9mzd7ILEiiAD7qQtH+GNcCMglQioYq7dLzVTYG7Yg8wfBrvEwsz2Nx7JgSe3dg6tt1sP8k5QEjGtIHlrN47qk6rurFybEdPfMxhXHG+4RX8TqIJlU5q/+FaMOOpx1PJ8ogWJdfpojiGZL6ctLBscFxeyW9vZTjU5RohVNQuIpXfegc6e2uRLvEM9+dEk1dnBMT++/n+VtZG5yVON+njNdhRqRbRUOY5rjQUFB7ZmQmb5z2EsM4vV+6y0qQW9K8THnb2wz3tzg+B/6vMB8LkN5GHvnuMk8TaG8vcWyWyHvXeZpvR0SquLgHKB2GzpwYx49THrFqKkzGfNw3L6+josOKeLp9xP6DVKE1Fd2ZkOq9M21alqexTZ7K9vK6ZLwu9bQ00aQwRo4cuaV0XaVbjGMPqQKZL/N8nT1xafU4bLLaF3tPY5G9Mg6LbZEhRSIvd6qL4k1sq9LEk2q+gZPGXdER8UG3tGkelLasCQn/OC8dD9EGqjQPgAiH6v+eBTCd51rjq4ZSLWLfMDUmFLbJBSJXP34PF08ocaAuwiWFL0J3iubJ8Vnjq6XY/1Yp6imOB6+Wq9MnM54dmlmxdzP9lUOFMgrgwqy2QyDtbSm66dmakrf52P+4jPuKbmDm5TOoaGs7xPtk1h/ct9wbnt9VfA2ZaFoKkXJCdQAAAABJRU5ErkJggg==';
    hint.style.cssText = "position:absolute;top:0;left:0;width:60px;pointer-events:none;opacity:0;transition:opacity 0.8s;";
    container.appendChild(hint);
    function positionHint() {
        const last = letters[lastIdx];
        hint.style.transform = `translate(${last.ox - 30}px, ${last.oy + LINE_HEIGHT + 2}px)`;
    }
    positionHint();
    setTimeout(() => {
        hint.style.opacity = "1";
    }, 500);
    window.addEventListener("keydown", (e) => {
        if (e.key === "f" || e.key === "F") {
            gravityOn = !gravityOn;
            if (gravityOn && !unraveling) {
                unraveling = true;
                hint.style.opacity = "0";
                unravelIdx = letters.length - 1;
                while (unravelIdx >= 0 && !letters[unravelIdx].locked) unravelIdx--;
            }
        }
    });
    window.addEventListener("resize", () => {
        const newPositions = layoutPositions(getMaxWidth());
        for (let i = 0; i < letters.length; i++) {
            const np = newPositions[letters[i].readingIdx];
            if (letters[i].locked) {
                letters[i].x = np.x;
                letters[i].y = np.y;
                letters[i].ox = np.x;
                letters[i].oy = np.y;
                letters[i].px = np.x;
                letters[i].py = np.y;
            } else {
                letters[i].ox = np.x;
                letters[i].oy = np.y;
            }
        }
        positionHint();
    });
    var drags = /* @__PURE__ */ new Map();
    function isDragged(idx) {
        for (const d of drags.values()) if (d.idx === idx) return true;
        return false;
    }
    container.addEventListener("pointerdown", (e) => {
        const idx = els.indexOf(e.target);
        if (idx === -1 || letters[idx].locked) return;
        if (isDragged(idx)) return;
        const rect = container.getBoundingClientRect();
        drags.set(e.pointerId, {
            idx,
            offsetX: e.clientX - rect.left - letters[idx].x,
            offsetY: e.clientY - rect.top - letters[idx].y
        });
        els[idx].classList.add("dragging");
        e.target.setPointerCapture(e.pointerId);
        e.preventDefault();
    });
    window.addEventListener("pointermove", (e) => {
        const d = drags.get(e.pointerId);
        if (!d) return;
        const rect = container.getBoundingClientRect();
        const l = letters[d.idx];
        l.x = e.clientX - rect.left - d.offsetX;
        l.y = e.clientY - rect.top - d.offsetY;
        l.px = l.x;
        l.py = l.y;
        l.locked = false;
    });
    window.addEventListener("pointerup", (e) => {
        const d = drags.get(e.pointerId);
        if (!d) return;
        els[d.idx].classList.remove("dragging");
        drags.delete(e.pointerId);
    });
    window.addEventListener("pointercancel", (e) => {
        const d = drags.get(e.pointerId);
        if (!d) return;
        els[d.idx].classList.remove("dragging");
        drags.delete(e.pointerId);
    });
    function simulate() {
        if (unraveling) {
            if (!gravityOn || unravelIdx < 0) {
                unraveling = false;
            } else if (letters[unravelIdx].locked) {
                letters[unravelIdx].locked = false;
                letters[unravelIdx].px = letters[unravelIdx].x;
                letters[unravelIdx].py = letters[unravelIdx].y - 0.5;
                unravelIdx--;
            } else {
                unravelIdx--;
            }
        }
        for (let i = letters.length - 2; i >= 0; i--) {
            if (letters[i].locked && !letters[i + 1].locked) {
                const a = letters[i], b = letters[i + 1];
                const dx = b.x + b.w / 2 - (a.ox + a.w / 2);
                const dy = b.y + LINE_HEIGHT / 2 - (a.oy + LINE_HEIGHT / 2);
                if (Math.hypot(dx, dy) > restLengths[i] + UNLOCK_THRESHOLD) {
                    a.locked = false;
                    a.px = a.x;
                    a.py = a.y;
                    hint.style.opacity = "0";
                }
            }
        }
        for (let i = 0; i < letters.length; i++) {
            const l = letters[i];
            if (l.locked || isDragged(i)) continue;
            const vx = (l.x - l.px) * DAMPING;
            const vy = (l.y - l.py) * DAMPING;
            l.px = l.x;
            l.py = l.y;
            l.x += vx;
            l.y += vy + (gravityOn ? GRAVITY : 0);
        }
        for (let iter = 0; iter < ITERATIONS; iter++) {
            for (let i = 0; i < letters.length - 1; i++) {
                const a = letters[i], b = letters[i + 1];
                if (a.locked && b.locked) continue;
                const ax = a.x + a.w / 2, ay = a.y + LINE_HEIGHT / 2;
                const bx = b.x + b.w / 2, by = b.y + LINE_HEIGHT / 2;
                const dx = bx - ax, dy = by - ay;
                const dist = Math.hypot(dx, dy) || 1e-3;
                const diff = (dist - restLengths[i]) / dist;
                const aFixed = a.locked || isDragged(i);
                const bFixed = b.locked || isDragged(i + 1);
                if (aFixed && !bFixed) {
                    b.x -= dx * diff;
                    b.y -= dy * diff;
                } else if (!aFixed && bFixed) {
                    a.x += dx * diff;
                    a.y += dy * diff;
                } else if (!aFixed && !bFixed) {
                    a.x += dx * diff * 0.5;
                    a.y += dy * diff * 0.5;
                    b.x -= dx * diff * 0.5;
                    b.y -= dy * diff * 0.5;
                }
            }
        }
        const RADIUS = 7;
        for (let i = 0; i < letters.length; i++) {
            if (letters[i].locked) continue;
            const a = letters[i];
            const acx = a.x + a.w / 2, acy = a.y + LINE_HEIGHT / 2;
            for (let j = i + 1; j < letters.length; j++) {
                if (letters[j].locked) continue;
                if (Math.abs(i - j) === 1) continue;
                const b = letters[j];
                const bcx = b.x + b.w / 2, bcy = b.y + LINE_HEIGHT / 2;
                const dx = bcx - acx, dy = bcy - acy;
                const dist = Math.hypot(dx, dy) || 1e-3;
                if (dist < RADIUS * 2) {
                    const overlap = (RADIUS * 2 - dist) / dist * 0.5;
                    if (isDragged(i)) {
                        b.x += dx * overlap;
                        b.y += dy * overlap;
                    } else if (isDragged(j)) {
                        a.x -= dx * overlap;
                        a.y -= dy * overlap;
                    } else {
                        a.x -= dx * overlap;
                        a.y -= dy * overlap;
                        b.x += dx * overlap;
                        b.y += dy * overlap;
                    }
                }
            }
        }
        const cRect = container.getBoundingClientRect();
        const minX = -cRect.left;
        const minY = -cRect.top;
        const maxX = window.innerWidth - cRect.left;
        const maxY = window.innerHeight - cRect.top;
        const bounce = 0.4;
        for (let i = 0; i < letters.length; i++) {
            const l = letters[i];
            if (l.locked || isDragged(i)) continue;
            if (l.x < minX) {
                l.x = minX;
                l.px = l.x + (l.x - l.px) * bounce;
            }
            if (l.x + l.w > maxX) {
                l.x = maxX - l.w;
                l.px = l.x + (l.x - l.px) * bounce;
            }
            if (l.y < minY) {
                l.y = minY;
                l.py = l.y + (l.y - l.py) * bounce;
            }
            if (l.y + LINE_HEIGHT > maxY) {
                l.y = maxY - LINE_HEIGHT;
                l.py = l.y + (l.y - l.py) * bounce;
            }
        }
    }
    var FIXED_DT = 1 / 120;
    var MAX_STEPS = 4;
    var accumulator = 0;
    var lastTime = -1;
    function render(now) {
        if (lastTime < 0) {
            lastTime = now;
            requestAnimationFrame(render);
            return;
        }
        const dt = Math.min((now - lastTime) / 1e3, MAX_STEPS * FIXED_DT);
        lastTime = now;
        accumulator += dt;
        while (accumulator >= FIXED_DT) {
            simulate();
            accumulator -= FIXED_DT;
        }
        for (let i = 0; i < letters.length; i++) {
            if (!letters[i].locked) els[i].classList.add("draggable");
            els[i].style.transform = `translate(${letters[i].x}px, ${letters[i].y}px)`;
        }
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
})();

