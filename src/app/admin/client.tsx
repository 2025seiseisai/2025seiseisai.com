"use client";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Dialog,
    DialogTitle,
    Fab,
    Toolbar,
    AppBar,
    createTheme,
    Typography,
    Button,
    Card,
    CardContent,
    TextField,
    Box,
    Tab,
    Slider,
    ThemeProvider,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    IconButton,
    DialogActions,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloudSyncIcon from "@mui/icons-material/CloudSync";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useEffect, useState, useCallback } from "react";
import styles from "./page.module.css";
import { signInAction, signOutAction } from "@/actions/auth";
import { GetGoodsData, GetNewsData, SetGoodsData, SetNewsData, InitTicketsData, GenerateTicketsPDF } from "@/actions/db";
import { CurrentYear, GoodsInfo } from "@/settings/settings";

const theme = createTheme({
    typography: {
        fontFamily: '"Noto Sans JP", "Roboto", "Helvetica", "Arial", sans-serif',
    },
});

export function AuthInfo({ role }: { role: string }) {
    return (
        <>
            <AccountCircleIcon className={styles.UserIcon} />
            <Typography className={styles.UserName}>{role}</Typography>
            <Button className={styles.SignOutButton} variant="outlined" color="inherit" size="small" onClick={signOutAction}>
                サインアウト
            </Button>
        </>
    );
}

export function SignInGuide() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    return (
        <ThemeProvider theme={theme}>
            <Card className={styles.SignInGuideBox}>
                <CardContent>
                    <Box display="flex" flexDirection="column">
                        <Typography className={styles.SignInGuideTitle}>サインイン</Typography>
                        <TextField className={styles.SignInForm} value={username} label="管理者名" variant="standard" onChange={(e) => setusername(e.target.value)} />
                        <TextField className={styles.SignInForm} value={password} label="パスワード" type="password" variant="standard" onChange={(e) => setpassword(e.target.value)} />
                        <Button className={styles.SignInButton} variant="contained" onClick={async () => await signInAction(username, password)}>
                            OK
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}

export function Header({ role }: { role: string | null | undefined }) {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={styles.TitleText}>菁ヶ祭Webサイト管理ツール</Typography>
                    {role !== null && role !== undefined && <AuthInfo role={role} />}
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export function Content({ role }: { role: string }) {
    const [pagevalue, setpagevalue] = useState("1");
    const [nextpage, setNextpage] = useState("1");
    let newsunsaved = false;
    useEffect(() => {
        window.addEventListener("beforeunload", (event) => {
            if (newsunsaved) event.preventDefault();
        });
    });
    const [dialogopen, setDialogopen] = useState(false);
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        if (pagevalue == "1" && newsunsaved) {
            setDialogopen(true);
            setNextpage(newValue);
        } else {
            setpagevalue(newValue);
        }
    };
    return (
        <ThemeProvider theme={theme}>
            <Dialog open={dialogopen} onClose={() => setDialogopen(false)}>
                <DialogTitle>保存されていない変更があります。破棄しますか？</DialogTitle>
                <DialogActions>
                    <Button
                        onClick={() => {
                            setDialogopen(false);
                            setpagevalue(nextpage);
                        }}
                    >
                        OK
                    </Button>
                    <Button onClick={() => setDialogopen(false)}>キャンセル</Button>
                </DialogActions>
            </Dialog>
            <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={pagevalue}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <TabList onChange={handleChange}>
                            {role == "Admin" && <Tab label="整理券" value="1" />}
                            {role == "Admin" && <Tab label="ニュース" value="2" />}
                            {role == "Admin" && <Tab label="グッズ" value="3" />}
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <TicketsEditor />
                    </TabPanel>
                    <TabPanel value="2">
                        <NewsEditor setNewsunsaved={(f: boolean) => (newsunsaved = f)} />
                    </TabPanel>
                    <TabPanel value="3">
                        <GoodsEditor />
                    </TabPanel>
                </TabContext>
            </Box>
        </ThemeProvider>
    );
}

