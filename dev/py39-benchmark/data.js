window.BENCHMARK_DATA = {
  "lastUpdate": 1626702630284,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
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
          "id": "1ba6dd72aa631e35d12c8a177551b7ed56af53ff",
          "message": "Merge pull request #249 from TeoZosa/dependabot/pip/emoji-1.4.1",
          "timestamp": "2021-07-19T13:42:11Z",
          "tree_id": "effcd3177ff7a3fa3232566ae63d52af00e8a7f4"
        },
        "date": 1626702628545,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16432.769185427984,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016861821488561569",
            "extra": "mean: 60.8540160648496 usec\nrounds: 13072"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5138033.430509567,
            "unit": "iter/sec",
            "range": "stddev: 2.7721386420225947e-8",
            "extra": "mean: 194.62699367855677 nsec\nrounds: 49020"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13374.16184269331,
            "unit": "iter/sec",
            "range": "stddev: 0.00007851590347567604",
            "extra": "mean: 74.77104073974766 usec\nrounds: 9303"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 150508.91961354716,
            "unit": "iter/sec",
            "range": "stddev: 3.799751688483736e-7",
            "extra": "mean: 6.644124498186824 usec\nrounds: 46081"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16210.969819618656,
            "unit": "iter/sec",
            "range": "stddev: 0.00003118856282740932",
            "extra": "mean: 61.68662400381446 usec\nrounds: 8032"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4980472.2226263005,
            "unit": "iter/sec",
            "range": "stddev: 3.006640081447373e-8",
            "extra": "mean: 200.78417372886574 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}