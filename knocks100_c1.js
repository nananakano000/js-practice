// 第1章: 準備運動
// 00. 文字列の逆順
// 文字列"stressed"の文字を逆に（末尾から先頭に向かって）並べた文字列を得よ．
{
    const str = 'stressed';
    const result = str.split('').reverse().join('');
    console.log('00.', result);
}

// 01. 「パタトクカシーー」
// 「パタトクカシーー」という文字列の1,3,5,7文字目を取り出して連結した文字列を得よ．
{
    const str = 'パタトクカシーー';
    console.log(
        '01.',
        str.split('').reduce((a, c, i) => {
            return i % 2 === 0 ? a + c : a;
        })
    );
}

// 02. 「パトカー」＋「タクシー」＝「パタトクカシーー」
// 「パトカー」＋「タクシー」の文字を先頭から交互に連結して文字列「パタトクカシーー」を得よ．
{
    const str1 = 'パトカー';
    const str2 = 'タクシー';
    console.log(
        '02.',
        str1.split('').reduce((a, c, i) => {
            return (a += c + str2.split('')[i]);
        }, '')
    );
}

// 03. 円周率
// "Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics."という文を単語に分解し，各単語の（アルファベットの）文字数を先頭から出現順に並べたリストを作成せよ．
{
    const str =
        'Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.';
    console.log(
        '03.',
        str.split(' ').reduce((a, c, i) => {
            a[i] = c.replace(',', '').replace('.', '').length;
            return a;
        }, [])
    );
}

// 04. 元素記号
// "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can."という文を単語に分解し，1, 5, 6, 7, 8, 9, 15, 16, 19番目の単語は先頭の1文字，それ以外の単語は先頭に2文字を取り出し，取り出した文字列から単語の位置（先頭から何番目の単語か）への連想配列（辞書型もしくはマップ型）を作成せよ．
{
    const str =
        'Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.';
    let nums = [1, 5, 6, 7, 8, 9, 15, 16, 19];
    let strFlt = str.split(' ').reduce((a, c, i) => {
        nums.findIndex((num) => num === i + 1) !== -1
            ? a.push(c.split('')[0])
            : a.push(c.split('')[0] + c.split('')[1]);
        return a;
    }, []);
    const result = strFlt.reduce((a, c, i) => {
        a[i] = c;
        return a;
    }, {});
    console.log('04.', result);
}

// 05. n-gram
// 与えられたシーケンス（文字列やリストなど）からn-gramを作る関数を作成せよ．この関数を用い，"I am an NLPer"という文から単語bi-gram，文字bi-gramを得よ．
{
}

// 06. 集合
// "paraparaparadise"と"paragraph"に含まれる文字bi-gramの集合を，それぞれ, XとYとして求め，XとYの和集合，積集合，差集合を求めよ．さらに，'se'というbi-gramがXおよびYに含まれるかどうかを調べよ．
{
}

// 07. テンプレートによる文生成
// 引数x, y, zを受け取り「x時のyはz」という文字列を返す関数を実装せよ．さらに，x=12, y="気温", z=22.4として，実行結果を確認せよ．
{
    const x = 12;
    const y = '気温';
    const z = 22.4;
    console.log('07.', `${x}時の${y}は${z}`);
}

// 08. 暗号文
// 与えられた文字列の各文字を，以下の仕様で変換する関数cipherを実装せよ．
// 英小文字ならば(219 - 文字コード)の文字に置換
// その他の文字はそのまま出力
// この関数を用い，英語のメッセージを暗号化・復号化せよ．
{
    // const word = "abcdeアイウエオ";
    const word =
        "I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind .";
    const cipher = ([...word]) => {
        const convRes = word.map((aCh) => {
            // 97番から122番までがアルファベットの小文字に割り当てられている。
            return 97 <= aCh.charCodeAt(0) && aCh.charCodeAt(0) <= 122
                ? 219 - aCh.charCodeAt(0)
                : aCh;
        });
        return convRes.join('');
    };
    console.log(cipher(word));
}

// 09. Typoglycemia
// スペースで区切られた単語列に対して，各単語の先頭と末尾の文字は残し，それ以外の文字の順序をランダムに並び替えるプログラムを作成せよ．ただし，長さが４以下の単語は並び替えないこととする．適当な英語の文（例えば"I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind ."）を与え，その実行結果を確認せよ．
{
    const word =
        "I couldn't believe that I could actually understand what I was reading : the phenomenal power of the human mind .";
    const result = word
        .split(' ')
        .map((ele) => {
            const eleArr = [...ele];
            if (eleArr.length < 5) return ele;

            const shuffle = (arr) => {
                let m = arr.length;
                while (m) {
                    const i = Math.floor(Math.random() * m--);
                    [arr[m], arr[i]] = [arr[i], arr[m]];
                }
                return arr;
            };

            const r = [];
            r.push(eleArr[0]);
            r.push(shuffle(eleArr.slice(1, eleArr.length - 1)).join(''));
            r.push(eleArr[eleArr.length - 1]);
            return r.join('');
        })
        .join(' ');

    console.log('09.', result);
}
