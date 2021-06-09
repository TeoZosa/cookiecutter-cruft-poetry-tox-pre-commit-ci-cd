window.BENCHMARK_DATA = {
  "lastUpdate": 1623211107113,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "8690e232d2eeeb9bfb76e5242c6295005bcbf9a7",
          "message": "Merge pull request #205 from TeoZosa/make-separate-dependabot-trunk-push-check-workflow\n\n👷 Make Separate Dependabot Trunk Push Check Workflow",
          "timestamp": "2021-06-08T19:06:46Z",
          "tree_id": "5af6e99febf53321b1a9e43d656d48bdfbfbcf95"
        },
        "date": 1623179467923,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15119.560774549956,
            "unit": "iter/sec",
            "range": "stddev: 0.000010586203512097799",
            "extra": "mean: 66.13948744352766 usec\nrounds: 7088"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4548933.409468841,
            "unit": "iter/sec",
            "range": "stddev: 6.130360526518398e-8",
            "extra": "mean: 219.83175175051883 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12253.295493199992,
            "unit": "iter/sec",
            "range": "stddev: 0.00006444574374586756",
            "extra": "mean: 81.61069816319646 usec\nrounds: 9747"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 146492.97737281033,
            "unit": "iter/sec",
            "range": "stddev: 0.000003749711069821738",
            "extra": "mean: 6.8262657905784625 usec\nrounds: 3879"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14815.22374733469,
            "unit": "iter/sec",
            "range": "stddev: 0.00000976611569444213",
            "extra": "mean: 67.49813685263467 usec\nrounds: 4092"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5060519.791198375,
            "unit": "iter/sec",
            "range": "stddev: 3.424186086275462e-8",
            "extra": "mean: 197.60815909448144 nsec\nrounds: 54055"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "faafc60d62dff61a6da2efd0426003aee3764cf4",
          "message": ":green_heart: Fix `yamllint` `(line-length)` errors\n\n```\n.github/workflows/release.yml\n  7:81      error    line too long (81 > 80 characters)  (line-length)\n````",
          "timestamp": "2021-06-08T22:26:38Z",
          "tree_id": "270e1514628e6688a649c67bd51095ebcbd3d4c9"
        },
        "date": 1623191512491,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15695.00679274682,
            "unit": "iter/sec",
            "range": "stddev: 0.00002689543198590891",
            "extra": "mean: 63.71453120123101 usec\nrounds: 12756"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3806893.5010769023,
            "unit": "iter/sec",
            "range": "stddev: 8.177294782390034e-7",
            "extra": "mean: 262.68136991946636 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12941.071928164672,
            "unit": "iter/sec",
            "range": "stddev: 0.00001526290966061231",
            "extra": "mean: 77.273351508357 usec\nrounds: 13718"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 120860.70804496614,
            "unit": "iter/sec",
            "range": "stddev: 0.00000762818566961395",
            "extra": "mean: 8.273987602554428 usec\nrounds: 22989"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15627.60896144282,
            "unit": "iter/sec",
            "range": "stddev: 0.00010199639513167187",
            "extra": "mean: 63.9893154779626 usec\nrounds: 7113"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3783464.706524407,
            "unit": "iter/sec",
            "range": "stddev: 2.075099054190815e-7",
            "extra": "mean: 264.30800273504116 nsec\nrounds: 185220"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "0e962742ab159f23089063d2cff4f4d879e36d40",
          "message": "Merge pull request #206 from TeoZosa/add-documentation-emoji-shortcode-conversion-feature\n\n✨ Add Documentation Emoji Shortcode Conversion Feature",
          "timestamp": "2021-06-09T02:03:43Z",
          "tree_id": "cd35015f1b75ede1637a1cd52fde3ae52f6ef3e1"
        },
        "date": 1623204488587,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16534.386508037434,
            "unit": "iter/sec",
            "range": "stddev: 0.000009022200886891964",
            "extra": "mean: 60.48001838555642 usec\nrounds: 7397"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5052073.30648337,
            "unit": "iter/sec",
            "range": "stddev: 1.2446851273079403e-8",
            "extra": "mean: 197.93853717765802 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14489.551216639255,
            "unit": "iter/sec",
            "range": "stddev: 0.000011915267487853873",
            "extra": "mean: 69.01525002731884 usec\nrounds: 9075"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 146000.73365825717,
            "unit": "iter/sec",
            "range": "stddev: 3.9984654024412783e-7",
            "extra": "mean: 6.849280650470515 usec\nrounds: 36900"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16607.04147575286,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025927787898991805",
            "extra": "mean: 60.21542135967154 usec\nrounds: 14045"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5058357.625029177,
            "unit": "iter/sec",
            "range": "stddev: 1.4268470098992044e-8",
            "extra": "mean: 197.6926255774871 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "e19191be57f23fc5dfe08204ae6a7b0e213a6fd4",
          "message": "Merge pull request #207 from TeoZosa/mercari-production-readiness-checklist-reference\n\n📝 Add Mercari Microservice Production Readiness Checklist Documentation Templates",
          "timestamp": "2021-06-09T02:49:01Z",
          "tree_id": "408395b3e66759fffb90e633cf9e89546948061f"
        },
        "date": 1623207197076,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16582.443113189074,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018832486265018253",
            "extra": "mean: 60.30474479388603 usec\nrounds: 6771"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5015693.819748918,
            "unit": "iter/sec",
            "range": "stddev: 2.113337274988489e-8",
            "extra": "mean: 199.3742114126228 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14492.259999425574,
            "unit": "iter/sec",
            "range": "stddev: 0.000006946359283262304",
            "extra": "mean: 69.00235022278352 usec\nrounds: 9434"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 145074.1790668074,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031230269740615495",
            "extra": "mean: 6.893025391785914 usec\nrounds: 36232"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16601.24115520762,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012837517838048422",
            "extra": "mean: 60.23646007252364 usec\nrounds: 7138"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5020065.333111347,
            "unit": "iter/sec",
            "range": "stddev: 1.5873246967152974e-8",
            "extra": "mean: 199.20059474204587 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "9b3f8aa20ef6cb4518eaedd6775d964aee8da408",
          "message": ":wrench: Reorganize and section tox `precommit` testenv deps",
          "timestamp": "2021-06-09T02:59:55Z",
          "tree_id": "ba7595ae75318bf1f3095975a7cf73dfdc4aadc1"
        },
        "date": 1623207910950,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15020.609555423476,
            "unit": "iter/sec",
            "range": "stddev: 0.00003042221528400772",
            "extra": "mean: 66.57519432285164 usec\nrounds: 12788"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 3987898.2615214335,
            "unit": "iter/sec",
            "range": "stddev: 4.4362401575059825e-7",
            "extra": "mean: 250.75865391280107 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11975.702790407304,
            "unit": "iter/sec",
            "range": "stddev: 0.00007066191546607059",
            "extra": "mean: 83.5024062889247 usec\nrounds: 8681"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 95692.19323515812,
            "unit": "iter/sec",
            "range": "stddev: 0.00007937676241103584",
            "extra": "mean: 10.4501732711106 usec\nrounds: 3180"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13453.766026914083,
            "unit": "iter/sec",
            "range": "stddev: 0.0000898704779700003",
            "extra": "mean: 74.32863021398715 usec\nrounds: 2542"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 3901841.9455025746,
            "unit": "iter/sec",
            "range": "stddev: 7.041593475623291e-7",
            "extra": "mean: 256.2892126251623 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "5f8b153759307cf8ceab119e3d5fcb00661345dd",
          "message": ":label: Type annotate `emojize_*` functions",
          "timestamp": "2021-06-09T03:18:46Z",
          "tree_id": "ce67d1bfa6434b135ec9d844fd0df94d8b6917a3"
        },
        "date": 1623209010387,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16363.425763551742,
            "unit": "iter/sec",
            "range": "stddev: 0.0000362890922245982",
            "extra": "mean: 61.11189762154954 usec\nrounds: 7189"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5323688.596569292,
            "unit": "iter/sec",
            "range": "stddev: 7.320515126586846e-9",
            "extra": "mean: 187.83968706289693 nsec\nrounds: 51544"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14119.103964143062,
            "unit": "iter/sec",
            "range": "stddev: 0.00004766651447727596",
            "extra": "mean: 70.82602426751757 usec\nrounds: 9766"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 151089.47055658986,
            "unit": "iter/sec",
            "range": "stddev: 3.6040885464218603e-7",
            "extra": "mean: 6.6185949048345805 usec\nrounds: 42195"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16624.33262700057,
            "unit": "iter/sec",
            "range": "stddev: 0.000006416408851969428",
            "extra": "mean: 60.152790637492444 usec\nrounds: 9634"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5062254.48295336,
            "unit": "iter/sec",
            "range": "stddev: 1.2524609780158703e-8",
            "extra": "mean: 197.54044435523465 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "56dfb4121618d0363e7d24e3620a1a106a6f4881",
          "message": ":heavy_plus_sign: Add emoji library type stubs",
          "timestamp": "2021-06-09T03:51:27Z",
          "tree_id": "37b61d1645f88031205a26f9d79b5f8108fe7cde"
        },
        "date": 1623211008616,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14958.077861395832,
            "unit": "iter/sec",
            "range": "stddev: 0.00001824944017036235",
            "extra": "mean: 66.85350947268593 usec\nrounds: 5596"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4375987.893945212,
            "unit": "iter/sec",
            "range": "stddev: 2.3117717223352494e-7",
            "extra": "mean: 228.51982780501714 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12006.44325999284,
            "unit": "iter/sec",
            "range": "stddev: 0.00018926356694192652",
            "extra": "mean: 83.28861248460989 usec\nrounds: 8170"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 134362.35119342597,
            "unit": "iter/sec",
            "range": "stddev: 0.000003552089939552944",
            "extra": "mean: 7.442561038251074 usec\nrounds: 47847"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15027.346912712053,
            "unit": "iter/sec",
            "range": "stddev: 0.000026351308966652504",
            "extra": "mean: 66.54534601540821 usec\nrounds: 8621"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4417574.462276627,
            "unit": "iter/sec",
            "range": "stddev: 1.5840337400823837e-7",
            "extra": "mean: 226.36856685467515 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "35ab42d60b7580791dfe777ac6bde772320d8d26",
          "message": ":heavy_plus_sign: Add emoji library type stubs",
          "timestamp": "2021-06-09T03:52:24Z",
          "tree_id": "de5e9704968b0aaf058deba0f497522d726c187a"
        },
        "date": 1623211023183,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14452.6606141995,
            "unit": "iter/sec",
            "range": "stddev: 0.00011186220757633544",
            "extra": "mean: 69.19141234227257 usec\nrounds: 8961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4532819.727509118,
            "unit": "iter/sec",
            "range": "stddev: 3.585590014870903e-7",
            "extra": "mean: 220.61322975876902 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12703.214754954253,
            "unit": "iter/sec",
            "range": "stddev: 0.000017520097748936005",
            "extra": "mean: 78.72023100373077 usec\nrounds: 9515"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 135398.204420634,
            "unit": "iter/sec",
            "range": "stddev: 0.000012757988546461308",
            "extra": "mean: 7.3856223151479625 usec\nrounds: 42554"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14961.418097967826,
            "unit": "iter/sec",
            "range": "stddev: 0.000042213431916823125",
            "extra": "mean: 66.83858397993889 usec\nrounds: 9026"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4415621.928189948,
            "unit": "iter/sec",
            "range": "stddev: 1.583546764672745e-7",
            "extra": "mean: 226.46866427012804 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "5fab3a7a801296bebf55e4fcdbe2de8e3bc3877d",
          "message": ":heavy_plus_sign: Add `emoji` library type stubs",
          "timestamp": "2021-06-09T03:53:36Z",
          "tree_id": "de5e9704968b0aaf058deba0f497522d726c187a"
        },
        "date": 1623211106258,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15766.371210472133,
            "unit": "iter/sec",
            "range": "stddev: 0.000009406925149467905",
            "extra": "mean: 63.42613570685137 usec\nrounds: 7332"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4576477.112736221,
            "unit": "iter/sec",
            "range": "stddev: 6.740622051371295e-8",
            "extra": "mean: 218.50868590982637 nsec\nrounds: 64517"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14052.75152022017,
            "unit": "iter/sec",
            "range": "stddev: 0.000012426976269853351",
            "extra": "mean: 71.16044132432881 usec\nrounds: 6979"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 123999.12259559517,
            "unit": "iter/sec",
            "range": "stddev: 0.00002129836324650076",
            "extra": "mean: 8.064573192677761 usec\nrounds: 39683"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15184.577916791437,
            "unit": "iter/sec",
            "range": "stddev: 0.00010135437738972408",
            "extra": "mean: 65.85629218538753 usec\nrounds: 8190"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4475166.5664322395,
            "unit": "iter/sec",
            "range": "stddev: 5.6316213665420836e-8",
            "extra": "mean: 223.4553697959103 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}