function NewsContent({ info, deleter, setInfo }: { info: string[]; deleter: any; setInfo: any }) {
    const [title, id, date, tag, content] = info;
    const [year, month, day] = date.split("/");
    const [dialogopen, setDialogopen] = useState(false);
    const stopPropagation = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        event.stopPropagation();
    };
    const clickDeleteButton = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        event.stopPropagation();
        setDialogopen(true);
    };
    return (
        <Accordion className={styles.NewsAccordion}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <TextField className={styles.NewsTitle} placeholder="タイトル" variant="standard" fullWidth={true} defaultValue={title} onClick={stopPropagation} onChange={(e) => setInfo(e.target.value, 0, id)} />
                <IconButton className={styles.NewsDeleteButton} onClick={clickDeleteButton}>
                    <DeleteIcon />
                </IconButton>
                <Dialog open={dialogopen} onClick={stopPropagation} onClose={() => setDialogopen(false)}>
                    <DialogTitle>本当に削除しますか？</DialogTitle>
                    <DialogActions>
                        <Button
                            onClick={() => {
                                setDialogopen(false);
                                deleter();
                            }}
                        >
                            OK
                        </Button>
                        <Button onClick={() => setDialogopen(false)}>キャンセル</Button>
                    </DialogActions>
                </Dialog>
            </AccordionSummary>
            <AccordionDetails>
                <Box display="flex">
                    <TextField className={styles.NewsDate} label="年" type="number" defaultValue={year} onChange={(e) => setInfo(`${e.target.value}/${month}/${day}`, 2, id)} />
                    <TextField className={styles.NewsDate} label="月" type="number" defaultValue={month} onChange={(e) => setInfo(`${year}/${e.target.value}/${day}`, 2, id)} />
                    <TextField className={styles.NewsDate} label="日" type="number" defaultValue={day} onChange={(e) => setInfo(`${year}/${month}/${e.target.value}`, 2, id)} />
                </Box>
                <TextField className={styles.NewsTextField} label="タグ" defaultValue={tag} onChange={(e) => setInfo(e.target.value, 3, id)} />
                <TextField multiline className={styles.NewsTextField} label="内容(マークダウン)" rows={10} defaultValue={content} onChange={(e) => setInfo(e.target.value, 4, id)} />
            </AccordionDetails>
        </Accordion>
    );
}

function NewsEditor({ setNewsunsaved }: { setNewsunsaved: any }) {
    const [news, setNews] = useState<string[][]>([]);
    const [prevdata, setPrevdata] = useState<string[][]>([]);
    const [initialized, setInitialized] = useState(false);
    const [saving, setSaving] = useState(false);
    useEffect(() => {
        const init = async () => {
            const newsdata = await GetNewsData();
            let splitted: string[][] = [];
            for (let i = 0; i < newsdata.length; i += 5) splitted.push(newsdata.slice(i, i + 5));
            setNews(splitted);
            setPrevdata(splitted);
            setInitialized(true);
        };
        if (!initialized) {
            init();
        }
    });
    const getRandomID = () => {
        let S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let N = 16;
        return Array.from(crypto.getRandomValues(new Uint8Array(N)))
            .map((n) => S[n % S.length])
            .join("");
    };
    const unsaved = JSON.stringify(news) != JSON.stringify(prevdata);
    setNewsunsaved(unsaved);
    const saveData = () => {
        const save = async () => {
            setSaving(true);
            const newsdata = await GetNewsData();
            let splitted: string[][] = [];
            for (let i = 0; i < newsdata.length; i += 5) splitted.push(newsdata.slice(i, i + 5));
            const ids = splitted.map((value) => value[1]);
            const previds = prevdata.map((value) => value[1]);
            const curids = news.map((value) => value[1]);
            const updated: string[][] = [];
            news.forEach((value) => {
                const id = value[1];
                if (!previds.includes(id) || !ids.includes(id)) {
                    updated.push(value);
                    return;
                }
                const fetched = splitted[ids.indexOf(id)];
                const prev = prevdata[previds.indexOf(id)];
                for (let i = 0; i != 5; ++i) {
                    if (value[i] == prev[i]) {
                        value[i] = fetched[i];
                    }
                }
                updated.push(value);
            });
            splitted.forEach((value) => {
                if (!curids.includes(value[1]) && !previds.includes(value[1])) {
                    updated.push(value);
                }
            });
            SetNewsData(updated.flat());
            setNews(updated);
            setPrevdata(updated);
            setSaving(false);
            setNewsunsaved(false);
        };
        save();
    };
    const setInfo = (info: string, idx: number, id: string) => {
        const copy = JSON.parse(JSON.stringify(news));
        copy[news.map((value) => value[1]).indexOf(id)][idx] = info;
        setNews(copy);
    };
    return (
        <>
            <Button className={styles.NewsSaveButton} disabled={!initialized || !unsaved || saving} variant="outlined" startIcon={<SaveIcon />} onClick={saveData}>
                {saving ? "保存中…" : !initialized || !unsaved ? "保存済み" : "保存する"}
            </Button>
            {news.map((value) => {
                return <NewsContent info={value} deleter={() => setNews(news.filter((data) => value[1] != data[1]))} setInfo={setInfo} key={value[1]} />;
            })}
            <Fab style={{ position: "fixed", bottom: "40px", right: "40px" }} color="primary" onClick={() => setNews([...news, ["", getRandomID(), `${CurrentYear}/1/1`, "お知らせ", ""]])}>
                <AddIcon />
            </Fab>
        </>
    );
}

