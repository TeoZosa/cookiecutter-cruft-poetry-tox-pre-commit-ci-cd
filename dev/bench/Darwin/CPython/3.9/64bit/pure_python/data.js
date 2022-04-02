window.BENCHMARK_DATA = {
  "lastUpdate": 1648861625098,
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
      }
    ]
  }
}