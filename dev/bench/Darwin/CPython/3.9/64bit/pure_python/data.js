window.BENCHMARK_DATA = {
  "lastUpdate": 1648862393985,
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
          "id": "e5bd23c32d3b3f9c651b834d177fa6bf04d5b949",
          "message": "Merge pull request #581 from TeoZosa/breaking/drop-python37-support\n\n➖ Drop Python 3.7 support",
          "timestamp": "2022-04-02T01:03:12Z",
          "tree_id": "30a2b44bdc4b6628ea909dedb95ead24b2898ed0"
        },
        "date": 1648861622317,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 132366.09979244546,
            "unit": "iter/sec",
            "range": "stddev: 0.000004651163181616003",
            "extra": "mean: 7.554804451955855 usec\nrounds: 100001"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4789566.338888118,
            "unit": "iter/sec",
            "range": "stddev: 1.8520061777324992e-7",
            "extra": "mean: 208.78716970263415 nsec\nrounds: 55556"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 33690.48483761565,
            "unit": "iter/sec",
            "range": "stddev: 0.000012126068990276623",
            "extra": "mean: 29.681971180286883 usec\nrounds: 45455"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 74584.37526663877,
            "unit": "iter/sec",
            "range": "stddev: 0.000012414578005086576",
            "extra": "mean: 13.40763392366035 usec\nrounds: 90910"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 129287.52560573409,
            "unit": "iter/sec",
            "range": "stddev: 0.000007730920577149653",
            "extra": "mean: 7.734698265086516 usec\nrounds: 20001"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4778562.926552782,
            "unit": "iter/sec",
            "range": "stddev: 1.3429947571613934e-7",
            "extra": "mean: 209.26793585648142 nsec\nrounds: 52632"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "9c217754cb6b9117a16947f9f7699f2e7d84bc17",
          "message": "Merge pull request #582 from TeoZosa/dependabot/pip/hypothesis-6.41.0",
          "timestamp": "2022-04-02T01:06:32Z",
          "tree_id": "c7d22b5abdbd37a7ed36d7d4b0a818a312876942"
        },
        "date": 1648862391619,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 124929.5716582619,
            "unit": "iter/sec",
            "range": "stddev: 0.0000041740477548901685",
            "extra": "mean: 8.004509954900398 usec\nrounds: 100001"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5004765.499582683,
            "unit": "iter/sec",
            "range": "stddev: 3.475457109074498e-8",
            "extra": "mean: 199.80956152350433 nsec\nrounds: 55556"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 37408.78240194503,
            "unit": "iter/sec",
            "range": "stddev: 0.000010160980087412006",
            "extra": "mean: 26.731690683094943 usec\nrounds: 45455"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 78627.24493281406,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039545505328881275",
            "extra": "mean: 12.718237817622718 usec\nrounds: 90910"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 120391.60426971962,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021701580232158743",
            "extra": "mean: 8.30622705018228 usec\nrounds: 19608"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4907444.376524831,
            "unit": "iter/sec",
            "range": "stddev: 7.296156495176078e-8",
            "extra": "mean: 203.77204982364836 nsec\nrounds: 55556"
          }
        ]
      }
    ]
  }
}