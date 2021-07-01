window.BENCHMARK_DATA = {
  "lastUpdate": 1625145717626,
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
          "id": "070f87d22980145981f5b5b36b884e22a172556e",
          "message": "Merge pull request #235 from TeoZosa/dependabot/github_actions/actions/setup-node-2.2.0",
          "timestamp": "2021-07-01T13:10:48Z",
          "tree_id": "ccd62908ab3f74e1230653e1156d9f4a02560289"
        },
        "date": 1625145715595,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15159.522896385974,
            "unit": "iter/sec",
            "range": "stddev: 0.000008082350839598635",
            "extra": "mean: 65.96513668899169 usec\nrounds: 12437"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4340580.343891989,
            "unit": "iter/sec",
            "range": "stddev: 5.603633605116907e-8",
            "extra": "mean: 230.38393965152085 nsec\nrounds: 151516"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12969.466570905894,
            "unit": "iter/sec",
            "range": "stddev: 0.000014979972651689329",
            "extra": "mean: 77.10417344713908 usec\nrounds: 9242"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 135026.0283411879,
            "unit": "iter/sec",
            "range": "stddev: 0.000001398725257412082",
            "extra": "mean: 7.405979515839491 usec\nrounds: 38908"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15158.498840441933,
            "unit": "iter/sec",
            "range": "stddev: 0.000010081710490501399",
            "extra": "mean: 65.96959306630431 usec\nrounds: 6173"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4335457.339499349,
            "unit": "iter/sec",
            "range": "stddev: 4.940176424063785e-8",
            "extra": "mean: 230.65617343044525 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}