function GoodsEditor() {
    const slidervalue = Array(GoodsInfo.length)
        .fill(0)
        .map(() => useState(100));
    const [initialized, setInitialized] = useState(false);
    useEffect(() => {
        if (!initialized) {
            setInitialized(true);
            const initdata = async () => {
                const data = await GetGoodsData(1);
                data.forEach((value, index) => slidervalue[index][1](value));
            };
            initdata();
        }
    });
    const [currentday, setCurrentday] = useState("Day1");
    const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newval = (event.target as HTMLInputElement).value;
        setCurrentday(newval);
        const initdata = async () => {
            const data = await GetGoodsData(newval == "Day1" ? 1 : 2);
            data.forEach((value, index) => slidervalue[index][1](value));
        };
        initdata();
    };
    let timeout: any;
    const postValue = useCallback((index: number, value: number, day: 1 | 2) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            SetGoodsData(index, value, day);
        }, 500);
    }, []);
    return (
        <>
            <Box className={styles.GoodsHeader}>
                <FormControl>
                    <RadioGroup row value={currentday} onChange={handleDayChange}>
                        <FormControlLabel
                            className={styles.GoodsDaySelector}
                            value="Day1"
                            control={
                                <Radio
                                    sx={{
                                        "& .MuiSvgIcon-root": {
                                            fontSize: 25,
                                        },
                                    }}
                                />
                            }
                            label="Day1"
                        />
                        <FormControlLabel
                            className={styles.GoodsDaySelector}
                            value="Day2"
                            control={
                                <Radio
                                    sx={{
                                        "& .MuiSvgIcon-root": {
                                            fontSize: 25,
                                        },
                                    }}
                                />
                            }
                            label="Day2"
                        />
                    </RadioGroup>
                </FormControl>
                <Button
                    className={styles.GoodsSyncButton}
                    variant="outlined"
                    size="large"
                    startIcon={<CloudSyncIcon />}
                    onClick={() => {
                        const syncdata = async () => {
                            const data = await GetGoodsData(currentday == "Day1" ? 1 : 2);
                            data.forEach((value, index) => slidervalue[index][1](value));
                        };
                        syncdata();
                    }}
                >
                    同期
                </Button>
            </Box>
            {GoodsInfo.map((info, index) => {
                const handleChange = (event: Event, newValue: number | number[]) => {
                    const newval = newValue as number;
                    slidervalue[index][1](newval);
                    if (!initialized) return;
                    postValue(index, newval, currentday == "Day1" ? 1 : 2);
                };
                const marks = [
                    { value: 0, label: "0%" },
                    { value: 50, label: "50%" },
                    { value: 100, label: "100%" },
                ];
                return (
                    <Box margin="25px 10px 0 0" display="flex" key={info.name}>
                        <Typography className={styles.GoodsName}>{info.name}</Typography>
                        <Slider className={styles.GoodsSlider} value={slidervalue[index][0]} step={10} valueLabelDisplay="auto" marks={marks} onChange={handleChange} />
                    </Box>
                );
            })}
        </>
    );
}

function TicketsEditor() {
    const [dangerouszoneconfirm, setDangerouszoneconfirm] = useState("");
    return (
        <>
            <Card>
                <CardContent>
                    <Typography sx={{ fontSize: "20px" }}>さわるな危険！！！</Typography>
                    <TextField sx={{ marginTop: "20px" }} fullWidth={true} placeholder="998244353" value={dangerouszoneconfirm} onChange={(e) => setDangerouszoneconfirm(e.target.value)} />
                    <Button sx={{ margin: "20px 0 0 20px" }} disabled={dangerouszoneconfirm != "998244353"} variant="contained" color="error" onClick={() => InitTicketsData()}>
                        整理券情報をすべて初期化
                    </Button>
                    <Button sx={{ margin: "20px 0 0 20px" }} disabled={dangerouszoneconfirm != "998244353"} variant="contained" color="error" onClick={() => GenerateTicketsPDF()}>
                        整理券のPDFをサーバーに生成
                    </Button>
                </CardContent>
            </Card>
        </>
    );
}
