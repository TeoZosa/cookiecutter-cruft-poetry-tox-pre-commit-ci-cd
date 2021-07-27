window.BENCHMARK_DATA = {
  "lastUpdate": 1627393191519,
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
          "id": "8faa9646cd2c798f38a1db627f2756951e72d30a",
          "message": "Merge pull request #258 from TeoZosa/dependabot/pip/sphinx-4.1.2",
          "timestamp": "2021-07-27T13:32:17Z",
          "tree_id": "6f793d049bff066e457f4302b131551e722830c3"
        },
        "date": 1627393190145,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 13983.93866105352,
            "unit": "iter/sec",
            "range": "stddev: 0.000009288667956070138",
            "extra": "mean: 71.5106111545731 usec\nrounds: 8929"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4970829.910151605,
            "unit": "iter/sec",
            "range": "stddev: 1.2458720493724668e-8",
            "extra": "mean: 201.17365069312345 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12503.292945236777,
            "unit": "iter/sec",
            "range": "stddev: 0.00001631819043506071",
            "extra": "mean: 79.97893070088848 usec\nrounds: 9091"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 154746.94570433788,
            "unit": "iter/sec",
            "range": "stddev: 4.3537668152791546e-7",
            "extra": "mean: 6.462163084695816 usec\nrounds: 38759"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14079.759684560828,
            "unit": "iter/sec",
            "range": "stddev: 0.000009537465276731253",
            "extra": "mean: 71.02393949923385 usec\nrounds: 14165"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4754637.31639312,
            "unit": "iter/sec",
            "range": "stddev: 1.856110638647471e-8",
            "extra": "mean: 210.32098422148633 nsec\nrounds: 5771"
          }
        ]
      }
    ]
  }
}